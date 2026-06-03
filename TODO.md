# TODO — Kash

> Suivi d'avancement projet. Coché = fait et vérifié. Doc interne, hors prod.
> Voir `CLAUDE.md` (contraintes) et `design-system.md` (UI) pour le détail.

_Dernière mise à jour : 2026-06-03_

---

## ✅ Fait

### Frontend — socle
- [x] Setup Vite + React 19 + TS + Tailwind v4 (tokens design system dans `index.css`)
- [x] **Fix `@layer base`** sur le reset CSS (sinon écrase margin/padding/centrage Tailwind)
- [x] Routing (`react-router-dom`) : routes publiques + routes app
- [x] `DashboardLayout` responsive (sidebar desktop 240px / bottom nav mobile)
- [x] Stubs de pages : `/dashboard`, `/statistiques`, `/profil`, `/onboarding`

### Frontend — Landing (`/`)
- [x] `Header` (logo, nav, CTA ebook, burger mobile)
- [x] `Hero` (titre, CTA, **placeholder mockup dashboard**)
- [x] `FeatureSection` (3 cartes 50/30/20)
- [x] `VideoSection` (**placeholder vidéo 16:9**)
- [x] `Footer`

### Frontend — Login (`/login`)
- [x] `LoginForm` (react-hook-form + zod, inputs Tailwind, sans shadcn)
- [x] Split-panel (panneau témoignage gauche / form droite)
- [x] Bouton **Continuer avec Google** (UI seulement)

### Frontend — Dashboard (`/dashboard`) — vue de base
- [x] Fix `DashboardLayout` (`max-w-screen-xl` invalide v4, token `--border-1` inexistant, safe-area)
- [x] Helpers `formatAmount()`, `budget.ts` (alloué/dépensé/reste/ratio), types, mock data
- [x] `HeroCard`, `SectionCard` (cliquable), `ProgressBar`, `Badge`, `ExpenseList`, `Fab`, `MonthSelector`
- [x] Pagination mensuelle + modal détail section (modal maison, squelette)

---

## 🚧 Dette / placeholders à reprendre
- [ ] Remplacer le **mockup dashboard** du Hero par une vraie capture (après `/dashboard`)
- [ ] Remplacer le **placeholder vidéo** de `VideoSection`
- [ ] Renseigner `CHARIOW_EBOOK_URL` (actuellement `'#'`) dans `lib/constants.ts`
- [ ] Lien "Créer un compte" pointe sur `/login` → page register dédiée ou toggle
- [ ] Bouton "Mot de passe oublié" sans action
- [ ] `onClick` Google + submit form = stubs → à câbler sur Better Auth
- [ ] Dashboard : FAB + bouton "Ajouter une dépense" = stubs (CRUD réel à venir)
- [ ] Modal maison (`ui/Modal.tsx`) → migrer vers **shadcn Dialog** + form RHF/zod pour le CRUD
- [ ] Dashboard branché sur `mock-data.ts` → remplacer par l'API

---

## ⬜ Reste à faire

### Frontend — Pages applicatives
- [ ] `/onboarding` — 3 étapes (revenus → répartition % → 1re dépense)
- [x] `/dashboard` — vue de base (voir section Fait) · reste : CRUD dépenses + ajout via modal shadcn
- [ ] `/statistiques` — graphes Chart.js (donut section, donut catégorie, barres alloué vs dépensé)
- [ ] `/reste` — restes non assignés par section + actions (Reporter / Vers épargne)
- [ ] `/section/:id` — détail section + CRUD dépenses (via modal Dialog)
- [ ] `/historique` — table des mois passés
- [ ] `/objectifs` — suivi des objectifs d'épargne
- [ ] `/profil` — paramètres utilisateur

### Frontend — Infra à brancher
- [ ] React Query (state serveur) + client API (`{ data } | { error }`)
- [ ] Zustand (state UI : modals, drawer)
- [ ] Init shadcn/ui (Dialog, Sheet, Select, Switch, Dropdown, Tooltip, Popover, Form)
- [ ] Chart.js + react-chartjs-2
- [ ] react-hot-toast (toasts alertes budget)
- [ ] Helper `formatAmount()`
- [ ] Composants custom Kash : HeroCard, BudgetSectionCard, SectionTile, ProgressBar, Badge, MonthSelector, StatCard, FAB

### Backend (squelette Express seulement)
- [ ] Structure Express + TS (routes kebab-case, réponses `{ data } | { error }`)
- [ ] Prisma : `schema.prisma` + modèles (months, incomes, sections, expenses, goals, goal_contributions)
- [ ] Connexion Supabase (Postgres hébergé uniquement) via `DATABASE_URL`
- [ ] Better Auth (sessions + OAuth Google) — adaptateur Prisma
- [ ] Arcjet (rate limit + bots) sur auth et mutations
- [ ] Endpoints CRUD : months / incomes / sections / expenses / goals

### Règles métier (à implémenter front + back)
- [ ] Somme des `percentage` d'un mois = 100 % (validé Zod + contrainte base)
- [ ] Aucune part de répartition < 10 %
- [ ] `reste_section = (revenu × %) − Σ dépenses payées`
- [ ] Duplication mois suivant : `is_recurring` (dépenses) + `is_favorite` (revenus)
- [ ] Alertes : toast warning > 0.8, dépassement > 1.0

### Transverse
- [ ] Dark mode (prévu, non prioritaire — light only au lancement)
- [ ] Tests (aucun runner configuré aujourd'hui : vitest + RTL à décider)
- [ ] Déploiement (Vercel + Railway + Supabase — voir `deploy.md`, à créer)
