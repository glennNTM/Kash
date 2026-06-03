import type { Month } from './types'

// Données factices pour le squelette du dashboard.
// TODO: remplacer par les données de l'API (backend Express + Prisma).

const may2026: Month = {
  id: 'm-2026-05',
  month: 5,
  year: 2026,
  totalIncome: 2000,
  incomes: [
    { id: 'i-05-1', monthId: 'm-2026-05', label: 'Salaire', amount: 2000, isFavorite: true },
  ],
  sections: [
    { id: 's-05-charges', monthId: 'm-2026-05', name: 'Charges', type: 'charges', percentage: 0.5 },
    { id: 's-05-epargne', monthId: 'm-2026-05', name: 'Épargne', type: 'epargne', percentage: 0.3 },
    { id: 's-05-loisirs', monthId: 'm-2026-05', name: 'Loisirs', type: 'loisirs', percentage: 0.2 },
  ],
  expenses: [
    { id: 'e-05-1', sectionId: 's-05-charges', label: 'Loyer', category: 'Logement', amountPlanned: 700, amountReal: 700, status: 'paid', paidAt: '2026-05-03', isRecurring: true },
    { id: 'e-05-2', sectionId: 's-05-charges', label: 'Courses', category: 'Alimentation', amountPlanned: 200, amountReal: 185, status: 'paid', paidAt: '2026-05-12', isRecurring: false },
    { id: 'e-05-3', sectionId: 's-05-epargne', label: 'Livret A', category: 'Épargne', amountPlanned: 300, amountReal: 300, status: 'paid', paidAt: '2026-05-05', isRecurring: true },
    { id: 'e-05-4', sectionId: 's-05-loisirs', label: 'Restaurant', category: 'Sorties', amountPlanned: 100, amountReal: 90, status: 'paid', paidAt: '2026-05-18', isRecurring: false },
  ],
}

const june2026: Month = {
  id: 'm-2026-06',
  month: 6,
  year: 2026,
  totalIncome: 2000,
  incomes: [
    { id: 'i-06-1', monthId: 'm-2026-06', label: 'Salaire', amount: 2000, isFavorite: true },
  ],
  sections: [
    { id: 's-06-charges', monthId: 'm-2026-06', name: 'Charges', type: 'charges', percentage: 0.5 },
    { id: 's-06-epargne', monthId: 'm-2026-06', name: 'Épargne', type: 'epargne', percentage: 0.3 },
    { id: 's-06-loisirs', monthId: 'm-2026-06', name: 'Loisirs', type: 'loisirs', percentage: 0.2 },
  ],
  expenses: [
    // Charges (alloué 1000) — dépensé 910 → ratio 0.91 (warning)
    { id: 'e-06-1', sectionId: 's-06-charges', label: 'Loyer', category: 'Logement', amountPlanned: 700, amountReal: 700, status: 'paid', paidAt: '2026-06-03', isRecurring: true },
    { id: 'e-06-2', sectionId: 's-06-charges', label: 'Courses', category: 'Alimentation', amountPlanned: 200, amountReal: 180, status: 'paid', paidAt: '2026-06-14', isRecurring: false },
    { id: 'e-06-3', sectionId: 's-06-charges', label: 'Internet', category: 'Abonnements', amountPlanned: 30, amountReal: 30, status: 'paid', paidAt: '2026-06-06', isRecurring: true },
    // Épargne (alloué 600) — dépensé 400 → ratio 0.67
    { id: 'e-06-4', sectionId: 's-06-epargne', label: 'Livret A', category: 'Épargne', amountPlanned: 300, amountReal: 300, status: 'paid', paidAt: '2026-06-05', isRecurring: true },
    { id: 'e-06-5', sectionId: 's-06-epargne', label: 'Fonds voyage', category: 'Objectif', amountPlanned: 100, amountReal: 100, status: 'paid', paidAt: '2026-06-05', isRecurring: false },
    // Loisirs (alloué 400) — dépensé 145 → ratio 0.36
    { id: 'e-06-6', sectionId: 's-06-loisirs', label: 'Restaurant', category: 'Sorties', amountPlanned: 120, amountReal: 120, status: 'paid', paidAt: '2026-06-20', isRecurring: false },
    { id: 'e-06-7', sectionId: 's-06-loisirs', label: 'Cinéma', category: 'Sorties', amountPlanned: 25, amountReal: 25, status: 'paid', paidAt: '2026-06-22', isRecurring: false },
    { id: 'e-06-8', sectionId: 's-06-loisirs', label: 'Abonnement streaming', category: 'Abonnements', amountPlanned: 60, amountReal: 0, status: 'planned', paidAt: null, isRecurring: true },
  ],
}

/** Mois disponibles, du plus ancien au plus récent. */
export const MONTHS_DATA: Month[] = [may2026, june2026]
