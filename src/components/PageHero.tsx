import ContourDivider from "./ContourDivider";

type Props = {
  eyebrow: string;
  heading: string;
  body?: string;
  image: string;
};

export default function PageHero({ eyebrow, heading, body, image }: Props) {
  return (
    <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden bg-neutral-950">
      <img src={image} alt="" className="h-full w-full object-cover opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent" />
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-20 pt-32 md:px-8">
        <span className="eyebrow text-[var(--color-leaf)]">{eyebrow}</span>
        <h1 className="mt-4 whitespace-pre-line font-display text-4xl font-bold leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl">
          {heading}
        </h1>
        {body && <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80">{body}</p>}
      </div>
      <ContourDivider className="absolute bottom-0 left-0 z-10" to="var(--color-foam)" from="var(--color-current)" />
    </section>
  );
}
