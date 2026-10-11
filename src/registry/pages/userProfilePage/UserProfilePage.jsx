import { useState } from 'react'

const UserProfilePage = () => {
  const [tab, setTab] = useState('about')

  return (
    <div className="min-h-[32rem] bg-stone-100 dark:bg-stone-950">
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="overflow-hidden rounded-xl border border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
          <div className="h-28 bg-teal-800 dark:bg-teal-900" />
          <div className="px-6 pb-6">
            <div className="-mt-8 flex flex-wrap items-end justify-between gap-3">
              <div className="flex items-end gap-3">
                <span className="inline-flex size-16 items-center justify-center rounded-full border-4 border-white bg-stone-950 text-lg font-semibold text-white dark:border-stone-900" aria-hidden="true">
                  AS
                </span>
                <div>
                  <h1 className="text-xl font-semibold">Amina Shah</h1>
                  <p className="text-sm text-stone-500">Frontend track · Harbor campus</p>
                </div>
              </div>
              <button type="button" className="h-9 rounded-md border border-stone-300 px-3 text-sm dark:border-stone-700">
                Edit profile
              </button>
            </div>
            <div className="mt-6 flex gap-2 border-b border-stone-200 dark:border-stone-800" role="tablist" aria-label="Profile sections">
              {['about', 'projects', 'activity'].map((item) => (
                <button key={item} type="button" role="tab" aria-selected={tab === item} onClick={() => setTab(item)} className={`border-b-2 px-3 py-2 text-sm capitalize ${tab === item ? 'border-teal-800 font-medium' : 'border-transparent text-stone-500'}`}>
                  {item}
                </button>
              ))}
            </div>
            <div className="mt-4 text-sm leading-6 text-stone-700 dark:text-stone-300">
              {tab === 'about' ? 'Amina builds accessible React interfaces and documents the source so classmates can reuse it.' : null}
              {tab === 'projects' ? 'Current projects: Responsive navbar, Pricing section, Student dashboard.' : null}
              {tab === 'activity' ? 'Submitted the data table exercise and requested a review of the settings page.' : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfilePage
