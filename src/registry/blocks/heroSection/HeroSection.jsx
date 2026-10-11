import { ArrowRight } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="overflow-hidden rounded-xl border border-stone-200 bg-white px-6 py-14 sm:px-10 dark:border-stone-800 dark:bg-stone-900">
      <p className="text-sm font-medium text-teal-800 dark:text-teal-300">React · Vite · Tailwind</p>
      <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl dark:text-stone-50">
        Build the page from pieces you can actually copy.
      </h1>
      <p className="mt-4 max-w-xl text-base leading-7 text-stone-600 dark:text-stone-400">
        A hero for student product pages. The CTAs are ordinary links, so replace the href values when you paste this into your app.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#components" className="inline-flex h-11 items-center gap-2 rounded-md bg-stone-950 px-4 text-sm font-medium text-white dark:bg-stone-100 dark:text-stone-950">
          Browse components
          <ArrowRight className="size-4" aria-hidden="true" />
        </a>
        <a href="#docs" className="inline-flex h-11 items-center rounded-md border border-stone-300 px-4 text-sm font-medium dark:border-stone-700">
          Read the guide
        </a>
      </div>
    </section>
  )
}

export default HeroSection
