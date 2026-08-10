import { useState } from "react";
import { Droplet, Users, TrendingUp, MapPin, Briefcase, Send, X, AlertCircle } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";

const openRoles: { title: string; location: string; type: string }[] = [
  /*
  { title: "Process Engineer — Wastewater", location: "Nairobi, Kenya", type: "Full-time" },
  { title: "Site Supervisor — Membrane Systems", location: "Kigali, Rwanda", type: "Full-time" },
  { title: "O&M Technician", location: "Addis Ababa, Ethiopia", type: "Full-time" },
  { title: "Electrical & Controls Engineer", location: "Nairobi, Kenya", type: "Full-time" },
  */
];

const values = [
  { icon: Droplet, title: "Engineering with purpose", body: "Every plant we build changes what comes out of a tap or back into a river." },
  { icon: Users, title: "On-site, hands-on teams", body: "Our engineers spend real time on plants, not just behind a desk." },
  { icon: TrendingUp, title: "Room to grow", body: "From site technician to lead process engineer — we build careers alongside plants." },
];

export default function Careers() {
  const [role, setRole] = useState("");
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");

  const applyMailto = (roleTitle: string) => {
    const subject = encodeURIComponent(`Application: ${roleTitle}`);
    const body = encodeURIComponent(
      `Hello Allianz Utilities team,\n\nI would like to apply for the ${roleTitle} position.\n\nName:\nPhone:\nLinkedIn / Portfolio:\nWhy I'm a fit:\n\n`
    );
    window.location.href = `mailto:info@aul.co.ke?subject=${subject}&body=${body}`;
  };

  const handleApplyClick = (roleTitle: string) => {
    setSelectedRole(roleTitle);
    setShowApplyModal(true);
  };

  return (
    <div>
      <PageHero
        eyebrow="Careers"
        heading={"Build the Future of\nWater with Us"}
        body="At Allianz Utilities, we believe our greatest strength is our people. Every project we undertake is driven by passionate jobs, technicians, project managers, and support professionals who are committed to delivering innovative and sustainable water and wastewater solutions across East Africa. If you're looking for an opportunity to grow your career while making a meaningful impact on communities, industries, and the environment, we'd love to hear from you."
        image="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <SectionHeading eyebrow="Why Allianz Utilities" heading="Work that stays finished." />
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {values.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <Icon size={22} className="text-[var(--color-current)]" />
              <h3 className="mt-4 font-display text-xl font-bold text-[var(--color-deepwater)]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-black">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-foam-2)] py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <SectionHeading eyebrow="Openings" heading="Current Opportunities" />
          <div className="mt-10 divide-y divide-black/5 rounded-2xl border border-black/5 bg-white">
            {openRoles.length > 0 ? (
              openRoles.map((r) => (
                <div key={r.title} className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-display text-lg font-bold text-[var(--color-deepwater)]">{r.title}</h3>
                    <div className="mt-1 flex flex-wrap items-center gap-4 text-sm text-[var(--color-ink)]/60">
                      <span className="flex items-center gap-1.5"><MapPin size={14} /> {r.location}</span>
                      <span className="flex items-center gap-1.5"><Briefcase size={14} /> {r.type}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleApplyClick(r.title)}
                    className="inline-flex items-center gap-2 self-start rounded-full bg-[var(--color-current)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-current-2)] sm:self-auto cursor-pointer"
                  >
                    Apply <Send size={14} />
                  </button>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-sm font-medium text-[var(--color-ink)]/60">
                No current openings at the moment.
              </div>
            )}
          </div>

          <div className="mt-10 rounded-2xl border border-dashed border-black/15 bg-white p-6 text-center">
            <p className="text-sm text-black">
              Don't see the right role? Send a general application and tell us what you're looking for.
            </p>
            <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <input
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="Role or area of interest"
                className="w-full max-w-xs rounded-full border border-black/15 px-4 py-2.5 text-sm outline-none focus:border-[var(--color-current)] sm:w-auto"
              />
              <button
                onClick={() => applyMailto(role || "General Application")}
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[var(--color-deepwater)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-current)] cursor-pointer"
              >
                Send General Application <Send size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modern custom modal overlay for no opportunities warning */}
      {showApplyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setShowApplyModal(false)}
          />
          <div className="relative w-full max-w-md transform overflow-hidden rounded-3xl border border-black/5 bg-white p-8 shadow-2xl transition-all animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setShowApplyModal(false)}
              className="absolute right-5 top-5 rounded-full p-2 text-[var(--color-ink)]/40 hover:bg-black/5 hover:text-black transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-50 text-amber-500 mb-5 shadow-inner">
                <AlertCircle size={28} />
              </div>

              <h3 className="font-display text-2xl font-black uppercase tracking-tight text-[var(--color-deepwater)]">
                No Current Opportunities
              </h3>

              <p className="mt-3 text-sm font-semibold text-[var(--color-secondary)]">
                Position: {selectedRole}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-black">
                Thank you for your interest in joining Allianz Utilities! There are no current opportunities for now for this role.
              </p>

              <p className="mt-2 text-xs leading-relaxed text-[var(--color-ink)]/50">
                Please check back later or submit a general application below for future consideration.
              </p>

              <button
                onClick={() => setShowApplyModal(false)}
                className="mt-8 w-full rounded-full bg-[var(--color-current)] py-3 text-sm font-bold text-white transition-colors hover:bg-[var(--color-current-2)] cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
