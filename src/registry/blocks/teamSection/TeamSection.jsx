const people = [
  { name: 'Amina Shah', role: 'Frontend mentor', initials: 'AS' },
  { name: 'Leo Martins', role: 'Design lead', initials: 'LM' },
  { name: 'Noah Adeyemi', role: 'Course assistant', initials: 'NA' },
  { name: 'Priya Nair', role: 'Research mentor', initials: 'PN' },
]

const TeamSection = () => {
  return (
    <section className="rounded-xl border border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-900">
      <h2 className="text-2xl font-semibold tracking-tight">Studio mentors</h2>
      <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">Sample people for a course landing page.</p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {people.map((person) => (
          <li key={person.name} className="flex items-center gap-3 rounded-lg border border-stone-200 p-3 dark:border-stone-800">
            <span className="inline-flex size-11 items-center justify-center rounded-full bg-teal-800 text-sm font-semibold text-white dark:bg-teal-600 dark:text-stone-950" aria-hidden="true">
              {person.initials}
            </span>
            <div>
              <p className="text-sm font-medium">{person.name}</p>
              <p className="text-sm text-stone-500">{person.role}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TeamSection
