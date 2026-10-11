const variants = {
  primary: 'bg-teal-800 text-white hover:bg-teal-900 dark:bg-teal-600 dark:text-stone-950 dark:hover:bg-teal-500',
  secondary: 'bg-stone-200 text-stone-900 hover:bg-stone-300 dark:bg-stone-800 dark:text-stone-100 dark:hover:bg-stone-700',
  outline:
    'border border-stone-300 bg-white text-stone-900 hover:bg-stone-50 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100 dark:hover:bg-stone-800',
  ghost: 'text-stone-700 hover:bg-stone-100 dark:text-stone-200 dark:hover:bg-stone-800',
  danger: 'bg-red-700 text-white hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-500',
}

const sizes = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-11 px-5 text-base',
}

const roundedStyles = {
  none: 'rounded-none',
  md: 'rounded-md',
  full: 'rounded-full',
}

const Button = ({
  variant = 'primary',
  size = 'md',
  rounded = 'md',
  fullWidth = false,
  loading = false,
  className = '',
  type = 'button',
  disabled = false,
  children,
  ...props
}) => {
  const isDisabled = disabled || loading

  return (
    <button
      type={type}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      className={`inline-flex items-center justify-center gap-2 font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:outline-teal-400 ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${roundedStyles[rounded] || roundedStyles.md} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {loading ? <span className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" aria-hidden="true" /> : null}
      {children}
    </button>
  )
}

export default Button
