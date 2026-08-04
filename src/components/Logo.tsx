import logoImg from "../assets/logo.jpg";

export default function Logo({ dark = false }: { dark?: boolean }) {
  const text = dark ? "text-[var(--color-foam)]" : "text-[var(--color-deepwater)]";
  return (
    <span className="flex items-center gap-3 font-display font-bold tracking-tight">
      <img
        src={logoImg}
        alt="Allianz Utilities"
        className="h-8 w-16 rounded-lg border border-black/5 bg-white p-0.5 object-contain"
      />
    </span>
  );
}
