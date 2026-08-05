import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { heroSlides } from "../data/content";
import ContourDivider from "./ContourDivider";

const AUTOPLAY_MS = 6000;

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((next: number) => {
    setIndex(((next % heroSlides.length) + heroSlides.length) % heroSlides.length);
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

  const slide = heroSlides[index];

  return (
    <section className="relative h-[92vh] min-h-[560px] w-full overflow-hidden bg-[var(--color-deepwater)]">
      {heroSlides.map((s, i) => (
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

      {/* Gradient Hue Overlay for Text Visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 z-[1]" />

      <div className="relative z-10 flex h-full max-w-7xl flex-col justify-end px-5 pb-24 pt-44 mx-auto md:px-8 md:pb-32 lg:pt-48">
        
        <h1
          key={`heading-${index}`}
          className="mt-4 whitespace-pre-line font-display text-5xl font-bold leading-[0.92] tracking-tight text-[var(--color-leaf)] sm:text-6xl md:text-7xl"
        >
          {slide.heading}
        </h1>
        <p key={`body-${index}`} className="mt-5 max-w-md text-base leading-relaxed text-white/80 md:text-lg">
          {slide.body}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <NavLink
            to="/products-and-services"
            className="rounded-full bg-[var(--color-current)] px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03] hover:bg-[var(--color-current-2)]"
          >
            Explore Solutions
          </NavLink>
          <NavLink
            to="/contact"
            className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            Talk To An Engineer
          </NavLink>
        </div>

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
            {heroSlides.map((s, i) => (
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
