import PageHeader from '../components/common/PageHeader.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'
import { useSidebar } from '../hooks/useSidebar.js'
import { useTheme } from '../hooks/useTheme.js'

const SettingsPage = () => {
  usePageTitle('Settings')
  const { theme, toggleTheme } = useTheme()
  const { collapsed, toggleCollapsed } = useSidebar()

  return (
    <article className="max-w-xl">
      <PageHeader
        eyebrow="Platform"
        title="Settings"
        description="Preferences stay in this browser. There is no account and nothing is uploaded."
      />

      <ul className="mt-6 divide-y divide-stone-200 overflow-hidden rounded-xl border border-stone-200/90 bg-paper shadow-sm dark:divide-stone-800 dark:border-stone-800 dark:bg-paper-dark">
        <li className="flex items-center justify-between gap-4 px-4 py-4">
          <div>
            <p className="text-sm font-medium text-ink dark:text-stone-50">Theme</p>
            <p className="text-sm text-stone-500">Currently {theme}.</p>
          </div>
          <button type="button" onClick={toggleTheme} className={buttonClass}>
            Use {theme === 'dark' ? 'light' : 'dark'}
          </button>
        </li>
        <li className="flex items-center justify-between gap-4 px-4 py-4">
          <div>
            <p className="text-sm font-medium text-ink dark:text-stone-50">Sidebar</p>
            <p className="text-sm text-stone-500">Desktop navigation width.</p>
          </div>
          <button type="button" onClick={toggleCollapsed} className={buttonClass} aria-pressed={collapsed}>
            {collapsed ? 'Expand' : 'Collapse'}
          </button>
        </li>
      </ul>
    </article>
  )
}

const buttonClass =
  'inline-flex h-9 items-center rounded-xl border border-stone-300 bg-canvas px-3 text-sm font-medium text-ink hover:border-indigo-300 hover:bg-indigo-50 dark:border-stone-700 dark:bg-canvas-dark dark:text-stone-100 dark:hover:bg-indigo-500/10'

export default SettingsPage
