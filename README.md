# DevKit UI

DevKit UI is a frontend component registry for students building with **React**, **Vite**, and **Tailwind CSS**. Browse components, blocks, and templates, preview them live, inspect the source, and copy the files into your own project.

This release is frontend-only. There is no authentication, backend, or remote registry.

## Stack

- React 19 + Vite
- JavaScript / JSX
- Tailwind CSS v4 (`@tailwindcss/vite`)
- React Router
- Lucide React
- prism-react-renderer

## Setup

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build |
| `npm run lint` | Run oxlint |

## Project structure

```text
src/
  app/                 App shell and router
  components/          Showcase layout and catalog UI
  pages/               Site pages
  registry/            Copyable components, blocks, pages, templates
  hooks/               Theme, clipboard, page title
  utils/               Search, copy helpers
  data/                Categories and navigation
```

Each registry entry points at a real React preview and loads its source with Vite `?raw` imports so the displayed code matches the implementation.

## Using a copied component

1. Create a React + Vite app and add Tailwind CSS v4.
2. Open a component, block, or template in DevKit UI.
3. Copy the file (or each file when there are several).
4. Save them with the filenames shown in the source panel.
5. Install any packages listed on that entry (often `lucide-react`).

See **Getting started** in the app for the full walkthrough.

## Notes

- Previews render trusted local React components inside an iframe. Source is never executed with `eval`.
- Dashboard templates use local sample data files. They do not call an API.
- Multi-file “Copy all files” includes filename headers so you can split the bundle into separate files.
