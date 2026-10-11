import { useState } from 'react'

const inputClass =
  'h-10 w-full rounded-md border border-stone-300 bg-white px-3 text-sm outline-none focus:border-teal-800 focus:ring-2 focus:ring-teal-800/15 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100 dark:focus:border-teal-500'

const empty = { name: '', email: '', password: '', confirm: '', terms: false }

const RegistrationForm = () => {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [done, setDone] = useState(false)

  function update(event) {
    const { name, type, checked, value } = event.target
    setValues((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
  }

  function onSubmit(event) {
    event.preventDefault()
    const next = {}
    if (values.name.trim().length < 2) next.name = 'Enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = 'Enter a valid email address.'
    if (values.password.length < 8) next.password = 'Use at least 8 characters.'
    if (values.confirm !== values.password) next.confirm = 'Passwords do not match.'
    if (!values.terms) next.terms = 'Accept the sample terms to continue.'
    setErrors(next)
    setDone(Object.keys(next).length === 0)
  }

  if (done) {
    return (
      <div className="max-w-sm rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-100">
        <p className="font-semibold">Account created in this preview</p>
        <p className="mt-1">{values.name} can now explore the sample catalog. Nothing was stored.</p>
        <button type="button" onClick={() => { setDone(false); setValues(empty) }} className="mt-3 font-medium underline">
          Start over
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="max-w-sm space-y-4" noValidate>
      <Field id="register-name" name="name" label="Name" autoComplete="name" value={values.name} onChange={update} error={errors.name} />
      <Field id="register-email" name="email" type="email" label="Email" autoComplete="email" value={values.email} onChange={update} error={errors.email} />
      <Field id="register-password" name="password" type="password" label="Password" autoComplete="new-password" value={values.password} onChange={update} error={errors.password} />
      <Field id="register-confirm" name="confirm" type="password" label="Confirm password" autoComplete="new-password" value={values.confirm} onChange={update} error={errors.confirm} />
      <div>
        <label className="flex items-start gap-2 text-sm">
          <input type="checkbox" name="terms" checked={values.terms} onChange={update} className="mt-0.5 size-4 accent-teal-800" />
          I agree to the sample terms for this demo.
        </label>
        {errors.terms ? <p className="mt-1.5 text-xs text-red-700 dark:text-red-300">{errors.terms}</p> : null}
      </div>
      <button type="submit" className="h-10 w-full rounded-md bg-teal-800 text-sm font-medium text-white dark:bg-teal-600 dark:text-stone-950">
        Create account
      </button>
    </form>
  )
}

const Field = ({ id, label, error, ...props }) => {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      <input id={id} aria-invalid={error ? true : undefined} className={inputClass} {...props} />
      {error ? <p className="mt-1.5 text-xs text-red-700 dark:text-red-300">{error}</p> : null}
    </div>
  )
}

export default RegistrationForm
