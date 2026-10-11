import { CircleAlert, CircleCheck, Info, TriangleAlert, X } from 'lucide-react'

const tones = {
  info: {
    box: 'border-sky-200 bg-sky-50 text-sky-950 dark:border-sky-900 dark:bg-sky-950 dark:text-sky-100',
    icon: Info,
  },
  success: {
    box: 'border-emerald-200 bg-emerald-50 text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-100',
    icon: CircleCheck,
  },
  warning: {
    box: 'border-amber-200 bg-amber-50 text-amber-950 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-100',
    icon: TriangleAlert,
  },
  danger: {
    box: 'border-red-200 bg-red-50 text-red-950 dark:border-red-900 dark:bg-red-950 dark:text-red-100',
    icon: CircleAlert,
  },
}

const Alert = ({ tone = 'info', title, children, onDismiss }) => {
  const style = tones[tone] || tones.info
  const Icon = style.icon

  return (
    <div role={tone === 'danger' ? 'alert' : 'status'} className={`flex gap-3 rounded-lg border px-3 py-3 text-sm ${style.box}`}>
      <Icon className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
      <div className="min-w-0 flex-1">
        {title ? <p className="font-semibold">{title}</p> : null}
        {children ? <div className={title ? 'mt-1' : ''}>{children}</div> : null}
      </div>
      {onDismiss ? (
        <button type="button" onClick={onDismiss} aria-label="Dismiss alert" className="rounded-md p-1 hover:bg-black/5 dark:hover:bg-white/10">
          <X className="size-4" aria-hidden="true" />
        </button>
      ) : null}
    </div>
  )
}

export default Alert
