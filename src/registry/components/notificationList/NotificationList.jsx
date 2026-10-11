import { useState } from 'react'

const initialNotes = [
  { id: 1, title: 'Review requested', body: 'Amina asked for eyes on the navbar.', time: '2m', unread: true },
  { id: 2, title: 'Build finished', body: 'The preview build completed with no errors.', time: '1h', unread: true },
  { id: 3, title: 'Course reminder', body: 'Studio critique is Wednesday at 10:00.', time: '1d', unread: false },
]

const NotificationList = () => {
  const [notes, setNotes] = useState(initialNotes)

  function mark(id) {
    setNotes((current) => current.map((note) => (note.id === id ? { ...note, unread: false } : note)))
  }

  function markAll() {
    setNotes((current) => current.map((note) => ({ ...note, unread: false })))
  }

  const unread = notes.filter((note) => note.unread).length

  return (
    <div className="max-w-md overflow-hidden rounded-lg border border-stone-200 dark:border-stone-800">
      <div className="flex items-center justify-between border-b border-stone-200 px-3 py-2 dark:border-stone-800">
        <p className="text-sm font-medium">{unread} unread</p>
        <button type="button" onClick={markAll} className="text-xs font-medium text-teal-800 dark:text-teal-300">
          Mark all read
        </button>
      </div>
      <ul>
        {notes.map((note) => (
          <li key={note.id} className="border-b border-stone-200 last:border-0 dark:border-stone-800">
            <button type="button" onClick={() => mark(note.id)} className="flex w-full gap-3 px-3 py-3 text-left">
              <span className={`mt-1.5 size-2 shrink-0 rounded-full ${note.unread ? 'bg-teal-700' : 'bg-transparent'}`} aria-hidden="true" />
              <span>
                <span className="block text-sm font-medium">{note.title}</span>
                <span className="mt-0.5 block text-sm text-stone-600 dark:text-stone-400">{note.body}</span>
                <span className="mt-1 block text-xs text-stone-500">{note.time} ago</span>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NotificationList
