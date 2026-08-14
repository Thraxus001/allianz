import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { products, services } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
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
    setMobileServicesOpen(false);
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
        <NavLink to="/" className="">
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

          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDesktopProductsOpen(true)}
            onMouseLeave={() => setDesktopProductsOpen(false)}
          >
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `${linkBase} flex items-center gap-1 ${
                  scrolled ? "text-[var(--color-ink)]" : "text-white"
                } ${isActive ? "text-[var(--color-current)]" : ""}`
              }
            >
              Products
              <ChevronDown
                size={14}
                className={desktopProductsOpen ? "rotate-180 transition-transform" : "transition-transform"}
              />
            </NavLink>

            {desktopProductsOpen && (
              <div className="absolute left-1/2 top-full w-[880px] -translate-x-1/2 pt-3">
                <div className="overflow-hidden rounded-2xl border border-black/5 bg-white p-6 shadow-2xl grid grid-cols-3 gap-6">
                  {/* Waste Water Treatment Column */}
                  <div>
                    <h3 className="font-display text-[15px] font-extrabold uppercase tracking-wider text-[var(--color-current)] mb-3 border-b border-black/5 pb-1">
                      Waste Water Treatment
                    </h3>
                    <div className="space-y-1">
                      {products.filter(p => p.category === "Waste Water Treatment").map((p) => (
                        <NavLink
                          key={p.slug}
                          to={`/products/${p.slug}`}
                          className="block rounded-lg px-3 py-1.5 text-sm text-[var(--color-ink)] hover:bg-[var(--color-foam-2)] hover:text-[var(--color-current)] transition-colors"
                        >
                          {p.navLabel}
                        </NavLink>
                      ))}
                    </div>
                  </div>

                  {/* Filtration & Ion Exchange Column */}
                  <div>
                    <h3 className="font-display text-[15px] font-extrabold uppercase tracking-wider text-[var(--color-current)] mb-3 border-b border-black/5 pb-1">
                      Filtration & Ion Exchange
                    </h3>
                    <div className="space-y-2">
                      {products
                        .filter(p => p.category === "Water Treatment" && p.subProducts && p.subProducts.length > 0)
                        .map((p) => (
                          <div key={p.slug} className="group/item relative space-y-0.5">
                            <NavLink
                              to={`/products/${p.slug}`}
                              className="block rounded-lg px-3 py-1 text-sm font-semibold text-[var(--color-ink)] hover:bg-[var(--color-foam-2)] hover:text-[var(--color-current)] transition-colors"
                            >
                              {p.navLabel}
                            </NavLink>
                            {p.subProducts && (
                              <div className="pl-3.5 ml-3 border-l border-black/5 space-y-0.5 max-h-0 overflow-hidden opacity-0 group-hover/item:max-h-56 group-hover/item:opacity-100 group-hover/item:py-1 transition-all duration-300 ease-in-out">
                                {p.subProducts.map((sub) => (
                                  <NavLink
                                    key={sub.slug}
                                    to={`/products/${p.slug}/${sub.slug}`}
                                    className="block text-[11px] text-[var(--color-ink)]/60 hover:text-[var(--color-current)] transition-colors py-0.5"
                                  >
                                    {sub.title}
                                  </NavLink>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Advanced Purification Column */}
                  <div>
                    <h3 className="font-display text-[15px] font-extrabold uppercase tracking-wider text-[var(--color-current)] mb-3 border-b border-black/5 pb-1">
                      Advanced Purification
                    </h3>
                    <div className="space-y-1">
                      {products
                        .filter(p => p.category === "Water Treatment" && (!p.subProducts || p.subProducts.length === 0))
                        .map((p) => (
                          <NavLink
                            key={p.slug}
                            to={`/products/${p.slug}`}
                            className="block rounded-lg px-3 py-1.5 text-sm text-[var(--color-ink)] hover:bg-[var(--color-foam-2)] hover:text-[var(--color-current)] transition-colors"
                          >
                            {p.navLabel}
                          </NavLink>
                        ))}
                    </div>
                  </div>

                  {/* River Water Cleaning / Footer Link */}
                  <div className="col-span-3 border-t border-black/5 pt-4 flex items-center justify-between">
                    {products.filter(p => p.category === "River Water Cleaning and Rejuvenation").map((p) => (
                      <NavLink
                        key={p.slug}
                        to={`/products/${p.slug}`}
                        className="flex items-center gap-1 text-sm font-bold text-[var(--color-deepwater)] hover:text-[var(--color-current)] transition-colors"
                      >
                        River Water Cleaning & Rejuvenation
                      </NavLink>
                    ))}
                    <NavLink
                      to="/products"
                      className="text-xs font-semibold text-[var(--color-current)] hover:underline"
                    >
                      All Products &rarr;
                    </NavLink>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDesktopServicesOpen(true)}
            onMouseLeave={() => setDesktopServicesOpen(false)}
          >
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `${linkBase} flex items-center gap-1 ${
                  scrolled ? "text-[var(--color-ink)]" : "text-white"
                } ${isActive ? "text-[var(--color-current)]" : ""}`
              }
            >
              Services
              <ChevronDown
                size={14}
                className={desktopServicesOpen ? "rotate-180 transition-transform" : "transition-transform"}
              />
            </NavLink>

            {desktopServicesOpen && (
              <div className="absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3">
                <div className="overflow-hidden rounded-xl border border-black/5 bg-white shadow-xl">
                  <NavLink
                    to="/services"
                    className="block border-b border-black/5 bg-[var(--color-foam-2)] px-4 py-3 text-sm font-semibold text-[var(--color-current)]"
                  >
                    All Services
                  </NavLink>
                  {services.map((s) => (
                    <NavLink
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="block px-4 py-2.5 text-sm text-[var(--color-ink)] hover:bg-[var(--color-foam-2)] hover:text-[var(--color-current)]"
                    >
                      {s.navLabel}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${linkBase} ${scrolled ? "text-[var(--color-ink)]" : "text-white"} ${
                isActive ? "text-[var(--color-current)]" : ""
              }`
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/clients"
            className={({ isActive }) =>
              `${linkBase} ${scrolled ? "text-[var(--color-ink)]" : "text-white"} ${
                isActive ? "text-[var(--color-current)]" : ""
              }`
            }
          >
            Clients
          </NavLink>

          <NavLink
            to="/faqs"
            className={({ isActive }) =>
              `${linkBase} ${scrolled ? "text-[var(--color-ink)]" : "text-white"} ${
                isActive ? "text-[var(--color-current)]" : ""
              }`
            }
          >
            FAQs
          </NavLink>

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
        className={`md:hidden overflow-y-auto transition-[max-height] duration-300 ease-in-out ${
          mobileOpen ? "max-h-[85vh]" : "max-h-0"
        } bg-[var(--color-foam)] border-t border-black/5`}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          <NavLink to="/" end className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--color-ink)] hover:bg-[var(--color-foam-2)]">
            Home
          </NavLink>
          <NavLink to="/what-we-do" className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--color-ink)] hover:bg-[var(--color-foam-2)]">
            What We Do
          </NavLink>

          {/* Mobile Products Accordion */}
          <button
            className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-[var(--color-ink)] hover:bg-[var(--color-foam-2)]"
            onClick={() => setMobileProductsOpen((v) => !v)}
            aria-expanded={mobileProductsOpen}
          >
            Products
            <ChevronDown size={16} className={mobileProductsOpen ? "rotate-180 transition-transform" : "transition-transform"} />
          </button>
          <div
            className={`overflow-hidden pl-3 transition-[max-height] duration-300 ${
              mobileProductsOpen ? "max-h-[1000px]" : "max-h-0"
            }`}
          >
            <NavLink to="/products" className="block rounded-lg px-3 py-1.5 text-sm font-semibold text-[var(--color-current)] mb-2">
              All Products
            </NavLink>

            {/* Waste Water Sub-group */}
            <div className="mb-3">
              <div className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--color-current)]/75">
                Waste Water Treatment
              </div>
              <div className="pl-2 space-y-1">
                {products.filter(p => p.category === "Waste Water Treatment").map((p) => (
                  <NavLink
                    key={p.slug}
                    to={`/products/${p.slug}`}
                    className="block rounded-lg px-3 py-1 text-sm text-[var(--color-ink)]/80 hover:bg-[var(--color-foam-2)]"
                  >
                    {p.navLabel}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Water Treatment Sub-group */}
            <div className="mb-3">
              <div className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--color-current)]/75">
                Water Treatment
              </div>
              <div className="pl-2 space-y-2">
                {products.filter(p => p.category === "Water Treatment").map((p) => (
                  <div key={p.slug} className="space-y-1">
                    <NavLink
                      to={`/products/${p.slug}`}
                      className="block rounded-lg px-3 py-1 text-sm font-semibold text-[var(--color-ink)]/90 hover:bg-[var(--color-foam-2)]"
                    >
                      {p.navLabel}
                    </NavLink>
                    {p.subProducts && (
                      <div className="pl-3.5 ml-3 border-l border-black/5 space-y-0.5">
                        {p.subProducts.map((sub) => (
                          <NavLink
                            key={sub.slug}
                            to={`/products/${p.slug}/${sub.slug}`}
                            className="block rounded-lg px-3 py-0.5 text-xs text-[var(--color-ink)]/65 hover:bg-[var(--color-foam-2)]"
                          >
                            {sub.title}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* River Water Rejuvenation Sub-group */}
            <div className="mb-2">
              <div className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--color-current)]/75">
                River Water Cleaning
              </div>
              <div className="pl-2 space-y-1">
                {products.filter(p => p.category === "River Water Cleaning and Rejuvenation").map((p) => (
                  <NavLink
                    key={p.slug}
                    to={`/products/${p.slug}`}
                    className="block rounded-lg px-3 py-1 text-sm text-[var(--color-ink)]/80 hover:bg-[var(--color-foam-2)]"
                  >
                    {p.navLabel}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Services Accordion */}
          <button
            className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-[var(--color-ink)] hover:bg-[var(--color-foam-2)]"
            onClick={() => setMobileServicesOpen((v) => !v)}
            aria-expanded={mobileServicesOpen}
          >
            Services
            <ChevronDown size={16} className={mobileServicesOpen ? "rotate-180 transition-transform" : "transition-transform"} />
          </button>
          <div
            className={`overflow-hidden pl-3 transition-[max-height] duration-300 ${
              mobileServicesOpen ? "max-h-[300px]" : "max-h-0"
            }`}
          >
            <NavLink to="/services" className="block rounded-lg px-3 py-1.5 text-sm font-semibold text-[var(--color-current)]">
              All Services
            </NavLink>
            {services.map((s) => (
              <NavLink
                key={s.slug}
                to={`/services/${s.slug}`}
                className="block rounded-lg px-3 py-1.5 text-sm text-[var(--color-ink)]/80 hover:bg-[var(--color-foam-2)]"
              >
                {s.navLabel}
              </NavLink>
            ))}
          </div>

          <NavLink to="/projects" className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--color-ink)] hover:bg-[var(--color-foam-2)]">
            Projects
          </NavLink>
          <NavLink to="/clients" className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--color-ink)] hover:bg-[var(--color-foam-2)]">
            Clients
          </NavLink>
          <NavLink to="/faqs" className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--color-ink)] hover:bg-[var(--color-foam-2)]">
            FAQs
          </NavLink>
          <NavLink to="/careers" className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--color-ink)] hover:bg-[var(--color-foam-2)]">
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
