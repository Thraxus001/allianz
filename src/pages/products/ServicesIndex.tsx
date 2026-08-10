import { NavLink } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageHero from "../../components/PageHero";
import SectionHeading from "../../components/SectionHeading";
import { services } from "../../data/content";
import serviceHeroImg from "../../assets/maintenance.jpeg";

export default function ServicesIndex() {
  return (
    <div>
      <PageHero
        eyebrow="Services"
        heading={"Consultancy, operation\n& plant maintenance."}
        body="We stay long after commissioning. Explore our full range of engineering, operating, training and retrofitting services below."
        image={serviceHeroImg}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <SectionHeading eyebrow="Services Catalog" heading="How we support your utilities." />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <NavLink
              key={s.slug}
              to={`/services/${s.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={s.heroImage}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 font-mono text-xs font-semibold text-[var(--color-current)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-2xl font-bold text-[var(--color-deepwater)]">
                  {s.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-black">
                  {s.tagline}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-current)]">
                  View details
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </div>
            </NavLink>
          ))}
        </div>
      </section>
    </div>
  );
}
