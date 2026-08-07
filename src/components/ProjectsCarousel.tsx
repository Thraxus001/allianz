import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ContourDivider from "./ContourDivider";

// Local image assets matching the projects page
import reverseImg from "../assets/reverse.jpeg";
import ultrafiltrationImg from "../assets/ultrafiltration.png";
import effluentImg from "../assets/effluent.png";
import central from "../assets/Central HVAC.avif";

const AUTOPLAY_MS = 6000;

const projectSlides = [
  {
    image: reverseImg,
    eyebrow: "Water Treatment",
    heading: "6,000 LPH Double-Pass\nReverse Osmosis System",
    body: "High-purity water system engineered for clinical vaccine product formulation and manufacturing at Kenya BioVax Institute (BioVax).",
  },
  {
    image: ultrafiltrationImg,
    eyebrow: "Wastewater Treatment",
    heading: "Sabis School RO & MBR\nWastewater Systems",
    body: "15,000 LPH Reverse Osmosis system and 20 kld biological MBR Sewage Treatment Plant commissioned for Sabis International School.",
  },
  {
    image: central,
    eyebrow: "HVAC & Utilities",
    heading: "Central Utility O&M &\nWater Quality Testing Lab",
    body: "Ongoing management of 2,000 m³/day RO, 1,500 m³/day biological STP, and a fully equipped water quality testing laboratory for Two Rivers Mall.",
  },
  {
    image: effluentImg,
    eyebrow: "Wastewater Treatment",
    heading: "20 kld C-MEM Wastewater\nRecycling System",
    body: "Complete biological membrane bioreactor treatment plant designed for cereal processing waste at Weetabix East Africa.",
  }
];

export default function ProjectsCarousel() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((next: number) => {
    setIndex(((next % projectSlides.length) + projectSlides.length) % projectSlides.length);
  }, []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => go(index + 1), AUTOPLAY_MS);
  }, [go, index]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const slide = projectSlides[index];

  return (
    <section className="relative h-[92vh] min-h-[560px] w-full overflow-hidden bg-[var(--color-deepwater)]">
      {projectSlides.map((s, i) => (
        <div
          key={s.image}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <img
            src={s.image}
            alt=""
            className="h-full w-full object-cover opacity-55"
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 z-[1]" />

      <div className="relative z-10 flex h-full max-w-7xl flex-col justify-end px-5 pb-24 pt-44 mx-auto md:px-8 md:pb-32 lg:pt-48">
        
        <span 
          key={`eyebrow-${index}`}
          className="eyebrow text-[var(--color-leaf)] font-mono text-sm tracking-widest uppercase font-bold"
        >
          {slide.eyebrow}
        </span>

        <h1
          key={`heading-${index}`}
          className="mt-4 whitespace-pre-line font-display text-5xl font-bold leading-[0.92] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          {slide.heading}
        </h1>
        
        <p 
          key={`body-${index}`} 
          className="mt-5 max-w-md text-base leading-relaxed text-white/80 md:text-lg"
        >
          {slide.body}
        </p>

        {/* Controls */}
        <div className="mt-10 flex items-center gap-4">
          <button
            onClick={() => go(index - 1)}
            aria-label="Previous slide"
            className="rounded-full border border-white/30 p-2 text-white transition-colors hover:bg-white/10"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex items-center gap-2">
            {projectSlides.map((s, i) => (
              <button
                key={s.image}
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-[var(--color-leaf)]" : "w-3 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => go(index + 1)}
            aria-label="Next slide"
            className="rounded-full border border-white/30 p-2 text-white transition-colors hover:bg-white/10"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <ContourDivider className="absolute bottom-0 left-0 z-10" to="var(--color-foam)" from="var(--color-current)" />
    </section>
  );
}
