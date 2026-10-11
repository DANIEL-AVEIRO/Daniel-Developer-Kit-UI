const NotFoundTemplate = () => {
  return (
    <div className="flex min-h-[28rem] items-center justify-center bg-stone-100 px-4 dark:bg-stone-950">
      <div className="max-w-md text-center">
        <p className="font-mono text-sm text-stone-500">404</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Page missing</h1>
        <p className="mt-3 text-sm leading-6 text-stone-600 dark:text-stone-400">
          Use this template when a route does not match. Point the button to your home route.
        </p>
        <a href="#home" className="mt-6 inline-flex h-10 items-center rounded-md bg-stone-950 px-4 text-sm font-medium text-white dark:bg-stone-100 dark:text-stone-950">
          Back home
        </a>
      </div>
    </div>
  )
}

export default NotFoundTemplate
