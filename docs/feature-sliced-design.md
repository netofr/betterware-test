# Architectural Guide: Feature-Sliced Design (FSD)

This document serves as the official guide for our project's frontend architecture, **Feature-Sliced Design (FSD)**. Its purpose is to ensure every developer understands the principles, structure, and rules that govern our codebase. Adhering to this guide will help us build a scalable, maintainable, and resilient application for United Talent Agency.

---

## 1. What is Feature-Sliced Design?

FSD is an architectural methodology for frontend applications. It organizes code based on **business features** and **domain meaning**, not just technical file types (like a single global `/components` folder).

The core goal is to create a predictable and resilient codebase that is easy to navigate, refactor, and scale, especially as the team and the application grow.

### Why We Chose It: Key Benefits

- **Reduced Technical Debt**: Strict dependency rules prevent "spaghetti code" and make refactoring safe.
- **Scalability**: Different developers or teams can work on separate features in parallel with minimal conflicts.
- **Maintainability**: Code is co-located by business purpose, making it intuitive to find what you need.
- **Faster Onboarding**: New developers can understand the project structure quickly by learning the FSD map, not a custom, undocumented one.

---

## 2. The Three Pillars of FSD

FSD is built on a three-level hierarchy. Think of it as a set of shelves (`Layers`), with drawers for each topic (`Slices`), and dividers inside each drawer (`Segments`).

### A. Layers (The Shelves)

Layers are the highest level of organization. They divide the application vertically by scope and responsibility.

**The Golden Rule: The Unidirectional Dependency Rule**
A module in a given layer can **only import from layers strictly below it**. Think of it as a one-way street for dependencies, flowing from the bottom up.

`app` ↑ `widgets` ↑ `features` ↑ `entities` ↑ `shared`

Here is the layer hierarchy, from highest abstraction (top) to most foundational (bottom):

| Layer          | Purpose & Responsibility                                         | Example Slices/Segments                                    | Can Import From                             |
| :------------- | :--------------------------------------------------------------- | :--------------------------------------------------------- | :------------------------------------------ |
| **`app`**      | App entry point, routing, page composition, global providers.    | `app/talent/[id]/page.tsx`                                 | `widgets`, `features`, `entities`, `shared` |
| **`widgets`**  | Large, self-contained UI blocks. Combines features & entities.   | `widgets/dashboard`, `widgets/talent-profile-header`       | `features`, `entities`, `shared`            |
| **`features`** | User interactions that provide business value (the "verbs").     | `features/assign-script`, `features/update-client-profile` | `entities`, `shared`                        |
| **`entities`** | Core business objects and concepts (the "nouns").                | `entities/talent`, `entities/script`, `entities/project`   | `shared`                                    |
| **`shared`**   | Business-agnostic, reusable code (UI kit, API clients, helpers). | `shared/ui`, `shared/api`, `shared/lib`                    | **None**                                    |

### B. Slices (The Drawers)

Slices partition code **horizontally by business domain**. A slice is a folder within a layer that groups all code related to a single concept. This enforces **high cohesion**.

- **Examples**: `entities/talent`, `features/assign-script`, `widgets/talent-profile-header`.
- **Rule**: Slices on the same layer **cannot import from each other**. If `features/submit-talent` needs to interact with `features/filter-projects`, they must be composed together in a higher layer (like a `widget` or an `app` route).

### C. Segments (The Dividers)

Segments are folders _inside_ a slice that group code by its **technical purpose**. This keeps slices organized and enforces a separation of concerns.

- `ui`: UI components and presentation logic (e.g., React components, styles).
- `model`: Business logic, state management (e.g., stores, hooks with logic), and types.
- `api`: Functions for interacting with external APIs (e.g., GraphQL documents).
- `lib`: Helper functions and utilities specific to the slice.
- `config`: Constants or configuration data relevant to the slice.

---

## 3. Practical Heuristics & Decision-Making

These "rules of thumb" should guide your daily development decisions.

#### 1. How do I classify my code?

- **Entity vs. Feature**: An **entity** is a "noun" (e.g., a `Talent` profile component). A **feature** is a "verb" (e.g., the `submit-talent-for-project` action). A feature almost always uses an entity.
- **Feature vs. Widget**: A **feature** is a small, single-purpose interaction (an `assign-script` button). A **widget** is a larger, compositional block (a full `ScriptRow` that shows script details, talent info, and includes approve/reject features).

#### 2. The Public API Rule

Every slice and segment must have an `index.ts` file that acts as its **Public API**.

- **DO**: Export only what you intend for other modules to use.
- **DO NOT**: Import from deep within another slice (e.g., `import { Button } from '@/features/auth/ui/Button'`).
- **DO**: Always import from the barrel file (e.g., `import { AssignScriptButton } from '@/features/assign-script'`).

This rule enforces **encapsulation** and makes refactoring safe. You can change the internals of a slice, and as long as the Public API contract remains the same, nothing outside it will break.

#### 3. Data Flow & State Management with Apollo Client

- **API Logic**: All GraphQL documents (defined with the `gql` tag) live in the `api` segment of a slice.
- **State Management**: Hooks that wrap Apollo Client's `useQuery` and `useMutation` live in the `model` segment. They import the GraphQL documents from the `api` segment to perform operations.
- **UI Components**: Components in the `ui` segment should be as "dumb" as possible. They receive data and callbacks as props from a "smart" container component that uses the hooks from the `model`.

---

## 4. Folder Structure Example

Here’s what this looks like in our Next.js 15 project using **Apollo Client**.

```tree
src/
├── app/                  # Next.js App Router / FSD app layer
│   ├── layout.tsx        # Global layout & providers
│   └── talent/
│       └── [id]/
│           └── page.tsx  # Page composition for a talent's profile
├── widgets/
│   └── dashboard/
│       └── ...
├── features/
│   └── assign-script/
│       ├── ui/
│       │   └── AssignScriptButton.tsx
│       ├── model/
│       │   └── useAssignScript.ts # Wraps Apollo's useMutation
│       ├── api/
│       │   └── assignScript.mutation.ts # Defines the GraphQL mutation (gql)
│       └── index.ts
├── entities/
│   └── talent/
│       ├── ui/
│       │   └── TalentAvatar.tsx
│       ├── model/
│       │   └── useTalent.ts # Wraps Apollo's useQuery
│       ├── api/
│       │   └── getTalent.query.ts # Defines the GraphQL query (gql)
│       └── index.ts
└── shared/
    ├── ui/               # Generic UI kit (Button, Input, etc.)
    ├── api/
    │   └── client.ts     # Apollo Client setup
    └── lib/              # Generic helpers (e.g., formatDate)
```

> **Note on Next.js Integration**: This project uses the **Next.js App Router**. The framework's `src/app/` directory serves a dual role: it handles **routing** and is also the implementation of our **FSD `app` layer**, responsible for global providers, the root layout, and page composition.

---

## 5\. File Naming Conventions

Consistent naming is critical for code clarity and maintainability. Follow these conventions strictly:

### Folder Naming (Slices)

Use **`kebab-case`** for all folder names representing business domains (slices):

```typescript
✅ Correct:
entities/talent
features/assign-script
widgets/talent-profile-header

❌ Incorrect:
entities/Talent              // ❌ PascalCase
features/assignScript   // ❌ camelCase
widgets/talent_profile_header // ❌ snake_case
```

### File Naming by Type

**React Components**: Use **`PascalCase.tsx`**

```typescript
✅ Correct:
TalentAvatar.tsx
ScriptDashboard.tsx
ApproveScriptButton.tsx

❌ Incorrect:
talent-avatar.tsx           // ❌ kebab-case
talentAvatar.tsx            // ❌ camelCase
Talent_Avatar.tsx           // ❌ snake_case
```

**Custom Hooks**: Use **`useCamelCase.ts`** or **`useCamelCase.tsx`**

```typescript
✅ Correct:
useTalent.ts
useApproveScript.ts
useUserProfile.ts

❌ Incorrect:
usetalent.ts               // ❌ no "use" prefix
UseTalent.ts               // ❌ PascalCase
use-talent.ts              // ❌ kebab-case
```

**Other Logic/Utilities**: Use **`kebab-case.ts`**

```typescript
✅ Correct:
format-date.ts              // utility function
get-talent.query.ts         // API logic
assign-script.mutation.ts // API mutation
parse-jwt.ts                // utility

❌ Incorrect:
format_date.ts             // ❌ snake_case
FormatDate.ts              // ❌ PascalCase
formatDate.ts              // ❌ camelCase
formatdate.ts              // ❌ no separators
```

**Public API Files**: Always use **`index.ts`**

Every slice **MUST** have an `index.ts` barrel file:

```typescript
✅ Correct:
entities/talent/index.ts
features/assign-script/index.ts
widgets/script-dashboard/index.ts

❌ Incorrect:
entities/talent/export.ts        // ❌ wrong name
features/assign-script/api.ts // ❌ wrong name
```

### Summary Table

| Type                 | Convention               | Example                     |
| -------------------- | ------------------------ | --------------------------- |
| **Folders (Slices)** | `kebab-case`             | `assign-script`             |
| **React Components** | `PascalCase.tsx`         | `TalentAvatar.tsx`          |
| **Custom Hooks**     | `useCamelCase.ts`        | `useTalent.ts`              |
| **Utilities/Logic**  | `kebab-case.ts`          | `format-date.ts`            |
| **API Queries**      | `kebab-case.query.ts`    | `get-talent.query.ts`       |
| **API Mutations**    | `kebab-case.mutation.ts` | `assign-script.mutation.ts` |
| **Public API**       | `index.ts`               | `index.ts`                  |

---

## 6\. Automated Enforcement

To maintain architectural integrity, we automate these rules using ESLint. The configuration in our `eslintrc.js` file will automatically check for:

1.  **Layer Boundary Violations**: Prevents importing from higher or sibling layers.
2.  **Public API Violations**: Prevents deep imports into slices.

These checks will run in CI, preventing architectural regressions from being merged.
