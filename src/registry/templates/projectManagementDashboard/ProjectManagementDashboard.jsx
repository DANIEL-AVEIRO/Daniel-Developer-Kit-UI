import { Kanban, Plus } from 'lucide-react'
import { useState } from 'react'
import { columns as initialColumns } from './sampleData.js'

const ProjectManagementDashboard = () => {
  const [board, setBoard] = useState(initialColumns)

  function addCard() {
    setBoard((current) =>
      current.map((column, index) =>
        index === 0
          ? {
              ...column,
              cards: [{ id: `c-${Date.now()}`, title: 'New task from this preview', tag: 'Local' }, ...column.cards],
            }
          : column,
      ),
    )
  }

  return (
    <div className="min-h-[40rem] bg-stone-100 dark:bg-stone-950">
      <header className="border-b border-stone-200 bg-white px-4 py-3 dark:border-stone-800 dark:bg-stone-900">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Kanban className="size-5 text-teal-800 dark:text-teal-400" aria-hidden="true" />
            <div>
              <h1 className="text-lg font-semibold">Project board</h1>
              <p className="text-xs text-stone-500">Cards stay in component state</p>
            </div>
          </div>
          <button type="button" onClick={addCard} className="inline-flex h-9 items-center gap-1.5 rounded-md bg-teal-800 px-3 text-sm font-medium text-white dark:bg-teal-600 dark:text-stone-950">
            <Plus className="size-4" aria-hidden="true" />
            Add task
          </button>
        </div>
      </header>
      <div className="mx-auto grid max-w-6xl gap-4 overflow-x-auto px-4 py-4 md:grid-cols-3">
        {board.map((column) => (
          <section key={column.id} className="min-w-[16rem] rounded-xl border border-stone-200 bg-white p-3 dark:border-stone-800 dark:bg-stone-900">
            <h2 className="text-sm font-semibold">{column.title}</h2>
            <ul className="mt-3 space-y-2">
              {column.cards.map((card) => (
                <li key={card.id} className="rounded-lg border border-stone-200 p-3 text-sm dark:border-stone-800">
                  <p className="font-medium">{card.title}</p>
                  <p className="mt-1 text-xs text-stone-500">{card.tag}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}

export default ProjectManagementDashboard
