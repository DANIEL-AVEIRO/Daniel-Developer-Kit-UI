import { useState } from 'react'

const ProfileCard = ({ name = 'Amina Shah', role = 'Frontend student', location = 'Harbor campus', initials = 'AS' }) => {
  const [following, setFollowing] = useState(false)

  return (
    <article className="max-w-sm rounded-lg border border-stone-200 bg-white p-4 dark:border-stone-800 dark:bg-stone-900">
      <div className="flex items-center gap-3">
        <span className="inline-flex size-12 items-center justify-center rounded-full bg-teal-800 text-sm font-semibold text-white dark:bg-teal-600 dark:text-stone-950" aria-hidden="true">
          {initials}
        </span>
        <div>
          <h3 className="font-semibold text-stone-950 dark:text-stone-50">{name}</h3>
          <p className="text-sm text-stone-500">{role}</p>
        </div>
      </div>
      <p className="mt-3 text-sm text-stone-600 dark:text-stone-400">{location}</p>
      <dl className="mt-4 grid grid-cols-3 gap-2 text-center">
        {[
          ['Projects', '12'],
          ['Reviews', '28'],
          ['Courses', '4'],
        ].map(([label, value]) => (
          <div key={label} className="rounded-md bg-stone-50 py-2 dark:bg-stone-950">
            <dt className="text-xs text-stone-500">{label}</dt>
            <dd className="text-sm font-semibold">{value}</dd>
          </div>
        ))}
      </dl>
      <button
        type="button"
        aria-pressed={following}
        onClick={() => setFollowing((value) => !value)}
        className="mt-4 h-9 w-full rounded-md border border-stone-300 text-sm font-medium dark:border-stone-700"
      >
        {following ? 'Following' : 'Follow'}
      </button>
    </article>
  )
}

export default ProfileCard
