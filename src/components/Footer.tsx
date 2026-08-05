import { NavLink } from "react-router-dom";
import { FaTwitter, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";
import qrCodeImg from "../assets/qrcode.jpg";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-deepwater)] text-[var(--color-foam)]">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr_0.8fr_1.2fr]">
          {/* Logo & Intro */}
          <div>
            <Logo dark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--color-foam)]/70">
              East African engineers designing, building and maintaining water treatment,
              wastewater treatment and HVAC systems — from consultancy through commissioning.
            </p>
            <p className="eyebrow mt-6 text-[var(--color-secondary)]">Clean water. Better future.</p>
            
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3 border border-white/10">
                <img
                  src={qrCodeImg}
                  alt="Allianz Utilities QR Code"
                  className="h-10 w-10 rounded bg-white p-0.5 object-contain"
                />
                <div>
                  <p className="text-[9px] font-semibold tracking-wider uppercase text-white/80">Scan Portal</p>
                  <p className="text-[8px] text-white/50 mt-0.5">Access mobile site</p>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex items-center gap-2 text-white/60">
                <a
                  href="https://www.linkedin.com/company/allianz-utilities-ltd/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-secondary)] transition-colors p-2 rounded-full bg-white/5 hover:bg-white/10"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={16} />
                </a>
                <a
                  href="https://web.facebook.com/allianzutilitieskenya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-secondary)] transition-colors p-2 rounded-full bg-white/5 hover:bg-white/10"
                  aria-label="Facebook"
                >
                  <FaFacebook size={16} />
                </a>
                <a
                  href="https://x.com/Allianz_aul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-secondary)] transition-colors p-2 rounded-full bg-white/5 hover:bg-white/10"
                  aria-label="X"
                >
                  <FaTwitter size={16} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-secondary)] transition-colors p-2 rounded-full bg-white/5 hover:bg-white/10"
                  aria-label="YouTube"
                >
                  <FaYoutube size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <p className="eyebrow mb-4 text-[var(--color-foam)]/50">Company</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <NavLink to="/what-we-do" className="text-[var(--color-foam)]/80 hover:text-[var(--color-secondary)]">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/products" className="text-[var(--color-foam)]/80 hover:text-[var(--color-secondary)]">
                  Our Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-[var(--color-foam)]/80 hover:text-[var(--color-secondary)]">
                  Our Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className="text-[var(--color-foam)]/80 hover:text-[var(--color-secondary)]">
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink to="/clients" className="text-[var(--color-foam)]/80 hover:text-[var(--color-secondary)]">
                  Our Clients
                </NavLink>
              </li>
              <li>
                <NavLink to="/careers" className="text-[var(--color-foam)]/80 hover:text-[var(--color-secondary)]">
                  Careers
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <p className="eyebrow mb-4 text-[var(--color-foam)]/50">Support</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <NavLink to="/faqs" className="text-[var(--color-foam)]/80 hover:text-[var(--color-secondary)]">
                  FAQs
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-[var(--color-foam)]/80 hover:text-[var(--color-secondary)]">
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-[var(--color-foam)]/80 hover:text-[var(--color-secondary)]">
                  Request a Quote
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-[var(--color-foam)]/80 hover:text-[var(--color-secondary)]">
                  Service Request
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <p className="eyebrow mb-4 text-[var(--color-foam)]/50">Connect</p>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-2.5 text-[var(--color-foam)]/70">
                <Phone size={16} className="mt-0.5 shrink-0 text-[var(--color-secondary)]" />
                <div>
                  <a href="tel:+254757515151" className="hover:text-[var(--color-secondary)]">
                    +254-757515151
                  </a>
                  ,{" "}
                  <a href="tel:+254734590903" className="hover:text-[var(--color-secondary)]">
                    +254-734590903
                  </a>
                </div>
              </li>
              <li className="flex gap-2.5 text-[var(--color-foam)]/70">
                <Mail size={16} className="mt-0.5 shrink-0 text-[var(--color-secondary)]" />
                <a href="mailto:info@aul.co.ke" className="hover:text-[var(--color-secondary)]">
                  info@aul.co.ke
                </a>
              </li>
              <li className="flex gap-2.5 text-[var(--color-foam)]/70">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[var(--color-secondary)]" />
                <span>Nairobi, Kenya</span>
              </li>
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
