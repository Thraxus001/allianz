import { NavLink } from "react-router-dom";
import ContourDivider from "./ContourDivider";
import waterVideo from "../assets/water.mp4";

export default function VideoHero() {
  return (
    <section className="relative h-[92vh] min-h-[560px] w-full overflow-hidden bg-neutral-950">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      >
        <source
          src={waterVideo}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Gradients */}
      {/* Content Overlay */}
      <div className="relative z-10 flex h-full max-w-7xl flex-col justify-end px-5 pb-24 pt-32 mx-auto md:px-8 md:pb-32">
        <h1 className="mt-4 whitespace-pre-line font-display text-5xl font-bold leading-[0.92] tracking-tight text-white sm:text-6xl md:text-7xl">
          Clean water.{"\n"}Better future.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
          East African company designing, building and maintaining water treatment,
          wastewater treatment and HVAC systems — from concept through designing to commisioning.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <NavLink
            to="/products"
            className="rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03] hover:bg-[var(--color-primary-hover)]"
          >
            Explore Solutions
          </NavLink>
        </div>
      </div>

      <ContourDivider
        className="absolute bottom-0 left-0 z-10"
        to="var(--color-foam)"
        from="var(--color-primary)"
      />
    </section>
  );
}
