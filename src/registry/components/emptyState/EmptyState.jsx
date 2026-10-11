const EmptyState = ({ icon, title = 'Nothing here yet', description = 'Try a different filter or add the first item.', action }) => {
  return (
    <div className="flex flex-col items-center rounded-lg border border-dashed border-stone-300 px-6 py-12 text-center dark:border-stone-700">
      {icon ? <div className="mb-3 text-stone-400">{icon}</div> : null}
      <h3 className="text-base font-semibold text-stone-950 dark:text-stone-50">{title}</h3>
      <p className="mt-1 max-w-sm text-sm leading-6 text-stone-600 dark:text-stone-400">{description}</p>
      {action ? <div className="mt-4">{action}</div> : null}
    </div>
  )
}

export default EmptyState
