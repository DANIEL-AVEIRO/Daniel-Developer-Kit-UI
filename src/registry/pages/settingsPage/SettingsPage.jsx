import { useState } from 'react'

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    name: 'Amina Shah',
    email: 'amina@example.edu',
    digest: true,
    publicProfile: false,
  })
  const [saved, setSaved] = useState(false)

  function update(event) {
    const { name, type, checked, value } = event.target
    setSettings((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
    setSaved(false)
  }

  return (
    <div className="min-h-[32rem] bg-stone-100 dark:bg-stone-950">
      <div className="mx-auto grid max-w-5xl gap-6 px-4 py-8 lg:grid-cols-[14rem_1fr]">
        <aside className="rounded-xl border border-stone-200 bg-white p-3 text-sm dark:border-stone-800 dark:bg-stone-900">
          <p className="px-2 text-xs font-medium tracking-wide text-stone-500 uppercase">Settings</p>
          <ul className="mt-2 space-y-1">
            {['Profile', 'Notifications', 'Security'].map((item, index) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className={`block rounded-md px-2 py-1.5 ${index === 0 ? 'bg-stone-100 font-medium dark:bg-stone-800' : 'text-stone-600 dark:text-stone-300'}`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </aside>
        <form
          className="rounded-xl border border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-900"
          onSubmit={(event) => {
            event.preventDefault()
            setSaved(true)
          }}
        >
          <h1 className="text-xl font-semibold">Profile settings</h1>
          <div className="mt-6 space-y-4">
            <Field id="settings-name" name="name" label="Name" value={settings.name} onChange={update} />
            <Field id="settings-email" name="email" type="email" label="Email" value={settings.email} onChange={update} />
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" name="digest" checked={settings.digest} onChange={update} className="size-4 accent-teal-800" />
              Weekly digest
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" name="publicProfile" checked={settings.publicProfile} onChange={update} className="size-4 accent-teal-800" />
              Public profile
            </label>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <button type="submit" className="h-10 rounded-md bg-teal-800 px-4 text-sm font-medium text-white dark:bg-teal-600 dark:text-stone-950">
              Save changes
            </button>
            {saved ? <p className="text-sm text-emerald-700 dark:text-emerald-300">Saved in this preview.</p> : null}
          </div>
        </form>
      </div>
    </div>
  )
}

const Field = ({ id, label, ...props }) => {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">{label}</label>
      <input id={id} className="h-10 w-full max-w-md rounded-md border border-stone-300 px-3 text-sm dark:border-stone-700 dark:bg-stone-950" {...props} />
    </div>
  )
}

export default SettingsPage
