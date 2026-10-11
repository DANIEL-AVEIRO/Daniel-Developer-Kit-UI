const variants = {
  primary:
    "bg-teal-800 text-white hover:bg-teal-900 dark:bg-teal-600 dark:text-stone-950 dark:hover:bg-teal-500",
  outline:
    "border border-stone-300 bg-white text-stone-800 hover:bg-stone-50 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100 dark:hover:bg-stone-800",
  ghost:
    "text-stone-700 hover:bg-stone-100 dark:text-stone-200 dark:hover:bg-stone-800",
};

const sizes = {
  sm: "size-8",
  md: "size-10",
  lg: "size-11",
};

const roundedStyles = {
  none: "rounded-none",
  md: "rounded-md",
  full: "rounded-full",
};

const IconButton = ({
  label,
  variant = "outline",
  size = "md",
  rounded = "md",
  className = "",
  type = "button",
  children,
  ...props
}) => {
  return (
    <button
      type={type}
      aria-label={label}
      className={`inline-flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:outline-teal-400 ${variants[variant] || variants.outline} ${sizes[size] || sizes.md} ${roundedStyles[rounded] || roundedStyles.md} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default IconButton
