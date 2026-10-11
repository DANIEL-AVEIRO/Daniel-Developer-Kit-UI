import PageHeader from '../components/common/PageHeader.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'

const colors = [
  ['Canvas', 'bg-canvas', 'Page background'],
  ['Paper', 'bg-paper', 'Cards and panels'],
  ['Ink', 'bg-ink', 'Primary text'],
  ['Accent', 'bg-accent', 'Focus and active emphasis'],
]

const DesignSystemPage = () => {
  usePageTitle('Design system')

  return (
    <article className="max-w-3xl space-y-4">
      <PageHeader
        eyebrow="Platform"
        title="Design system"
        description="These tokens belong to the DevKit website. Copied components do not import this page. They use ordinary Tailwind utilities inside their own files."
      />

      <Section title="Color">
        <ul className="grid gap-3 sm:grid-cols-2">
          {colors.map(([name, swatch, note]) => (
            <li key={name} className="flex items-center gap-3 rounded-xl border border-stone-200/80 bg-canvas px-3 py-2 dark:border-stone-800 dark:bg-canvas-dark">
              <span className={`size-10 rounded-lg border border-stone-200 ${swatch} dark:border-stone-700`} />
              <span>
                <span className="block text-sm font-medium text-ink dark:text-stone-50">{name}</span>
                <span className="block text-xs text-stone-500">{note}</span>
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Type">
        <p className="font-sans text-2xl font-semibold tracking-tight text-ink dark:text-stone-50">Page title, Plus Jakarta Sans</p>
        <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-stone-400">Body copy stays at 14px with a 24px line height.</p>
        <p className="mt-2 font-mono text-[13px] text-ink dark:text-stone-200">IBM Plex Mono for source and shortcuts.</p>
      </Section>

      <Section title="Radius, border, motion">
        <p>Controls use a 12px radius. Paper surfaces use a 1px border and a light shadow. The page background stays on the warm canvas.</p>
        <p>Menus and drawers open in about 200ms. When the operating system asks for reduced motion, those animations are removed.</p>
      </Section>
    </article>
  )
}

const Section = ({ title, children }) => {
  return (
    <section className="rounded-xl border border-stone-200/90 bg-paper p-5 shadow-sm dark:border-stone-800 dark:bg-paper-dark">
      <h2 className="text-sm font-semibold text-ink dark:text-stone-50">{title}</h2>
      <div className="mt-3 space-y-2 text-sm leading-6 text-stone-600 dark:text-stone-400">{children}</div>
    </section>
  )
}

export default DesignSystemPage
