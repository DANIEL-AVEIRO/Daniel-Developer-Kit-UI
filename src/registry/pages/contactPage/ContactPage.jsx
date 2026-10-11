import { useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'

const ContactPage = () => {
  const [sent, setSent] = useState(false)

  return (
    <div className="min-h-[32rem] bg-stone-100 dark:bg-stone-950">
      <div className="mx-auto grid max-w-5xl gap-6 px-4 py-10 lg:grid-cols-2">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Contact studio staff</h1>
          <p className="mt-3 text-sm leading-6 text-stone-600 dark:text-stone-400">Sample contact details for a course site. The form stays in the browser.</p>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-center gap-2"><Mail className="size-4" aria-hidden="true" /> studio@example.edu</li>
            <li className="flex items-center gap-2"><Phone className="size-4" aria-hidden="true" /> +1 (555) 010-2040</li>
            <li className="flex items-center gap-2"><MapPin className="size-4" aria-hidden="true" /> Harbor campus, Room 214</li>
          </ul>
        </div>
        <form
          className="rounded-xl border border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-900"
          onSubmit={(event) => {
            event.preventDefault()
            setSent(true)
          }}
        >
          {sent ? (
            <p className="text-sm">Message ready. Nothing was emailed from this preview.</p>
          ) : (
            <div className="space-y-4">
              <Field id="contact-page-name" label="Name" />
              <Field id="contact-page-email" label="Email" type="email" />
              <div>
                <label htmlFor="contact-page-message" className="mb-1.5 block text-sm font-medium">Message</label>
                <textarea id="contact-page-message" required rows={5} className="w-full rounded-md border border-stone-300 px-3 py-2 text-sm dark:border-stone-700 dark:bg-stone-950" />
              </div>
              <button type="submit" className="h-10 rounded-md bg-stone-950 px-4 text-sm font-medium text-white dark:bg-stone-100 dark:text-stone-950">
                Send message
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

const Field = ({ id, label, type = 'text' }) => {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">{label}</label>
      <input id={id} type={type} required className="h-10 w-full rounded-md border border-stone-300 px-3 text-sm dark:border-stone-700 dark:bg-stone-950" />
    </div>
  )
}

export default ContactPage
