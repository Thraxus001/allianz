type Props = {
  eyebrow: string;
  heading: string;
  body?: string;
  light?: boolean;
  align?: "left" | "center";
};

export default function SectionHeading({ eyebrow, heading, body, light, align = "left" }: Props) {
  const textAlign = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col ${textAlign}`}>
      <span className={`eyebrow ${light ? "text-[var(--color-leaf)]" : "text-[var(--color-current)]"}`}>
        {eyebrow}
      </span>
      <h2
        className={`mt-3 font-display text-4xl font-bold leading-[0.95] tracking-tight md:text-5xl ${
          light ? "text-white" : "text-[var(--color-deepwater)]"
        }`}
      >
        {heading}
      </h2>
      {body && (
        <p className={`mt-4 max-w-xl text-base leading-relaxed ${light ? "text-white/75" : "text-black"}`}>
          {body}
        </p>
      )}
    </div>
  );
}
