import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

const inputClass =
  'h-10 w-full rounded-md border border-stone-300 bg-white px-3 text-sm text-stone-900 outline-none focus:border-teal-800 focus:ring-2 focus:ring-teal-800/15 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100 dark:focus:border-teal-500'

const LoginForm = () => {
  const [values, setValues] = useState({ email: '', password: '', remember: false })
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function update(event) {
    const { name, type, checked, value } = event.target
    setValues((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
  }

  function onSubmit(event) {
    event.preventDefault()
    const next = {}
    if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = 'Enter a valid email address.'
    if (values.password.length < 8) next.password = 'Use at least 8 characters.'
    setErrors(next)
    setSubmitted(Object.keys(next).length === 0)
  }

  if (submitted) {
    return (
      <div className="max-w-sm rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-100">
        <p className="font-semibold">Signed in locally</p>
        <p className="mt-1">This demo only checks the form. No account was contacted.</p>
        <button type="button" onClick={() => setSubmitted(false)} className="mt-3 font-medium underline">
          Edit details
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="max-w-sm space-y-4" noValidate>
      <div>
        <label htmlFor="login-email" className="mb-1.5 block text-sm font-medium">
          Email
        </label>
        <input id="login-email" name="email" type="email" autoComplete="email" value={values.email} onChange={update} aria-invalid={errors.email ? true : undefined} aria-describedby={errors.email ? 'login-email-error' : undefined} className={inputClass} />
        {errors.email ? <p id="login-email-error" className="mt-1.5 text-xs text-red-700 dark:text-red-300">{errors.email}</p> : null}
      </div>
      <div>
        <label htmlFor="login-password" className="mb-1.5 block text-sm font-medium">
          Password
        </label>
        <div className="relative">
          <input id="login-password" name="password" type={showPassword ? 'text' : 'password'} autoComplete="current-password" value={values.password} onChange={update} aria-invalid={errors.password ? true : undefined} aria-describedby={errors.password ? 'login-password-error' : undefined} className={`${inputClass} pr-10`} />
          <button type="button" aria-label={showPassword ? 'Hide password' : 'Show password'} onClick={() => setShowPassword((current) => !current)} className="absolute top-1/2 right-2 -translate-y-1/2 rounded p-1 text-stone-500">
            {showPassword ? <EyeOff className="size-4" aria-hidden="true" /> : <Eye className="size-4" aria-hidden="true" />}
          </button>
        </div>
        {errors.password ? <p id="login-password-error" className="mt-1.5 text-xs text-red-700 dark:text-red-300">{errors.password}</p> : null}
      </div>
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" name="remember" checked={values.remember} onChange={update} className="size-4 accent-teal-800" />
        Remember this device
      </label>
      <button type="submit" className="h-10 w-full rounded-md bg-teal-800 text-sm font-medium text-white hover:bg-teal-900 dark:bg-teal-600 dark:text-stone-950">
        Sign in
      </button>
    </form>
  )
}

export default LoginForm
