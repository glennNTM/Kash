import type { Month } from '../../lib/types'
import { monthSpent, monthRemaining } from '../../lib/budget'
import { formatAmount } from '../../lib/format'

interface HeroCardProps {
  month: Month
}

/** Carte héro : restant en grand, revenus + dépensé en sous-stats. */
export default function HeroCard({ month }: HeroCardProps) {
  const spent = monthSpent(month)
  const remaining = monthRemaining(month)

  return (
    <div
      className="rounded-2xl p-6 text-white"
      style={{ background: 'var(--gradient-stat)' }}
    >
      <p className="text-white/75 text-xs font-semibold uppercase tracking-widest">
        Restant ce mois
      </p>
      <p
        className="font-mono font-bold mt-1"
        style={{ fontSize: 'var(--text-stat)', letterSpacing: '-0.04em', lineHeight: 1 }}
      >
        {formatAmount(remaining)}
      </p>

      <div className="flex gap-8 mt-5">
        <div>
          <p className="text-white/70 text-xs">Revenus</p>
          <p className="font-mono font-bold mt-0.5" style={{ fontSize: 'var(--text-heading-s)' }}>
            {formatAmount(month.totalIncome)}
          </p>
        </div>
        <div>
          <p className="text-white/70 text-xs">Dépensé</p>
          <p className="font-mono font-bold mt-0.5" style={{ fontSize: 'var(--text-heading-s)' }}>
            {formatAmount(spent)}
          </p>
        </div>
      </div>
    </div>
  )
}
