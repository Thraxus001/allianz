import logoImg from "../assets/logo.jpg";

export default function Logo({ dark: _dark = false }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-3 font-display font-bold tracking-tight">
      <img
        src={logoImg}
        alt="Allianz Utilities"
        className="h-10 w-20 md:h-14 md:w-28 rounded-lg border border-black/5 bg-white p-0.5 object-contain"
      />
    </span>
  );
}
