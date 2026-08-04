export default function LoadingScreen() {
  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-[var(--color-deepwater)]"
      role="status"
      aria-live="polite"
      aria-label="Loading Allianz Utilities"
    >
      <div className="relative h-16 w-24">
        <span
          className="bubble-a absolute left-0 top-1/2 h-11 w-11 -translate-y-1/2 rounded-full bg-[var(--color-sky)] mix-blend-screen opacity-90"
        />
        <span
          className="bubble-b absolute right-0 top-1/2 h-11 w-11 -translate-y-1/2 rounded-full bg-[var(--color-leaf)] mix-blend-screen opacity-90"
        />
      </div>
      <p className="eyebrow text-[var(--color-foam)]/70">Allianz Utilities</p>
    </div>
  );
}
