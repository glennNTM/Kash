import { Outlet, NavLink } from 'react-router-dom'
import { LayoutDashboard, BarChart3, User } from 'lucide-react'

const navItems = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Accueil' },
  { to: '/statistiques', icon: BarChart3, label: 'Statistiques' },
  { to: '/profil', icon: User, label: 'Profil' },
]

export default function DashboardLayout() {
  return (
    <div className="min-h-dvh bg-(--bg-1)">
      <aside className="hidden lg:flex fixed inset-y-0 left-0 w-60 flex-col bg-(--bg-2) border-r border-(--border-subtle)">
        <div className="px-6 py-5">
          <span className="font-display text-2xl text-(--accent) font-bold">Kash</span>
        </div>
        <nav className="flex-1 px-3 pb-6 flex flex-col gap-1">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/dashboard'}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-(--accent)/10 text-(--accent)'
                    : 'text-(--t-2) hover:bg-(--bg-3) hover:text-(--t-1)'
                }`
              }
            >
              <Icon size={18} strokeWidth={1.75} />
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="lg:pl-60">
        <main className="max-w-5xl mx-auto px-4 py-6 pb-24 lg:pb-8 overflow-x-hidden">
          <Outlet />
        </main>
      </div>

      <nav
        className="lg:hidden fixed bottom-0 inset-x-0 bg-(--bg-glass) backdrop-blur-xl border-t border-(--border-subtle) flex"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/dashboard'}
            className={({ isActive }) =>
              `flex-1 flex flex-col items-center gap-1 py-3 text-[11px] font-medium transition-colors ${
                isActive ? 'text-(--accent)' : 'text-(--t-3)'
              }`
            }
          >
            <Icon size={22} strokeWidth={1.75} />
            {label}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
