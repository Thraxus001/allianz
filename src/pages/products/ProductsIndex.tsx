import { NavLink } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageHero from "../../components/PageHero";
import SectionHeading from "../../components/SectionHeading";
import { products } from "../../data/content";
import productsImg from "../../assets/productss.jpeg";

const categories = [
  {
    name: "Waste Water Treatment",
    tagline: "Biological and mechanical systems for sewage, effluent reclamation, and recycling."
  },
  {
    name: "Water Treatment",
    tagline: "Filtration, desalination, and disinfection systems for borehole, municipal, and process loops."
  },
  {
    name: "River Water Cleaning and Rejuvenation",
    tagline: "Large-scale ecological engineering systems for surface water body restoration."
  }
];

export default function ProductsIndex() {
  return (
    <div>
      <PageHero
        eyebrow="Products"
        heading={"Engineered Systems.\nOne High Standard."}
        body="Every plant is sized to your feed parameters and discharge targets. Explore our structured treatment solutions."
        image={productsImg}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24 space-y-20">
        <div>
          <SectionHeading eyebrow="Full Range" heading="Choose your treatment challenge." />
        </div>

        {categories.map((cat) => {
          const catProducts = products.filter(p => p.category === cat.name);
          if (catProducts.length === 0) return null;

          return (
            <div key={cat.name} className="border-t border-black/5 pt-12 first:border-t-0 first:pt-0">
              <div className="mb-8">
                <h2 className="font-display text-3xl font-bold text-[var(--color-deepwater)]">
                  {cat.name}
                </h2>
                <p className="mt-2 text-sm text-[var(--color-ink)]/65 max-w-2xl">
                  {cat.tagline}
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {catProducts.map((p, i) => (
                  <NavLink
                    key={p.slug}
                    to={`/products/${p.slug}`}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative h-48 overflow-hidden bg-[var(--color-foam-2)]/30">
                      <img
                        src={p.heroImage}
                        alt={p.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 font-mono text-xs font-semibold text-[var(--color-current)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-display text-xl font-bold text-[var(--color-deepwater)] leading-snug">
                        {p.title}
                      </h3>
                      <p className="mt-2 flex-1 text-xs leading-relaxed text-black/85">
                        {p.tagline}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-current)]">
                        View details
                        <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
