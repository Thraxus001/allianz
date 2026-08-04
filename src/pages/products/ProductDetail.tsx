import { Navigate, NavLink, useParams } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import PageHero from "../../components/PageHero";
import SectionHeading from "../../components/SectionHeading";
import ContourDivider from "../../components/ContourDivider";
import { products } from "../../data/content";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) return <Navigate to="/products-and-services" replace />;

  const others = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <div>
      <PageHero
        eyebrow="Products & Services"
        heading={product.title}
        body={product.tagline}
        image={product.heroImage}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <div className="grid gap-14 md:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeading eyebrow="Overview" heading="How it works." body={product.intro} />

            <div className="mt-12 space-y-8">
              {product.process.map((step, i) => (
                <div key={step.title} className="flex gap-5">
                  <span className="font-mono text-sm text-[var(--color-current)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-[var(--color-deepwater)]">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-ink)]/70">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {product.specNote && (
              <div className="mt-10 rounded-xl border border-[var(--color-current)]/20 bg-[var(--color-foam-2)] p-5 font-mono text-xs leading-relaxed text-[var(--color-current)]">
                {product.specNote}
              </div>
            )}
          </div>

          <aside className="space-y-8">
            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <p className="eyebrow text-[var(--color-current)]">Key Features</p>
              <ul className="mt-4 space-y-3">
                {product.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-[var(--color-ink)]/80">
                    <Check size={16} className="mt-0.5 shrink-0 text-[var(--color-leaf-2)]" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <p className="eyebrow text-[var(--color-current)]">Applications</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {product.applications.map((a) => (
                  <span
                    key={a}
                    className="rounded-full bg-[var(--color-foam-2)] px-3 py-1.5 text-xs font-medium text-[var(--color-deepwater)]"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-[var(--color-deepwater)] p-6">
              <p className="font-display text-xl font-bold text-white">Need this sized for your site?</p>
              <p className="mt-2 text-sm text-white/70">
                Send us your flows and target parameters — we'll come back with a proposal.
              </p>
              <NavLink
                to="/contact"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--color-leaf)] px-5 py-2.5 text-sm font-semibold text-[var(--color-deepwater)] transition-transform hover:scale-105"
              >
                Request A Quote <ArrowUpRight size={16} />
              </NavLink>
            </div>
          </aside>
        </div>
      </section>

      <ContourDivider from="var(--color-foam)" to="var(--color-foam-2)" />
      <section className="bg-[var(--color-foam-2)] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="Related" heading="Other solutions." />
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {others.map((p) => (
              <NavLink
                key={p.slug}
                to={`/products-and-services/${p.slug}`}
                className="group rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="font-display text-lg font-bold text-[var(--color-deepwater)]">{p.title}</h3>
                <p className="mt-1.5 text-sm text-[var(--color-ink)]/70">{p.tagline}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-current)]">
                  View details <ArrowUpRight size={13} />
                </span>
              </NavLink>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
