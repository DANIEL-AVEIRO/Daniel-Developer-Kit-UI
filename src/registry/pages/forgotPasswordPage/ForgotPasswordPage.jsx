import { useState } from 'react'

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  return (
    <div className="flex min-h-[28rem] items-center justify-center bg-stone-100 px-4 dark:bg-stone-950">
      <div className="w-full max-w-md rounded-xl border border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-900">
        <h1 className="text-2xl font-semibold tracking-tight">Reset password</h1>
        <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">Enter the email you use for class work. This demo only shows a success message.</p>
        {sent ? (
          <p className="mt-6 rounded-md bg-emerald-50 px-3 py-2 text-sm text-emerald-950 dark:bg-emerald-950 dark:text-emerald-100">
            If an account existed for {email}, a reset link would be sent.
          </p>
        ) : (
          <form
            className="mt-6 space-y-4"
            onSubmit={(event) => {
              event.preventDefault()
              if (email.includes('@')) setSent(true)
            }}
          >
            <div>
              <label htmlFor="forgot-email" className="mb-1.5 block text-sm font-medium">Email</label>
              <input id="forgot-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="h-10 w-full rounded-md border border-stone-300 px-3 text-sm dark:border-stone-700 dark:bg-stone-950" required />
            </div>
            <button type="submit" className="h-10 w-full rounded-md bg-teal-800 text-sm font-medium text-white dark:bg-teal-600 dark:text-stone-950">
              Send reset link
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default ForgotPasswordPage
