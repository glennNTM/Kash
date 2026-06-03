import type { Month, Section } from '../../lib/types'
import { sectionAllocated, sectionSpent, sectionRatio } from '../../lib/budget'
import { formatAmount } from '../../lib/format'
import ProgressBar from '../ui/ProgressBar'

interface SectionCardProps {
  month: Month
  section: Section
  onClick: () => void
}

/** Carte de section budget, cliquable → ouvre le détail. */
export default function SectionCard({ month, section, onClick }: SectionCardProps) {
  const allocated = sectionAllocated(month, section)
  const spent = sectionSpent(month, section)
  const ratio = sectionRatio(month, section)

  return (
    <button
      type="button"
      onClick={onClick}
      className="text-left bg-(--bg-2) rounded-xl border border-(--border-subtle) p-5 flex flex-col gap-3 hover:border-(--border-medium) active:scale-97 transition-all"
      style={{ boxShadow: 'var(--shadow-sm)', transitionDuration: 'var(--duration-fast)' }}
    >
      <div className="flex items-baseline justify-between">
        <h3
          className="font-semibold text-(--t-1)"
          style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-heading-s)' }}
        >
          {section.name}
        </h3>
        <span className="text-xs font-semibold text-(--t-3)">
          {Math.round(section.percentage * 100)} %
        </span>
      </div>

      <div className="flex items-baseline gap-1.5">
        <span className="font-mono font-bold text-(--t-1)" style={{ fontSize: 'var(--text-heading-m)' }}>
          {formatAmount(spent)}
        </span>
        <span className="text-xs text-(--t-3)">/ {formatAmount(allocated)}</span>
      </div>

      <ProgressBar ratio={ratio} />
    </button>
  )
}
