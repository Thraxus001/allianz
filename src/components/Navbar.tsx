import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { products } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileProductsOpen(false);
  }, [location.pathname]);

  const linkBase =
    "text-sm font-medium tracking-wide transition-colors hover:text-[var(--color-current)]";

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-foam)]/95 shadow-sm backdrop-blur border-b border-black/5"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <NavLink to="/" className="shrink-0">
          <Logo dark={!scrolled} />
        </NavLink>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkBase} ${scrolled ? "text-[var(--color-ink)]" : "text-white"} ${
                isActive ? "text-[var(--color-current)]" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/what-we-do"
            className={({ isActive }) =>
              `${linkBase} ${scrolled ? "text-[var(--color-ink)]" : "text-white"} ${
                isActive ? "text-[var(--color-current)]" : ""
              }`
            }
          >
            What We Do
          </NavLink>

          <div
            className="relative"
            onMouseEnter={() => setDesktopProductsOpen(true)}
            onMouseLeave={() => setDesktopProductsOpen(false)}
          >
            <NavLink
              to="/products-and-services"
              className={({ isActive }) =>
                `${linkBase} flex items-center gap-1 ${
                  scrolled ? "text-[var(--color-ink)]" : "text-white"
                } ${isActive ? "text-[var(--color-current)]" : ""}`
              }
            >
              Products &amp; Services
              <ChevronDown size={14} className={desktopProductsOpen ? "rotate-180 transition-transform" : "transition-transform"} />
            </NavLink>

            {desktopProductsOpen && (
              <div className="absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3">
                <div className="overflow-hidden rounded-xl border border-black/5 bg-white shadow-xl">
                  <NavLink
                    to="/products-and-services"
                    className="block border-b border-black/5 bg-[var(--color-foam-2)] px-4 py-3 text-sm font-semibold text-[var(--color-current)]"
                  >
                    All Products &amp; Services
                  </NavLink>
                  {products.map((p) => (
                    <NavLink
                      key={p.slug}
                      to={`/products-and-services/${p.slug}`}
                      className="block px-4 py-2.5 text-sm text-[var(--color-ink)] hover:bg-[var(--color-foam-2)] hover:text-[var(--color-current)]"
                    >
                      {p.navLabel}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>

          <NavLink
            to="/careers"
            className={({ isActive }) =>
              `${linkBase} ${scrolled ? "text-[var(--color-ink)]" : "text-white"} ${
                isActive ? "text-[var(--color-current)]" : ""
              }`
            }
          >
            Careers
          </NavLink>
          <NavLink
            to="/contact"
            className="rounded-full bg-[var(--color-current)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-current-2)]"
          >
            Contact Us
          </NavLink>
        </div>

        {/* Mobile toggle */}
        <button
          className={`md:hidden ${scrolled ? "text-[var(--color-ink)]" : "text-white"}`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile panel */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          mobileOpen ? "max-h-[26rem]" : "max-h-0"
        } bg-[var(--color-foam)] border-t border-black/5`}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          <NavLink to="/" end className="rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--color-ink)] hover:bg-[var(--color-foam-2)]">
            Home
          </NavLink>
          <NavLink to="/what-we-do" className="rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--color-ink)] hover:bg-[var(--color-foam-2)]">
            What We Do
          </NavLink>

          <button
            className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--color-ink)] hover:bg-[var(--color-foam-2)]"
            onClick={() => setMobileProductsOpen((v) => !v)}
            aria-expanded={mobileProductsOpen}
          >
            Products &amp; Services
            <ChevronDown size={16} className={mobileProductsOpen ? "rotate-180 transition-transform" : "transition-transform"} />
          </button>
          <div
            className={`overflow-hidden pl-3 transition-[max-height] duration-300 ${
              mobileProductsOpen ? "max-h-96" : "max-h-0"
            }`}
          >
            <NavLink to="/products-and-services" className="block rounded-lg px-3 py-2 text-sm font-semibold text-[var(--color-current)]">
              All Products &amp; Services
            </NavLink>
            {products.map((p) => (
              <NavLink
                key={p.slug}
                to={`/products-and-services/${p.slug}`}
                className="block rounded-lg px-3 py-2 text-sm text-[var(--color-ink)]/80 hover:bg-[var(--color-foam-2)]"
              >
                {p.navLabel}
              </NavLink>
            ))}
          </div>

          <NavLink to="/careers" className="rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--color-ink)] hover:bg-[var(--color-foam-2)]">
            Careers
          </NavLink>
          <NavLink
            to="/contact"
            className="mt-2 rounded-full bg-[var(--color-current)] px-4 py-2.5 text-center text-sm font-semibold text-white"
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </header>
  );
}
