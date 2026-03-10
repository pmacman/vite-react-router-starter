# Vite + React Router Starter

## ℹ️ Overview

This repository is a **modern React + TypeScript starter project** built on Vite and React Router. It emphasizes **clear project structure**, **explicit routing**, and **predictable configuration**.

This project uses:

- A file-based project layout optimized for React Router
- Explicit route configuration (no magic or conventions)
- Separate TypeScript configurations for browser code and tooling
- Vite as the single source of truth for bundling and testing

## 🔁 Runtime Flow

At runtime, the application initializes in the following order:

```css
index.html
  ↓
main.tsx
  ↓
RouterProvider
  ↓
routes.tsx
  ↓
root.tsx (layout)
  ↓
<Outlet />
  ↓
Page component (Home / About / NotFound)
```

## 📁 Project Structure (example)

```css
my-react-app/
├─ index.html
├─ vite.config.ts
├─ tsconfig.json
├─ tsconfig.app.json
├─ tsconfig.node.json
├─ eslint.config.js
└─ src/
   ├─ main.tsx
   ├─ routes.tsx
   ├─ root.tsx
   ├─ pages/
   │  ├─ Home/
   │  ├─ About/
   │  └─ NotFound/
   ├─ components/
   ├─ hooks/
   ├─ utils/
   └─ types/
```

- **Pages** are colocated by route.
- **Shared components** live in `components/`.
- **Utilities and types** are explicitly separated to avoid circular dependencies.

## 🛠 TypeScript Configuration

This project uses **TypeScript project references** to separate concerns:

#### `tsconfig.json`

- Acts as the project entry point
- Defines references only
- Is not used for compilation

#### `tsconfig.app.json`

- Browser / React code
- DOM libraries enabled
- Bundler-style module resolution
- Used by Vite and the editor

#### `tsconfig.node.json`

- Tooling and configuration files
- Node runtime assumptions
- Keeps browser and tooling concerns isolated

This separation avoids mixing browser and Node assumptions in the same config.

## 🛠 Vite Configuration

`vite.config.ts` is the **single source of truth** for:

- Plugins
- Path aliases
- Build behavior
- Test configuration

Path aliases defined here must also exist in `tsconfig.app.json` to keep runtime resolution and type checking in sync.

## 🔄 Testing

This project uses **Vitest**, which integrates directly with Vite's module resolution and TypeScript configuration.

Why Vitest:

- Native support for ESM
- Reuses Vite's resolver and plugins
- No test-specific TypeScript configuration required
- Minimal setup and lower long-term maintenance cost

Global test setup lives in:

```
src/test/setupTests.ts
```

This file is intentionally small and used only for shared test behavior. (e.g. Testing Library matchers).

## 🛠 Linting and Formatting

Linting and formatting are configured to be:

- Type-aware
- Predictable
- Editor-friendly

Prettier is the sole source of formatting rules. ESLint focuses on correctness and consistency, not style.

## 💡 Design Philosophy

This project intentionally avoids:

- Implicit conventions
- Hidden configuration
- Tooling indirection

The goal is to make trade-offs **visible** so future maintainers can reason about changes without rediscovering context.

## 🛠 Editor Setup (optional)

This project relies on ESLint and Prettier for correctness and formatting.

To avoid editor-specific assumptions, no editor configuration is required. However, a VS Code settings example is provided for convenience.

If your editor supports ESLint and Prettier on save, configure it to:

- Apply ESLint fixes on save
- Format using Prettier
- Respect the project's Prettier config

For VS Code users, an example settings file is available at: [docs/vscode-settings.json](docs/vscode-settings.json)

## 📄 License

MIT
