import { useState } from 'react'
import type { Section } from '../lib/types'
import { MONTHS_DATA } from '../lib/mock-data'
import { recentExpenses } from '../lib/budget'
import MonthSelector from '../components/dashboard/MonthSelector'
import HeroCard from '../components/dashboard/HeroCard'
import SectionCard from '../components/dashboard/SectionCard'
import ExpenseList from '../components/dashboard/ExpenseList'
import SectionDetailModal from '../components/dashboard/SectionDetailModal'
import Fab from '../components/ui/Fab'

export default function Dashboard() {
  const [monthIndex, setMonthIndex] = useState(MONTHS_DATA.length - 1)
  const [selectedSection, setSelectedSection] = useState<Section | null>(null)

  const month = MONTHS_DATA[monthIndex]

  return (
    <div className="flex flex-col gap-6 max-w-3xl mx-auto">
      <MonthSelector
        month={month.month}
        year={month.year}
        canPrev={monthIndex > 0}
        canNext={monthIndex < MONTHS_DATA.length - 1}
        onPrev={() => setMonthIndex((i) => i - 1)}
        onNext={() => setMonthIndex((i) => i + 1)}
      />

      <HeroCard month={month} />

      {/* Sections */}
      <section className="flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-(--t-3)">
          Répartition du mois
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {month.sections.map((section) => (
            <SectionCard
              key={section.id}
              month={month}
              section={section}
              onClick={() => setSelectedSection(section)}
            />
          ))}
        </div>
      </section>

      {/* Dernières dépenses */}
      <section className="flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-(--t-3)">
          Dernières dépenses
        </p>
        <div className="bg-(--bg-2) rounded-xl border border-(--border-subtle) px-5" style={{ boxShadow: 'var(--shadow-sm)' }}>
          <ExpenseList expenses={recentExpenses(month, 5)} />
        </div>
      </section>

      <Fab onClick={() => { /* TODO: ouvrir la modal d'ajout de dépense */ }} />

      <SectionDetailModal
        month={month}
        section={selectedSection}
        onClose={() => setSelectedSection(null)}
      />
    </div>
  )
}
