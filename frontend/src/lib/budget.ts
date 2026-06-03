import type { Month, Section, Expense } from './types'

/** Montant alloué à une section = revenu total × pourcentage. */
export function sectionAllocated(month: Month, section: Section): number {
  return month.totalIncome * section.percentage
}

/** Dépenses PAYÉES d'une section. */
export function sectionExpenses(month: Month, section: Section): Expense[] {
  return month.expenses.filter((e) => e.sectionId === section.id)
}

/** Σ des dépenses payées d'une section. */
export function sectionSpent(month: Month, section: Section): number {
  return sectionExpenses(month, section)
    .filter((e) => e.status === 'paid')
    .reduce((sum, e) => sum + e.amountReal, 0)
}

/** reste_section = alloué − Σ dépenses payées. */
export function sectionRemaining(month: Month, section: Section): number {
  return sectionAllocated(month, section) - sectionSpent(month, section)
}

/** Ratio dépensé/alloué (0..n). >0.8 = warning, >1.0 = dépassement. */
export function sectionRatio(month: Month, section: Section): number {
  const allocated = sectionAllocated(month, section)
  return allocated > 0 ? sectionSpent(month, section) / allocated : 0
}

/** Σ de toutes les dépenses payées du mois. */
export function monthSpent(month: Month): number {
  return month.expenses
    .filter((e) => e.status === 'paid')
    .reduce((sum, e) => sum + e.amountReal, 0)
}

/** Restant global = revenu total − dépensé. */
export function monthRemaining(month: Month): number {
  return month.totalIncome - monthSpent(month)
}

/** Dernières dépenses payées, triées par date décroissante. */
export function recentExpenses(month: Month, limit = 5): Expense[] {
  return [...month.expenses]
    .filter((e) => e.paidAt)
    .sort((a, b) => (b.paidAt! > a.paidAt! ? 1 : -1))
    .slice(0, limit)
}
