import { useState } from 'react'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  function onSubmit(event) {
    event.preventDefault()
    if (!email || password.length < 8) {
      setMessage('Use a valid email and an 8+ character password.')
      return
    }
    setMessage(`Signed in locally as ${email}.`)
  }

  return (
    <div className="min-h-[32rem] bg-stone-100 dark:bg-stone-950">
      <div className="mx-auto flex min-h-[32rem] max-w-md flex-col justify-center px-4 py-10">
        <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900">
          <p className="text-sm font-medium text-teal-800 dark:text-teal-300">DevKit Studio</p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight">Sign in</h1>
          <p className="mt-1 text-sm text-stone-500">This page validates in the browser only.</p>
          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <Field id="login-page-email" label="Email" type="email" value={email} onChange={setEmail} />
            <Field id="login-page-password" label="Password" type="password" value={password} onChange={setPassword} />
            <button type="submit" className="h-10 w-full rounded-md bg-teal-800 text-sm font-medium text-white dark:bg-teal-600 dark:text-stone-950">
              Continue
            </button>
          </form>
          {message ? <p className="mt-4 text-sm text-stone-700 dark:text-stone-300" aria-live="polite">{message}</p> : null}
          <p className="mt-6 text-center text-sm text-stone-500">
            Need an account? <a href="#register" className="font-medium text-teal-800 dark:text-teal-300">Register</a>
          </p>
        </div>
      </div>
    </div>
  )
}

const Field = ({ id, label, type, value, onChange }) => {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">{label}</label>
      <input id={id} type={type} value={value} onChange={(event) => onChange(event.target.value)} className="h-10 w-full rounded-md border border-stone-300 bg-white px-3 text-sm outline-none focus:border-teal-800 dark:border-stone-700 dark:bg-stone-950" />
    </div>
  )
}

export default LoginPage
