# Kash — Frontend

Application web responsive de gestion financière personnelle (méthode 50/30/20).

## Stack

React 19 · TypeScript · Vite · Tailwind CSS v4 · shadcn/ui · React Query · Zustand · react-hook-form + zod

## Package manager

**bun** (pas npm — voir `CLAUDE.md` à la racine).

```bash
bun install      # dépendances
bun run dev      # serveur de dev
bun run build    # build de production (tsc -b && vite build)
bun run lint     # eslint
bun run preview  # prévisualiser le build
```

## Notes

- Tailwind v4 : aucune config JS. Tokens et thème dans `src/index.css` (`@import "tailwindcss"` + `@theme`).
- Design system : voir `design-system.md` à la racine du repo avant tout travail UI.
