import type { ReactNode } from 'react'

type BadgeVariant = 'paid' | 'planned' | 'warning' | 'over'

const variants: Record<BadgeVariant, string> = {
  paid: 'bg-(--accent-soft) text-(--accent)',
  planned: 'bg-(--bg-3) text-(--t-2)',
  warning: 'text-(--warning)',
  over: 'text-(--error)',
}

const warningBg: Record<string, string> = {
  warning: 'rgba(217, 119, 6, 0.10)',
  over: 'rgba(220, 38, 38, 0.10)',
}

interface BadgeProps {
  variant: BadgeVariant
  children: ReactNode
}

export default function Badge({ variant, children }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${variants[variant]}`}
      style={warningBg[variant] ? { background: warningBg[variant] } : undefined}
    >
      {children}
    </span>
  )
}
