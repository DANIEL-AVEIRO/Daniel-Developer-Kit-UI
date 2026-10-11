import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const inputClass =
  'w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-sm outline-none focus:border-teal-800 focus:ring-2 focus:ring-teal-800/15 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100 dark:focus:border-teal-500'

const empty = { name: '', email: '', topic: '', message: '' }

const ContactForm = () => {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  function update(event) {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  function onSubmit(event) {
    event.preventDefault()
    const next = {}
    if (values.name.trim().length < 2) next.name = 'Enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = 'Enter a valid email address.'
    if (!values.topic) next.topic = 'Choose a topic.'
    if (values.message.trim().length < 12) next.message = 'Write at least a short message.'
    setErrors(next)
    setSent(Object.keys(next).length === 0)
  }

  if (sent) {
    return (
      <div className="max-w-lg rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-100">
        <p className="font-semibold">Message ready</p>
        <p className="mt-1">The {values.topic} note from {values.name} stayed in this preview.</p>
        <button type="button" onClick={() => { setSent(false); setValues(empty) }} className="mt-3 font-medium underline">
          Write another
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="max-w-lg space-y-4" noValidate>
      <Field id="contact-name" name="name" label="Name" value={values.name} onChange={update} error={errors.name} />
      <Field id="contact-email" name="email" type="email" label="Email" value={values.email} onChange={update} error={errors.email} />
      <div>
        <label htmlFor="contact-topic" className="mb-1.5 block text-sm font-medium">Topic</label>
        <div className="relative">
          <select id="contact-topic" name="topic" value={values.topic} onChange={update} className={`${inputClass} appearance-none pr-9`}>
            <option value="">Select a topic</option>
            <option value="components">Components</option>
            <option value="templates">Templates</option>
            <option value="course">Course use</option>
          </select>
          <ChevronDown className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-stone-400" aria-hidden="true" />
        </div>
        {errors.topic ? <p className="mt-1.5 text-xs text-red-700 dark:text-red-300">{errors.topic}</p> : null}
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium">Message</label>
        <textarea id="contact-message" name="message" rows={4} value={values.message} onChange={update} className={inputClass} />
        {errors.message ? <p className="mt-1.5 text-xs text-red-700 dark:text-red-300">{errors.message}</p> : null}
      </div>
      <button type="submit" className="h-10 rounded-md bg-teal-800 px-4 text-sm font-medium text-white dark:bg-teal-600 dark:text-stone-950">
        Send message
      </button>
    </form>
  )
}

const Field = ({ id, label, error, ...props }) => {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">{label}</label>
      <input id={id} className={inputClass} {...props} />
      {error ? <p className="mt-1.5 text-xs text-red-700 dark:text-red-300">{error}</p> : null}
    </div>
  )
}

export default ContactForm
