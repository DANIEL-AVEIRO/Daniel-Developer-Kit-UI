import { Quote } from 'lucide-react'
import { useState } from 'react'

const quotes = [
  { name: 'Amina Shah', role: 'Frontend student', quote: 'I copied the login form into my Vite app and it worked on the first try.' },
  { name: 'Leo Martins', role: 'Design student', quote: 'The preview widths made it obvious how the navbar collapses.' },
  { name: 'Noah Adeyemi', role: 'Course assistant', quote: 'Students stop guessing which Tailwind classes belong together.' },
]

const Testimonials = () => {
  const [index, setIndex] = useState(0)
  const item = quotes[index]

  return (
    <section className="rounded-xl border border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-900">
      <Quote className="size-5 text-stone-400" aria-hidden="true" />
      <blockquote className="mt-4 max-w-2xl text-xl leading-8 text-stone-900 dark:text-stone-50">“{item.quote}”</blockquote>
      <p className="mt-4 text-sm font-medium">{item.name}</p>
      <p className="text-sm text-stone-500">{item.role}</p>
      <div className="mt-6 flex gap-2">
        {quotes.map((quote, quoteIndex) => (
          <button
            key={quote.name}
            type="button"
            aria-label={`Show testimonial from ${quote.name}`}
            aria-pressed={quoteIndex === index}
            onClick={() => setIndex(quoteIndex)}
            className={`size-2.5 rounded-full ${quoteIndex === index ? 'bg-teal-800 dark:bg-teal-400' : 'bg-stone-300 dark:bg-stone-700'}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Testimonials
