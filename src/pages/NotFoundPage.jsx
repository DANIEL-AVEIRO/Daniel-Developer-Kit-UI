import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle.js'

const NotFoundPage = ({ nested = false }) => {
  usePageTitle('Page not found')

  return (
    <div className={nested ? '' : 'mx-auto max-w-lg py-10'}>
      <div className="rounded-2xl border border-stone-200/90 bg-paper px-6 py-8 shadow-sm dark:border-stone-800 dark:bg-paper-dark">
        <p className="font-mono text-sm text-accent dark:text-accent-soft">404</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ink dark:text-stone-50">This page is not in the registry.</h1>
        <p className="mt-3 text-sm leading-6 text-stone-600 dark:text-stone-400">
          The address does not match a component, block, template, or guide. Check the spelling or go back to the catalog.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/"
            className="inline-flex h-10 items-center rounded-xl bg-accent px-4 text-sm font-medium text-white hover:bg-indigo-800"
          >
            Back home
          </Link>
          <Link
            to="/components"
            className="inline-flex h-10 items-center rounded-xl border border-stone-300 bg-canvas px-4 text-sm font-medium text-ink dark:border-stone-700 dark:bg-canvas-dark dark:text-stone-100"
          >
            Browse components
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
