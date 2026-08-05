import { NavLink } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

type Props = {
  name: string;
  subtitle: string;
  image: string;
  slug: string;
};

export default function TechCard({ name, subtitle, image, slug }: Props) {
  return (
    <NavLink
      to={`/products/${slug}`}
      className="group relative flex h-72 flex-col justify-end overflow-hidden rounded-2xl"
    >
      <img
        src={image}
        alt={name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
      <div className="relative z-10 p-5">
        <p className="eyebrow text-[var(--color-leaf)]">{subtitle}</p>
        <div className="mt-1 flex items-center justify-between gap-2">
          <h3 className="font-display text-2xl font-bold text-white">{name}</h3>
          <ArrowUpRight
            size={20}
            className="shrink-0 text-white opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
          />
        </div>
      </div>
    </NavLink>
  );
}
