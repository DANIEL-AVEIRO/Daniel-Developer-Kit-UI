import {
  BookOpen,
  Boxes,
  ClipboardCheck,
  House,
  LayoutDashboard,
  LayoutTemplate,
  PanelsTopLeft,
  Settings,
  Star,
  SwatchBook,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { categories } from '../../data/categories.js'
import { pathForKind, registry } from '../../registry/registryIndex.js'
import { cx } from '../../utils/cx.js'

const platformLinks = [
  { label: 'Overview', to: '/', icon: House, end: true },
  { label: 'Getting started', to: '/getting-started', icon: BookOpen },
  { label: 'Design system', to: '/design-system', icon: SwatchBook },
  { label: 'Library', to: '/library', icon: ClipboardCheck },
  { label: 'Favorites', to: '/favorites', icon: Star },
  { label: 'Page builder', to: '/builder', icon: LayoutTemplate },
  { label: 'Settings', to: '/settings', icon: Settings },
]

const groups = [
  { id: 'component', label: 'Components', to: '/components', icon: Boxes },
  { id: 'block', label: 'UI blocks', to: '/blocks', icon: PanelsTopLeft },
  { id: 'complete-pages', label: 'Complete pages', to: '/templates?category=complete-pages', icon: LayoutTemplate, category: 'complete-pages' },
  { id: 'dashboards', label: 'Dashboard templates', to: '/templates?category=dashboards', icon: LayoutDashboard, category: 'dashboards' },
]

const SidebarNav = ({ collapsed = false, onNavigate }) => {
  return (
    <nav className="flex flex-col gap-6" aria-label="Library">
      <ul className="space-y-0.5">
        {platformLinks.map((item) => (
          <li key={item.to}>
            <NavItem item={item} collapsed={collapsed} onNavigate={onNavigate} />
          </li>
        ))}
      </ul>

      {groups.map((group) => {
        const items = group.category
          ? registry.filter((entry) => entry.category === group.category)
          : registry.filter((entry) => entry.kind === group.id)
        const Icon = group.icon

        return (
          <div key={group.id}>
            {collapsed ? (
              <NavLink
                to={group.to}
                title={group.label}
                onClick={onNavigate}
                className={({ isActive }) => navClass(isActive, true)}
              >
                <Icon className="size-4 shrink-0" aria-hidden="true" />
                <span className="sr-only">{group.label}</span>
              </NavLink>
            ) : (
              <>
                <div className="mb-1 flex items-center justify-between px-2">
                  <NavLink to={group.to} onClick={onNavigate} className="text-[11px] font-semibold tracking-[0.08em] text-stone-500 uppercase hover:text-accent dark:hover:text-indigo-200">
                    {group.label}
                  </NavLink>
                  <span className="tabular-nums text-[11px] text-stone-400">{items.length}</span>
                </div>
                <ul className="space-y-0.5">
                  {items.map((item) => (
                    <li key={item.id}>
                      <NavLink
                        to={`/${pathForKind(item.kind)}/${item.slug}`}
                        onClick={onNavigate}
                        className={({ isActive }) => navClass(isActive, false)}
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )
      })}
      <p className="sr-only">{categories.length} categories</p>
    </nav>
  )
}

const NavItem = ({ item, collapsed, onNavigate }) => {
  const Icon = item.icon
  return (
    <NavLink
      to={item.to}
      end={item.end}
      title={collapsed ? item.label : undefined}
      onClick={onNavigate}
      className={({ isActive }) => navClass(isActive, collapsed)}
    >
      <Icon className="size-4 shrink-0" aria-hidden="true" />
      {collapsed ? <span className="sr-only">{item.label}</span> : <span>{item.label}</span>}
    </NavLink>
  )
}

const navClass = (isActive, collapsed) => {
  return cx(
    'flex items-center gap-2 rounded-xl text-[13px] leading-snug transition-colors duration-150',
    collapsed ? 'justify-center px-2 py-2' : 'px-2 py-1.5',
    isActive
      ? 'bg-indigo-100/80 font-medium text-indigo-950 dark:bg-indigo-500/15 dark:text-indigo-100'
      : 'text-stone-600 hover:bg-indigo-50 hover:text-indigo-950 dark:text-stone-400 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-100',
  )
}

export default SidebarNav
