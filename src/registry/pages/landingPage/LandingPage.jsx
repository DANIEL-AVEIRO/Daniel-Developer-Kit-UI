import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

const features = [
  ['Preview', 'Every example renders as a React component.'],
  ['Source', 'Copy the same files that power the preview.'],
  ['Templates', 'Start from pages and dashboards with sample data.'],
]

const LandingPage = () => {
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)

  return (
    <div className="min-h-[40rem] bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-50">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <p className="text-sm font-semibold">DevKit UI</p>
        <nav className="flex gap-4 text-sm text-stone-600 dark:text-stone-300">
          <a href="#features">Features</a>
          <a href="#waitlist">Waitlist</a>
        </nav>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-12">
        <section>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">A component registry students can trust.</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-stone-600 dark:text-stone-400">
            Preview working React UI, inspect the source, and paste it into a Vite + Tailwind project.
          </p>
          <a href="#waitlist" className="mt-6 inline-flex h-11 items-center gap-2 rounded-md bg-teal-800 px-4 text-sm font-medium text-white dark:bg-teal-600 dark:text-stone-950">
            Join the waitlist
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </section>
        <section id="features" className="mt-14 grid gap-4 md:grid-cols-3">
          {features.map(([title, body]) => (
            <article key={title} className="rounded-xl border border-stone-200 bg-white p-4 dark:border-stone-800 dark:bg-stone-900">
              <h2 className="font-semibold">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-stone-400">{body}</p>
            </article>
          ))}
        </section>
        <section id="waitlist" className="mt-14 rounded-xl border border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-900">
          <h2 className="text-xl font-semibold">Get course updates</h2>
          {joined ? (
            <p className="mt-3 text-sm">Thanks. {email} was stored only in this preview.</p>
          ) : (
            <form
              className="mt-4 flex flex-col gap-3 sm:flex-row"
              onSubmit={(event) => {
                event.preventDefault()
                if (email.includes('@')) setJoined(true)
              }}
            >
              <label className="sr-only" htmlFor="landing-email">Email</label>
              <input id="landing-email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@school.edu" className="h-11 flex-1 rounded-md border border-stone-300 px-3 text-sm dark:border-stone-700 dark:bg-stone-950" />
              <button type="submit" className="h-11 rounded-md bg-stone-950 px-4 text-sm font-medium text-white dark:bg-stone-100 dark:text-stone-950">
                Join
              </button>
            </form>
          )}
        </section>
      </main>
    </div>
  )
}

export default LandingPage
