type Props = {
  className?: string;
  from?: string;
  to?: string;
  flip?: boolean;
};

/**
 * Signature motif: a topographic waterline that recurs between sections,
 * echoing contour lines on a hydrology map / plant elevation drawing.
 */
export default function ContourDivider({
  className = "",
  from = "var(--color-foam)",
  to = "var(--color-current)",
  flip = false,
}: Props) {
  return (
    <div
      className={`relative w-full overflow-hidden leading-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        className={`w-full h-16 md:h-20 ${flip ? "-scale-y-100" : ""}`}
        preserveAspectRatio="none"
      >
        <path
          d="M0 40 C 180 10, 320 70, 500 40 S 860 10, 1040 40 S 1320 70, 1440 40 V80 H0 Z"
          fill={to}
        />
        <path
          d="M0 40 C 180 10, 320 70, 500 40 S 860 10, 1040 40 S 1320 70, 1440 40"
          fill="none"
          stroke={from}
          strokeWidth="2"
          strokeOpacity="0.5"
          className="contour-line"
        />
      </svg>
    </div>
  );
}
