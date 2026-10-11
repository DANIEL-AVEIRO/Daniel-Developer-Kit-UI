import { useState } from 'react'

const RegistrationPage = () => {
  const [values, setValues] = useState({ name: '', email: '', password: '' })
  const [done, setDone] = useState(false)

  function update(event) {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  function onSubmit(event) {
    event.preventDefault()
    if (values.name && values.email && values.password.length >= 8) setDone(true)
  }

  return (
    <div className="min-h-[32rem] bg-stone-100 dark:bg-stone-950">
      <div className="mx-auto grid min-h-[32rem] max-w-5xl gap-8 px-4 py-10 lg:grid-cols-2 lg:items-center">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Create a studio account</h1>
          <p className="mt-3 text-sm leading-6 text-stone-600 dark:text-stone-400">
            Use this page as a starting point for coursework. Replace the copy and wire the submit handler to your own auth later.
          </p>
        </div>
        <div className="rounded-xl border border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-900">
          {done ? (
            <p className="text-sm">Welcome, {values.name}. This preview did not create a real account.</p>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              {[['name', 'Name', 'text'], ['email', 'Email', 'email'], ['password', 'Password', 'password']].map(([name, label, type]) => (
                <div key={name}>
                  <label htmlFor={`reg-${name}`} className="mb-1.5 block text-sm font-medium">{label}</label>
                  <input id={`reg-${name}`} name={name} type={type} value={values[name]} onChange={update} className="h-10 w-full rounded-md border border-stone-300 px-3 text-sm dark:border-stone-700 dark:bg-stone-950" required />
                </div>
              ))}
              <button type="submit" className="h-10 w-full rounded-md bg-stone-950 text-sm font-medium text-white dark:bg-stone-100 dark:text-stone-950">
                Create account
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default RegistrationPage
