const Card = ({ className = '', children }) => {
  return (
    <section className={`rounded-lg border border-stone-200 bg-white shadow-sm dark:border-stone-800 dark:bg-stone-900 ${className}`}>
      {children}
    </section>
  )
}

const CardHeader = ({ className = '', children }) => {
  return <div className={`border-b border-stone-200 px-4 py-3 dark:border-stone-800 ${className}`}>{children}</div>
}

const CardTitle = ({ className = '', children }) => {
  return <h3 className={`text-base font-semibold text-stone-950 dark:text-stone-50 ${className}`}>{children}</h3>
}

const CardDescription = ({ className = '', children }) => {
  return <p className={`mt-1 text-sm text-stone-600 dark:text-stone-400 ${className}`}>{children}</p>
}

const CardContent = ({ className = '', children }) => {
  return <div className={`px-4 py-4 text-sm text-stone-700 dark:text-stone-300 ${className}`}>{children}</div>
}

const CardFooter = ({ className = '', children }) => {
  return (
    <div className={`flex items-center justify-end gap-2 border-t border-stone-200 px-4 py-3 dark:border-stone-800 ${className}`}>
      {children}
    </div>
  )
}

export { CardHeader, CardTitle, CardDescription, CardContent, CardFooter }

export default Card
