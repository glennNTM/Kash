import { Plus } from 'lucide-react'
import type { Month, Section } from '../../lib/types'
import { sectionAllocated, sectionSpent, sectionRemaining, sectionExpenses } from '../../lib/budget'
import { formatAmount } from '../../lib/format'
import Modal from '../ui/Modal'
import ProgressBar from '../ui/ProgressBar'
import ExpenseList from './ExpenseList'

interface SectionDetailModalProps {
  month: Month
  section: Section | null
  onClose: () => void
}

/** Détail d'une section + emplacement d'ajout de dépense (squelette). */
export default function SectionDetailModal({ month, section, onClose }: SectionDetailModalProps) {
  if (!section) return null

  const allocated = sectionAllocated(month, section)
  const spent = sectionSpent(month, section)
  const remaining = sectionRemaining(month, section)
  const ratio = allocated > 0 ? spent / allocated : 0
  const expenses = sectionExpenses(month, section)

  return (
    <Modal open onClose={onClose} title={section.name}>
      <div className="flex flex-col gap-5">
        {/* Récap */}
        <div>
          <div className="flex items-baseline justify-between mb-2">
            <span className="font-mono font-bold text-(--t-1)" style={{ fontSize: 'var(--text-heading-l)' }}>
              {formatAmount(spent)}
            </span>
            <span className="text-sm text-(--t-3)">/ {formatAmount(allocated)}</span>
          </div>
          <ProgressBar ratio={ratio} />
          <p className="text-xs text-(--t-2) mt-2">
            Restant : <span className="font-mono font-semibold text-(--t-1)">{formatAmount(remaining)}</span>
          </p>
        </div>

        {/* Dépenses */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-(--t-3) mb-1">
            Dépenses
          </p>
          <ExpenseList expenses={expenses} emptyLabel="Aucune dépense dans cette section." />
        </div>

        {/* Ajout — placeholder (CRUD réel à venir via shadcn Dialog + RHF) */}
        <button
          type="button"
          disabled
          className="w-full flex items-center justify-center gap-2 bg-(--accent-soft) text-(--accent) font-semibold py-3 rounded-full disabled:opacity-70 disabled:cursor-not-allowed"
          style={{ fontSize: 'var(--text-body)' }}
        >
          <Plus size={18} strokeWidth={2.5} />
          Ajouter une dépense
        </button>
      </div>
    </Modal>
  )
}
