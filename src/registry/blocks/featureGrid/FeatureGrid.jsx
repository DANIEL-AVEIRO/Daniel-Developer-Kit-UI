import { Code, Copy, Layers } from 'lucide-react'

const features = [
  { icon: Layers, title: 'Composable pieces', body: 'Buttons, forms, and sections that stay readable after you paste them.' },
  { icon: Copy, title: 'Copyable source', body: 'The source tab shows the same files that render in the preview.' },
  { icon: Code, title: 'Local sample data', body: 'Dashboards and lists use hardcoded sample data, not a fake API.' },
]

const FeatureGrid = () => {
  return (
    <section className="rounded-xl border border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-900">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-semibold tracking-tight">What students get</h2>
        <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-stone-400">Three reasons to start from a registry instead of another screenshot library.</p>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <article key={feature.title} className="rounded-lg border border-stone-200 p-4 dark:border-stone-800">
              <Icon className="size-5 text-teal-800 dark:text-teal-400" aria-hidden="true" />
              <h3 className="mt-3 text-sm font-semibold">{feature.title}</h3>
              <p className="mt-1 text-sm leading-6 text-stone-600 dark:text-stone-400">{feature.body}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default FeatureGrid
