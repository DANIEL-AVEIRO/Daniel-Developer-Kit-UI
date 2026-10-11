import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ComponentCard from '../components/catalog/ComponentCard.jsx'
import SearchInput from '../components/common/SearchInput.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'
import { categories } from '../data/categories.js'
import { getEntriesByKind, getFeatured, pathForKind } from '../registry/registryIndex.js'

const HomePage = () => {
  usePageTitle('')
  const counts = [
    { label: 'Components', value: getEntriesByKind('component').length, to: '/components' },
    { label: 'Blocks', value: getEntriesByKind('block').length, to: '/blocks' },
    { label: 'Templates', value: getEntriesByKind('template').length, to: '/templates' },
  ]

  return (
    <div className="space-y-12">
      <section className="rounded-2xl border border-stone-200/90 bg-paper px-5 py-8 shadow-sm sm:px-8 dark:border-stone-800 dark:bg-paper-dark">
        <p className="text-xs font-semibold tracking-[0.14em] text-accent uppercase dark:text-accent-soft">
          React component registry
        </p>
        <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl dark:text-stone-50">
          Preview the component, then copy the source.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-stone-600 dark:text-stone-400">
          DevKit UI is a frontend catalog for students building with React, Vite, and Tailwind CSS.
          Every example is a working component with the same source you can paste into your own project.
        </p>
        <div className="mt-7 max-w-xl">
          <SearchInput id="hero-search" label="Search DevKit UI" />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link to="/components" className={primaryLink}>
            Browse components
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
          <Link to="/templates" className={secondaryLink}>
            Browse templates
          </Link>
          <Link to="/blocks" className={textLink}>
            Browse blocks
          </Link>
          <Link to="/favorites" className={textLink}>
            Favorites
          </Link>
          <Link to="/builder" className={textLink}>
            Page builder
          </Link>
        </div>
      </section>

      <section aria-label="Library counts">
        <dl className="grid gap-3 sm:grid-cols-3">
          {counts.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="group rounded-xl border border-stone-200/90 bg-paper px-4 py-4 shadow-sm transition-colors hover:border-indigo-300 dark:border-stone-800 dark:bg-paper-dark dark:hover:border-indigo-400/40"
            >
              <dt className="text-sm text-stone-500 dark:text-stone-400">{item.label}</dt>
              <dd className="mt-1 flex items-baseline justify-between gap-2">
                <span className="text-3xl font-semibold tracking-tight text-accent dark:text-accent-soft">
                  {item.value}
                </span>
                <ArrowRight
                  className="size-4 text-indigo-300 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100 dark:text-indigo-400"
                  aria-hidden="true"
                />
              </dd>
            </Link>
          ))}
        </dl>
      </section>

      <section>
        <SectionHeading
          title="Categories"
          description="Jump into a group, then open any item for a live preview and its source."
        />
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/${pathForKind(category.kind)}?category=${category.id}`}
              className="rounded-xl border border-stone-200/90 bg-paper p-4 shadow-sm transition-colors hover:border-indigo-300 dark:border-stone-800 dark:bg-paper-dark dark:hover:border-indigo-400/40"
            >
              <h3 className="text-sm font-semibold text-ink dark:text-stone-50">{category.name}</h3>
              <p className="mt-1.5 text-sm leading-6 text-stone-600 dark:text-stone-400">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <FeaturedSection title="Featured components" to="/components" entries={getFeatured('components')} />
      <FeaturedSection title="Featured blocks" to="/blocks" entries={getFeatured('blocks')} />
      <FeaturedSection title="Featured templates" to="/templates" entries={getFeatured('templates')} />

      <section className="rounded-2xl border border-stone-200/90 bg-paper p-5 shadow-sm sm:p-6 dark:border-stone-800 dark:bg-paper-dark">
        <SectionHeading
          title="Getting started"
          description="Create a Vite app, add Tailwind CSS, and copy a component file. No account or backend is required."
        />
        <ol className="mt-5 grid list-none gap-3 sm:grid-cols-3">
          {['Scaffold React with Vite', 'Install Tailwind CSS v4', 'Copy a component file'].map(
            (step, index) => (
              <li
                key={step}
                className="rounded-xl border border-indigo-100 bg-canvas px-3.5 py-3.5 text-sm dark:border-indigo-400/20 dark:bg-canvas-dark"
              >
                <span className="font-mono text-xs font-medium text-accent dark:text-accent-soft">
                  0{index + 1}
                </span>
                <p className="mt-1.5 font-medium text-ink dark:text-stone-100">{step}</p>
              </li>
            ),
          )}
        </ol>
        <Link to="/getting-started" className={`${primaryLink} mt-6`}>
          Read the setup guide
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </section>
    </div>
  )
}

const FeaturedSection = ({ title, to, entries }) => {
  return (
    <section>
      <div className="flex items-end justify-between gap-3">
        <h2 className="text-xl font-semibold tracking-tight text-ink dark:text-stone-50">{title}</h2>
        <Link
          to={to}
          className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-indigo-800 dark:text-accent-soft dark:hover:text-indigo-200"
        >
          View all
          <ArrowRight className="size-3.5" aria-hidden="true" />
        </Link>
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {entries.map((entry) => (
          <ComponentCard key={entry.id} entry={entry} />
        ))}
      </div>
    </section>
  )
}

const SectionHeading = ({ title, description }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold tracking-tight text-ink dark:text-stone-50">{title}</h2>
      <p className="mt-1.5 max-w-2xl text-sm leading-6 text-stone-600 dark:text-stone-400">{description}</p>
    </div>
  )
}

const primaryLink =
  'group inline-flex h-10 items-center gap-2 rounded-xl bg-accent px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-800'
const secondaryLink =
  'inline-flex h-10 items-center rounded-xl border border-stone-300 bg-canvas px-4 text-sm font-medium text-ink shadow-sm transition-colors hover:border-indigo-300 hover:bg-indigo-50 dark:border-stone-700 dark:bg-canvas-dark dark:text-stone-100 dark:hover:border-indigo-400/40 dark:hover:bg-indigo-500/10'
const textLink =
  'text-sm font-medium text-stone-700 underline-offset-4 transition-colors hover:text-accent hover:underline dark:text-stone-300 dark:hover:text-accent-soft'

export default HomePage
