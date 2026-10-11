import { PanelLeftClose, PanelLeftOpen } from 'lucide-react'
import { cx } from '../../utils/cx.js'
import SidebarNav from './SidebarNav.jsx'

const AppSidebar = ({ collapsed, onToggle }) => {
  return (
    <aside
      className={cx(
        'sticky top-14 hidden h-[calc(100vh-3.5rem)] shrink-0 overflow-y-auto border-r border-stone-200/80 bg-paper transition-[width] duration-200 ease-out lg:block dark:border-stone-800 dark:bg-paper-dark',
        collapsed ? 'w-14' : 'w-60',
      )}
    >
      <div className={cx('flex min-h-full flex-col', collapsed ? 'px-1.5 py-3' : 'px-2 py-4')}>
        <SidebarNav collapsed={collapsed} />
        <button
          type="button"
          onClick={onToggle}
          className="mt-4 inline-flex h-8 items-center justify-center gap-2 rounded-xl text-xs font-medium text-stone-500 hover:bg-indigo-50 hover:text-accent dark:hover:bg-indigo-500/10 dark:hover:text-indigo-200"
          aria-pressed={collapsed}
        >
          {collapsed ? <PanelLeftOpen className="size-4" aria-hidden="true" /> : <PanelLeftClose className="size-4" aria-hidden="true" />}
          <span className={collapsed ? 'sr-only' : ''}>{collapsed ? 'Expand sidebar' : 'Collapse sidebar'}</span>
        </button>
      </div>
    </aside>
  )
}

export default AppSidebar
