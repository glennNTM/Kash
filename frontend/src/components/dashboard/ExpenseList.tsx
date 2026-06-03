import type { Expense } from '../../lib/types'
import { formatAmount } from '../../lib/format'
import Badge from '../ui/Badge'

interface ExpenseListProps {
  expenses: Expense[]
  emptyLabel?: string
}

/** Liste de dépenses (réutilisée par le dashboard et le détail de section). */
export default function ExpenseList({ expenses, emptyLabel = 'Aucune dépense.' }: ExpenseListProps) {
  if (expenses.length === 0) {
    return <p className="text-sm text-(--t-3) py-4 text-center">{emptyLabel}</p>
  }

  return (
    <ul className="flex flex-col">
      {expenses.map((expense) => {
        const paid = expense.status === 'paid'
        const amount = paid ? expense.amountReal : expense.amountPlanned
        return (
          <li
            key={expense.id}
            className="flex items-center justify-between gap-3 py-3 border-b border-(--border-subtle) last:border-b-0"
          >
            <div className="min-w-0">
              <p
                className={`text-sm font-medium truncate ${paid ? 'text-(--t-3) line-through' : 'text-(--t-1)'}`}
              >
                {expense.label}
              </p>
              <p className="text-xs text-(--t-3) mt-0.5">{expense.category}</p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Badge variant={paid ? 'paid' : 'planned'}>{paid ? 'Payé' : 'Planifié'}</Badge>
              <span
                className={`font-mono font-bold text-sm ${paid ? 'text-(--success)' : 'text-(--t-2)'}`}
              >
                {formatAmount(amount)}
              </span>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
