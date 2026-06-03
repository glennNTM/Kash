// Types calqués sur le modèle de données de CLAUDE.md.
// TODO: migrer vers un dossier partagé front/back quand le backend existera.

export type SectionType = 'charges' | 'epargne' | 'loisirs' | 'custom'

export type ExpenseStatus = 'planned' | 'paid'

export interface Expense {
  id: string
  sectionId: string
  label: string
  category: string
  amountPlanned: number
  amountReal: number
  status: ExpenseStatus
  paidAt: string | null
  isRecurring: boolean
}

export interface Section {
  id: string
  monthId: string
  name: string
  type: SectionType
  percentage: number // fraction 0..1 (la somme d'un mois = 1.0)
}

export interface Income {
  id: string
  monthId: string
  label: string
  amount: number
  isFavorite: boolean
}

export interface Month {
  id: string
  month: number // 1..12
  year: number
  totalIncome: number
  incomes: Income[]
  sections: Section[]
  expenses: Expense[]
}
