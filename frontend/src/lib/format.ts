/** Formate un montant en euros (fr-FR). Décimales affichées uniquement si présentes. */
export function formatAmount(value: number): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value)
}

const MONTH_NAMES = [
  'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre',
]

/** "Juin 2026" à partir de month (1..12) et year. */
export function formatMonthLabel(month: number, year: number): string {
  return `${MONTH_NAMES[month - 1]} ${year}`
}
