import { useEffect, type ReactNode } from 'react'
import { X } from 'lucide-react'

// Modal légère maison pour le squelette.
// TODO: migrer vers shadcn Dialog quand on câblera le CRUD réel (règle CLAUDE.md).

interface ModalProps {
  open: boolean
  onClose: () => void
  title?: string
  children: ReactNode
}

export default function Modal({ open, onClose, title, children }: ModalProps) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} aria-hidden />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="relative w-full sm:max-w-md bg-(--bg-2) border border-(--border-medium) rounded-t-3xl sm:rounded-2xl max-h-[85dvh] overflow-y-auto"
        style={{ boxShadow: 'var(--shadow-lg)' }}
      >
        <div className="sticky top-0 flex items-center justify-between gap-3 px-5 py-4 bg-(--bg-2) border-b border-(--border-subtle)">
          <h2
            className="font-semibold text-(--t-1)"
            style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-heading-m)' }}
          >
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer"
            className="p-1.5 rounded-full text-(--t-3) hover:text-(--t-1) hover:bg-(--bg-3) transition-colors"
            style={{ transitionDuration: 'var(--duration-fast)' }}
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  )
}
