import { NavLink } from "react-router-dom";
import { ArrowUpRight, Eye, Target, Award, Check } from "lucide-react";
import VideoHero from "../components/VideoHero";
import SectionHeading from "../components/SectionHeading";
import TechCard from "../components/TechCard";
import { technologies } from "../data/content";
import aboutImg from "../assets/waterhand.jpg";
import sfcLogo from "../assets/sfc logo.jpeg";
import wteLogo from "../assets/wte logo.jpeg";
import handImg from "../assets/hand.jpg";

const valuesList = [
  "Integrity",
  "Excellence",
  "Innovation",
  "Reliability",
  "Sustainability",
  "Customer focus",
];

export default function Home() {
  return (
    <div>
      <VideoHero />

      {/* Welcome / Intro */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start ">
          {/* New Left Image takes prominent position */}
          <div className="relative h-72 w-82 overflow-hidden rounded-2xl lg:col-span-3 order-2 lg:order-1">
            <img
              src={aboutImg}
              alt="Allianz Utilities design and engineering plans"
              className="h-full w-full object-cover"
            />
          </div>
          
          {/* Welcome Text + Reduced Original Image & Slogan */}
          <div className="lg:col-span-8 lg:col-start-5 order-1 lg:order-2">
            <div className="flex flex-col text-left items-start">
              <h1 className="font-display text-4xl font-extrabold leading-[0.95] tracking-tight text-[var(--color-secondary)] md:text-5xl lg:text-6xl">
                Welcome to Allianz Utilities
              </h1>
              <span className="eyebrow text-[var(--color-current)]">
                Proven technology. Reliable water.
              </span>
              
              <p className="mt-5 max-w-xl text-base leading-relaxed text-black">
                At Allianz Utilities, we combine proven technology and expertise to deliver clean, reliable water — for every home, business, and industry we serve. From water treatment and wastewater plants to HVAC and utility services, we help clients achieve sustainable solutions tailored to their needs.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <NavLink
                to="/what-we-do"
                className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-deepwater)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-current)]"
              >
                What We Do <ArrowUpRight size={16} />
              </NavLink>
            </div>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:items-start mt-16 md:mt-24">
          {/* New Right Image on desktop */}
          <div className="relative h-72 w-92 overflow-hidden rounded-2xl lg:col-span-3 order-2 lg:order-2">
            <img
              src={handImg}
              alt="Allianz Utilities design and engineering plans"
              className="h-full w-full object-cover"
            />
          </div>
          
          {/* Welcome Text on the left */}
          <div className="lg:col-span-7 order-1 lg:order-1">
            <div className="flex flex-col text-left items-start">
              <h1 className="font-display text-4xl font-extrabold leading-[0.95] tracking-tight text-[var(--color-current)] md:text-5xl lg:text-6xl">
                Treat Today. Save Your Tomorrow
              </h1>
              <span className="eyebrow text-[var(--color-secondary)]">
                Many lives. One choice.
              </span>
              
              <p className="mt-5 max-w-xl text-base leading-relaxed text-black">
                Every choice we make shapes tomorrow. Clean water is not just a resource—it is life itself. By acting now, we safeguard communities, preserve health, and ensure that generations to come inherit a world where reliability and sustainability are more than promises. Many lives depend on one choice, and that choice begins today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="bg-[var(--color-foam-2)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Our Technologies" heading="Engineered systems, proven worldwide." />
            <NavLink
              to="/products"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-current)] hover:underline"
            >
              View all products <ArrowUpRight size={16} />
            </NavLink>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {technologies.map((t) => (
              <TechCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* What we do & Vision / Mission / Values */}
      <section className="bg-white border-y border-black/5 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="What We Do "
            heading="End-to-end utility engineering."
            body="We design, engineer, and manage a wide range of utility systems, including water treatment plants, wastewater treatment plants, HVAC systems, and related engineering solutions. Our approach covers the full project cycle, ensuring every solution is efficient, effective, and built for lasting value."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {/* Vision */}
            <div className="rounded-2xl bg-[var(--color-surface-light)] p-6 border border-black/5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[var(--color-current)] shadow-sm">
                <Eye size={20} />
              </div>
              <h2 className="mt-4 font-display text-2xl md:text-3xl font-bold text-[var(--color-deepwater)]">Our Vision</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink)]/70">
                To be the trusted partner of choice in Africa for sustainable engineering solutions that support clean water, effective wastewater management and efficient utility operations.
              </p>
            </div>

            {/* Mission */}
            <div className="rounded-2xl bg-[var(--color-surface-light)] p-6 border border-black/5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[var(--color-current)] shadow-sm">
                <Target size={20} />
              </div>
              <h2 className="mt-4 font-display text-2xl md:text-3xl font-bold text-[var(--color-deepwater)]">Our Mission</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink)]/70">
                To provide innovative, efficient and dependable engineering services that meet client needs and promote sustainable infrastructure performance.
              </p>
            </div>

            {/* Values */}
            <div className="rounded-2xl bg-[var(--color-surface-light)] p-6 border border-black/5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[var(--color-current)] shadow-sm">
                <Award size={20} />
              </div>
              <h2 className="mt-4 font-display text-2xl md:text-3xl font-bold text-[var(--color-deepwater)]">Our Values</h2>
              <ul className="mt-3 grid grid-cols-2 gap-x-2 gap-y-2.5">
                {valuesList.map((val) => (
                  <li key={val} className="flex items-center gap-1.5 text-sm text-[var(--color-ink)]/80">
                    <Check size={16} className="text-[var(--color-secondary)] shrink-0" />
                    {val}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      

      {/* Partners Section */}
      <section className="bg-[var(--color-foam-2)]/60 border-t border-black/5 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <SectionHeading 
              eyebrow="Our Partners" 
              heading="Technology & Innovation Partners" 
              body="We collaborate with global leaders in water treatment and environmental engineering to integrate world-class systems and components."
            />
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
            {/* SFC Umwelttechnik */}
            <div className="flex flex-col items-center p-8 rounded-2xl border border-black/5 bg-white shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex h-20 w-44 items-center justify-center rounded-xl bg-white p-3 border border-black/5 shadow-inner">
                <img
                  src={sfcLogo}
                  alt="SFC Umwelttechnik Logo"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-[var(--color-deepwater)] text-center">SFC</h3>
              <p className="mt-2 text-center text-sm leading-relaxed text-[var(--color-ink)]/70 flex-1">
                A pioneer in advanced Sequencing Batch Reactor (SBR) biological wastewater treatment systems, delivering high-efficiency and cost-effective C-Tech™ sanitation systems globally.
              </p>
              <a
                href="https://sfcu.at/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-[var(--color-foam-2)] px-4 py-2 text-xs font-semibold text-[var(--color-deepwater)] hover:bg-[var(--color-leaf)] hover:text-white transition-colors"
              >
                Visit SFC Website <ArrowUpRight size={14} />
              </a>
            </div>

            {/* WTE Group */}
            <div className="flex flex-col items-center p-8 rounded-2xl border border-black/5 bg-white shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex h-20 w-44 items-center justify-center rounded-xl bg-white p-3 border border-black/5 shadow-inner">
                <img
                  src={wteLogo}
                  alt="WTE Group Logo"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-[var(--color-deepwater)] text-center">WTE Group</h3>
              <p className="mt-2 text-center text-sm leading-relaxed text-[var(--color-ink)]/70 flex-1">
                A leading European water infrastructure group, planning, building, and operating advanced wastewater treatment plants and utility energy recovery facilities.
              </p>
              <a
                href="https://wteinfra.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-[var(--color-foam-2)] px-4 py-2 text-xs font-semibold text-[var(--color-deepwater)] hover:bg-[var(--color-leaf)] hover:text-white transition-colors"
              >
                Visit WTE Website <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[var(--color-current)] py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
            Let’s build your solution
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85 text-sm leading-relaxed md:text-base">
            At Allianz Utilities, we provide dependable water, wastewater, HVAC, operation and maintenance services backed by experienced professionals who ensure every project is handled with care, quality, and technical excellence.
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
