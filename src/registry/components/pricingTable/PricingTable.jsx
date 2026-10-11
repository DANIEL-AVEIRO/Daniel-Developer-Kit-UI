import { Check } from 'lucide-react'
import { useState } from 'react'

const plans = [
  {
    name: 'Studio',
    monthly: 0,
    yearly: 0,
    detail: 'For a single class project.',
    features: ['Component previews', 'Copy source', 'One project'],
  },
  {
    name: 'Lab',
    monthly: 12,
    yearly: 120,
    detail: 'For a small team sharing files.',
    features: ['Everything in Studio', 'Shared notes', 'Priority examples'],
    featured: true,
  },
  {
    name: 'Campus',
    monthly: 29,
    yearly: 290,
    detail: 'For several courses.',
    features: ['Everything in Lab', 'Instructor seats', 'Sample dashboards'],
  },
]

const PricingTable = () => {
  const [yearly, setYearly] = useState(false)

  return (
    <div>
      <div className="mb-4 inline-flex rounded-md border border-stone-300 p-1 text-sm dark:border-stone-700" role="group" aria-label="Billing period">
        <button type="button" aria-pressed={!yearly} onClick={() => setYearly(false)} className={`rounded px-3 py-1 ${yearly ? '' : 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-950'}`}>
          Monthly
        </button>
        <button type="button" aria-pressed={yearly} onClick={() => setYearly(true)} className={`rounded px-3 py-1 ${yearly ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-950' : ''}`}>
          Yearly
        </button>
      </div>
      <div className="grid gap-3 lg:grid-cols-3">
        {plans.map((plan) => {
          const price = yearly ? plan.yearly : plan.monthly
          return (
            <article key={plan.name} className={`rounded-lg border p-4 ${plan.featured ? 'border-teal-800 dark:border-teal-500' : 'border-stone-200 dark:border-stone-800'}`}>
              <h3 className="text-base font-semibold">{plan.name}</h3>
              <p className="mt-1 text-sm text-stone-500">{plan.detail}</p>
              <p className="mt-4 text-3xl font-semibold tracking-tight">
                ${price}
                <span className="text-sm font-normal text-stone-500">/{yearly ? 'year' : 'month'}</span>
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="size-4 text-teal-800 dark:text-teal-400" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a href={`#${plan.name.toLowerCase()}`} className="mt-4 inline-flex h-9 w-full items-center justify-center rounded-md bg-stone-950 text-sm font-medium text-white dark:bg-stone-100 dark:text-stone-950">
                Choose {plan.name}
              </a>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default PricingTable
