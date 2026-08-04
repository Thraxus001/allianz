import { NavLink } from "react-router-dom";
import { Droplets, Wind, Wrench, ClipboardCheck, ArrowUpRight } from "lucide-react";
import HeroCarousel from "../components/HeroCarousel";
import SectionHeading from "../components/SectionHeading";
import ContourDivider from "../components/ContourDivider";
import TechCard from "../components/TechCard";
import { technologies } from "../data/content";
import aboutImg from "../assets/about.png";

const stats = [
  { value: "1,500+", label: "Reference plants worldwide" },
  { value: "600,000", label: "m³/day, largest C-TECH™ install" },
  { value: "99.9999%", label: "Pathogen removal, C-MEM™ UF" },
  { value: "3", label: "East African countries served" },
];

const services = [
  { icon: Droplets, title: "Water & wastewater treatment", body: "From borehole to reuse — design, build and commission municipal and industrial plants." },
  { icon: Wind, title: "HVAC systems", body: "Climate and air-handling systems engineered alongside your process needs." },
  { icon: Wrench, title: "Spares & OEM parts", body: "Fast-track delivery of genuine replacement components and treatment chemicals." },
  { icon: ClipboardCheck, title: "AMC & O&M", body: "Annual maintenance contracts and full-scope operations, staffed on-site." },
];

export default function Home() {
  return (
    <div>
      <HeroCarousel />

      {/* Welcome to Allianz */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <SectionHeading
              eyebrow="Welcome to Allianz Utilities (EA) Ltd"
              heading={"Water is life\nmatter and matrix."}
              body="Allianz Utilities is an East African engineering company headquartered in Nairobi, Kenya, operating on a national and international scale. We design, engineer and manage water treatment plants, wastewater treatment plants, HVAC systems and related utilities — backed by energy-efficient equipment and engineers who add value at every step, from consultancy through execution."
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <NavLink
                to="/what-we-do"
                className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-deepwater)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-current)]"
              >
                What We Do <ArrowUpRight size={16} />
              </NavLink>
            </div>
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl md:aspect-[3/4]">
            <img
              src={aboutImg}
              alt="Coastal water landscape in East Africa"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-[var(--color-deepwater)] py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 md:grid-cols-4 md:px-8">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl font-bold text-[var(--color-leaf)] md:text-5xl">{s.value}</p>
              <p className="mt-1 text-sm text-white/70">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
      <ContourDivider from="var(--color-deepwater)" to="var(--color-foam)" />

      {/* About / mission */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          eyebrow="Our Mission"
          heading="Clean water for the world."
          body="Water is our most valuable resource — essential for life, health and economic development. As climate change, industrialization and population growth put pressure on supply, we build systems that deliver top water quality, reduce ecological footprint and help preserve natural resources, for municipalities, industries, households and agriculture alike."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-foam-2)] text-[var(--color-current)] transition-colors group-hover:bg-[var(--color-current)] group-hover:text-white">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-[var(--color-deepwater)]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink)]/70">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section className="bg-[var(--color-foam-2)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Our Technologies" heading="Engineered systems, proven worldwide." />
            <NavLink
              to="/products-and-services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-current)] hover:underline"
            >
              View all products &amp; services <ArrowUpRight size={16} />
            </NavLink>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {technologies.map((t) => (
              <TechCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[var(--color-current)] py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
            Have a water challenge worth solving?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">
            Tell us about your site, your flows and your compliance targets — our engineers will come back with a design that fits.
          </p>
          <NavLink
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[var(--color-current)] transition-transform hover:scale-105"
          >
            Get In Touch <ArrowUpRight size={16} />
          </NavLink>
        </div>
      </section>
    </div>
  );
}
