const Skeleton = ({ className = '' }) => {
  return <div className={`animate-pulse rounded-md bg-stone-200 dark:bg-stone-800 ${className}`} />
}

export default Skeleton
