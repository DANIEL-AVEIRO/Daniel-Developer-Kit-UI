const CtaSection = () => {
  return (
    <section className="rounded-xl border border-stone-200 bg-stone-950 px-6 py-12 text-center text-white sm:px-10 dark:border-stone-700">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Start with one component.</h2>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-stone-300">
        Copy a button, a form, or a whole page. Then swap the sample copy for your assignment brief.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <a href="#components" className="inline-flex h-11 items-center rounded-md bg-white px-4 text-sm font-medium text-stone-950">
          Browse components
        </a>
        <a href="#getting-started" className="inline-flex h-11 items-center rounded-md border border-stone-600 px-4 text-sm font-medium text-white">
          Setup guide
        </a>
      </div>
    </section>
  )
}

export default CtaSection
