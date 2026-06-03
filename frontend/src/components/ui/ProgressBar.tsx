interface ProgressBarProps {
  /** Ratio dépensé/alloué (0..n). */
  ratio: number
}

/** Barre de progression budget. Vert OK, orange >80 %, rouge >100 %. */
export default function ProgressBar({ ratio }: ProgressBarProps) {
  const pct = Math.min(Math.max(ratio, 0), 1) * 100
  const color =
    ratio > 1 ? 'var(--error)' : ratio > 0.8 ? 'var(--warning)' : 'var(--accent)'

  return (
    <div
      className="h-1.5 w-full rounded-full bg-(--bg-3) overflow-hidden"
      role="progressbar"
      aria-valuenow={Math.round(ratio * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full rounded-full"
        style={{
          width: `${pct}%`,
          background: color,
          transition: 'width var(--duration-slow) var(--ease-apple)',
        }}
      />
    </div>
  )
}
