import { ChevronLeft, ChevronRight } from 'lucide-react'
import { formatMonthLabel } from '../../lib/format'

interface MonthSelectorProps {
  month: number
  year: number
  canPrev: boolean
  canNext: boolean
  onPrev: () => void
  onNext: () => void
}

export default function MonthSelector({
  month,
  year,
  canPrev,
  canNext,
  onPrev,
  onNext,
}: MonthSelectorProps) {
  return (
    <div className="flex items-center justify-between">
      <button
        type="button"
        onClick={onPrev}
        disabled={!canPrev}
        aria-label="Mois précédent"
        className="w-9 h-9 flex items-center justify-center rounded-full text-(--t-2) hover:bg-(--bg-3) disabled:opacity-30 disabled:pointer-events-none transition-colors"
        style={{ transitionDuration: 'var(--duration-fast)' }}
      >
        <ChevronLeft size={20} />
      </button>

      <span
        className="font-semibold text-(--t-1)"
        style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-heading-m)' }}
      >
        {formatMonthLabel(month, year)}
      </span>

      <button
        type="button"
        onClick={onNext}
        disabled={!canNext}
        aria-label="Mois suivant"
        className="w-9 h-9 flex items-center justify-center rounded-full text-(--t-2) hover:bg-(--bg-3) disabled:opacity-30 disabled:pointer-events-none transition-colors"
        style={{ transitionDuration: 'var(--duration-fast)' }}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  )
}
