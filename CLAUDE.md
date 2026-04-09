# Claude Code Configuration - Dr. Sarah Rotman Site

## Behavioral Rules (Always Enforced)

- Do what has been asked; nothing more, nothing less
- NEVER create files unless they're absolutely necessary for achieving your goal
- ALWAYS prefer editing an existing file to creating a new one
- NEVER proactively create documentation files (*.md) or README files unless explicitly requested
- NEVER save working files, text/mds, or tests to the root folder
- ALWAYS read a file before editing it
- NEVER commit secrets, credentials, or .env files

## Code Generation Guidelines

**CRITICAL RULES - NEVER VIOLATE:**

1. **ABSOLUTELY NO COMMENTS IN CODE**
   - DO NOT add ANY comments (// or /* */) to the code under ANY circumstances
   - Write clean, self-documenting code with clear variable/function names instead
   - Only add comments if the user EXPLICITLY requests them with exact wording

2. **NAMING CONVENTIONS**
   - Constants: UPPER_SNAKE_CASE (e.g., `SECTION_IDS`, `APPOINTMENT_URL`)
   - Types/Interfaces: PascalCase (e.g., `NavItem`, `ReviewItem`)
   - Components: PascalCase files and exports (e.g., `HeroSection.tsx`)
   - Files: PascalCase for components, kebab-case for utilities (e.g., `hero-section.tsx` or `Hero.tsx` — match existing codebase convention)
   - Hooks: camelCase with `use` prefix (e.g., `useScrollPosition`)

3. **ALWAYS USE BRACES FOR IF STATEMENTS**
   - NEVER use single-line if statements without braces
   - ALL if/else/else if statements MUST use curly braces `{}`

   Bad:
   ```typescript
   if (condition) return;
   ```

   Good:
   ```typescript
   if (condition) {
     return;
   }
   ```

4. **USE CONSTANTS INSTEAD OF HARDCODED STRINGS**
   - NEVER hardcode repeated values (section IDs, URLs, phone numbers, etc.)
   - Define in `src/lib/` or co-located constants file
   - Use `as const` for constant objects

5. **ORGANIZE TYPES IN DEDICATED FILES**
   - Shared types go in `src/types/` or a co-located `*.types.ts` file
   - NEVER define shared types inline in component files
   - Local-only prop types may be defined in the component file

6. **COMPONENT STRUCTURE ORDER**
   Each component file should follow this order:
   - Imports
   - Types/interfaces (local only)
   - Constants (local only)
   - Component function
   - Default export

## React Best Practices

- **Prefer function components** — no class components
- **Custom hooks** for any stateful logic reused across 2+ components → `src/hooks/`
- **Keep components focused** — if JSX exceeds ~80 lines, split into sub-components
- **Avoid inline object/array literals** in JSX props — extract to constants to prevent unnecessary re-renders
- **Use the `cn()` utility** from `src/lib/utils.ts` for all conditional class merging (never string concatenation)
- **Memoize sparingly** — only use `useMemo`/`useCallback` when there is a measured performance issue, not preemptively
- **Event handlers** named `handleX` (e.g., `handleClick`, `handleSubmit`)

## TypeScript Best Practices

- **No `any`** — use `unknown` and narrow, or define proper types
- **No non-null assertions (`!`)** without a clear reason
- **Explicit return types** on all exported functions and hooks
- **Use `type` over `interface`** unless declaration merging is needed
- **Discriminated unions** over optional fields for variant shapes
- **`satisfies` operator** for config objects (see `tailwind.config.ts` pattern)

## Tailwind CSS Best Practices

- **Use `cn()`** from `src/lib/utils.ts` for all conditional or merged class strings
- **Brand tokens first** — always prefer `brand-primary`, `brand-dark`, `brand-accent` over raw color values
- **Responsive mobile-first** — base classes are mobile, `md:` and `lg:` override upward
- **RTL-aware spacing** — this site is RTL (`direction: rtl`); use `ms-*`/`me-*` (margin-start/end) instead of `ml-*`/`mr-*` for layout-direction-sensitive spacing
- **No arbitrary values** unless a design token genuinely cannot cover it
- **Extract repeated class groups** into a shared constant or Tailwind `@layer components` block in `src/index.css`
- **Animation** — prefer Framer Motion (`motion.*`) for entrance animations; use Tailwind `animate-*` only for simple looping effects

## Framer Motion Best Practices

- **Standard entrance pattern** used in this project:
  ```tsx
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  ```
- **Stagger children** with `staggerChildren` on a parent `motion.div` for list reveals
- **Viewport-triggered** animations on sections use `whileInView` + `viewport={{ once: true }}`
- **No layout animations** (`layout` prop) unless explicitly needed — they are expensive

## File Organization

- `/src/components/` — page section components (one per section, current convention: PascalCase)
- `/src/hooks/` — custom React hooks
- `/src/lib/` — utilities (`utils.ts` with `cn()`, constants, helpers)
- `/src/types/` — shared TypeScript types (create if shared types grow beyond single-component scope)
- `/public/` — static assets at root URL (images, Google verification file, etc.)

## Project Stack

- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS (RTL, Heebo font, brand tokens in `tailwind.config.ts`)
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **CSS direction**: RTL (`direction: rtl` in `body`)
- **Deployment**: AWS S3 + CloudFront

## Build & Deploy

```bash
# Development
npm run dev

# Build
npm run build

# Preview build
npm run preview

# Deploy to S3 + CloudFront
./deploy.sh
```

- ALWAYS verify `npm run build` succeeds before running `./deploy.sh`
- Static assets in `/public` are copied to `/dist` at build time

## Security Rules

- NEVER hardcode API keys, secrets, or credentials in source files
- NEVER commit `.env` files or any file containing secrets
- Sanitize any user-facing dynamic content

## Infrastructure Notes

- CloudFront distribution ID: `E38349PV0TO3UF`
- S3 bucket: `dr-sarah-rotman-site` (us-east-1)
- `ViewerProtocolPolicy`: `redirect-to-https` for all paths **except** `/googlefbef07c7a21a6115.html` which uses `allow-all` (required for Google Search Console verification)
- **Do NOT remove** `/public/googlefbef07c7a21a6115.html` — required to stay verified in Google Search Console
