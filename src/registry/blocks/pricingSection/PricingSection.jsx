import { Check } from 'lucide-react'
import { useState } from 'react'

const plans = [
  { name: 'Studio', price: 0, blurb: 'Solo class work', features: ['All components', 'Local previews'] },
  { name: 'Lab', price: 12, blurb: 'Small team', features: ['Shared notes', 'Priority examples'], featured: true },
  { name: 'Campus', price: 29, blurb: 'Multiple courses', features: ['Instructor seats', 'Dashboard shells'] },
]

const PricingSection = () => {
  const [yearly, setYearly] = useState(false)

  return (
    <section className="rounded-xl border border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-900">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Pricing</h2>
          <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">Sample numbers for a marketing page. Nothing is billed.</p>
        </div>
        <button type="button" onClick={() => setYearly((value) => !value)} className="rounded-md border border-stone-300 px-3 py-1.5 text-sm dark:border-stone-700">
          {yearly ? 'Showing yearly' : 'Showing monthly'}
        </button>
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {plans.map((plan) => {
          const price = yearly ? plan.price * 10 : plan.price
          return (
            <article key={plan.name} className={`rounded-lg border p-4 ${plan.featured ? 'border-teal-800 dark:border-teal-500' : 'border-stone-200 dark:border-stone-800'}`}>
              <h3 className="font-semibold">{plan.name}</h3>
              <p className="text-sm text-stone-500">{plan.blurb}</p>
              <p className="mt-4 text-3xl font-semibold">
                ${price}
                <span className="text-sm font-normal text-stone-500">/{yearly ? 'yr' : 'mo'}</span>
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="size-4 text-teal-800 dark:text-teal-400" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default PricingSection
