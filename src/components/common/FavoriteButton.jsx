import { Star } from 'lucide-react'
import { useLibrary } from '../../hooks/useLibrary.js'
import { cx } from '../../utils/cx.js'

const FavoriteButton = ({ entry, className = '', iconOnly = false }) => {
  const { isFavorite, toggleFavorite } = useLibrary()
  const saved = isFavorite(entry)
  const label = saved ? `Remove ${entry.name} from favorites` : `Save ${entry.name} to favorites`

  return (
    <button
      type="button"
      aria-pressed={saved}
      aria-label={iconOnly ? label : undefined}
      onClick={() => toggleFavorite(entry)}
      className={cx(
        'inline-flex h-9 items-center gap-1.5 rounded-xl border px-2.5 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
        saved
          ? 'border-amber-300 bg-amber-50 text-amber-950 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-100'
          : 'border-stone-300 bg-paper text-ink hover:bg-indigo-50 dark:border-stone-700 dark:bg-paper-dark dark:text-stone-100 dark:hover:bg-indigo-500/10',
        className,
      )}
    >
      <Star className={cx('size-3.5', saved && 'fill-current')} aria-hidden="true" />
      {iconOnly ? null : saved ? 'Saved' : 'Save'}
    </button>
  )
}

export default FavoriteButton
