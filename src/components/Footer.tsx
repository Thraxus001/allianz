import { NavLink } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";
import { offices, products } from "../data/content";
import qrCodeImg from "../assets/qrcode.jpg";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-deepwater)] text-[var(--color-foam)]">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1.4fr]">
          <div>
            <Logo dark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--color-foam)]/70">
              East African engineers designing, building and maintaining water treatment,
              wastewater treatment and HVAC systems — from consultancy through commissioning.
            </p>
            <p className="eyebrow mt-6 text-[var(--color-leaf)]">Clean water. Better future.</p>
            <div className="mt-6 flex items-center gap-3 rounded-xl bg-white/5 p-3 w-fit border border-white/10">
              <img
                src={qrCodeImg}
                alt="Allianz Utilities QR Code"
                className="h-12 w-12 rounded bg-white p-0.5 object-contain"
              />
              <div>
                <p className="text-[10px] font-semibold tracking-wider uppercase text-white/80">Scan Portal</p>
                <p className="text-[9px] text-white/50 mt-0.5">Access mobile site</p>
              </div>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-4 text-[var(--color-foam)]/50">Navigate</p>
            <ul className="space-y-2.5 text-sm">
              <li><NavLink to="/" className="text-[var(--color-foam)]/80 hover:text-[var(--color-leaf)]">Home</NavLink></li>
              <li><NavLink to="/what-we-do" className="text-[var(--color-foam)]/80 hover:text-[var(--color-leaf)]">What We Do</NavLink></li>
              <li><NavLink to="/products-and-services" className="text-[var(--color-foam)]/80 hover:text-[var(--color-leaf)]">Products &amp; Services</NavLink></li>
              <li><NavLink to="/careers" className="text-[var(--color-foam)]/80 hover:text-[var(--color-leaf)]">Careers</NavLink></li>
              <li><NavLink to="/contact" className="text-[var(--color-foam)]/80 hover:text-[var(--color-leaf)]">Contact Us</NavLink></li>
            </ul>
            <p className="eyebrow mb-3 mt-6 text-[var(--color-foam)]/50">Solutions</p>
            <ul className="space-y-2.5 text-sm">
              {products.slice(0, 4).map((p) => (
                <li key={p.slug}>
                  <NavLink
                    to={`/products-and-services/${p.slug}`}
                    className="text-[var(--color-foam)]/80 hover:text-[var(--color-leaf)]"
                  >
                    {p.navLabel}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4 text-[var(--color-foam)]/50">Our offices</p>
            <ul className="space-y-5 text-sm">
              {offices.map((o) => (
                <li key={o.country}>
                  <p className="font-semibold text-[var(--color-foam)]">{o.country}</p>
                  <p className="mt-1 flex gap-2 text-[var(--color-foam)]/70">
                    <MapPin size={15} className="mt-0.5 shrink-0 text-[var(--color-leaf)]" />
                    {o.address}
                  </p>
                  <p className="mt-1 flex items-center gap-2 text-[var(--color-foam)]/70">
                    <Phone size={15} className="shrink-0 text-[var(--color-leaf)]" />
                    {o.phone}
                  </p>
                  <a
                    href={`mailto:${o.email}`}
                    className="mt-1 flex items-center gap-2 text-[var(--color-foam)]/70 hover:text-[var(--color-leaf)]"
                  >
                    <Mail size={15} className="shrink-0 text-[var(--color-leaf)]" />
                    {o.email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-[var(--color-foam)]/50 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Allianz Utilities (EA) Ltd. All rights reserved.</p>
          <p className="font-mono">Engineered water. Every drop accounted for.</p>
        </div>
      </div>
    </footer>
  );
}
