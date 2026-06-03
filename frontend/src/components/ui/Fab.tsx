import { Plus } from 'lucide-react'

interface FabProps {
  onClick: () => void
  label?: string
}

/** Bouton flottant d'action (ajout). Au-dessus de la bottom nav sur mobile. */
export default function Fab({ onClick, label = 'Ajouter une dépense' }: FabProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="fixed right-5 bottom-20 lg:bottom-8 z-40 w-14 h-14 rounded-full bg-(--accent) text-white flex items-center justify-center hover:bg-(--accent-hover) active:scale-97 transition-colors"
      style={{ boxShadow: 'var(--shadow-md)', transitionDuration: 'var(--duration-fast)' }}
    >
      <Plus size={26} strokeWidth={2.5} />
    </button>
  )
}
