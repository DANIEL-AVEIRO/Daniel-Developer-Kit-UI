import { useState } from 'react'

const sizes = {
  sm: 'size-8 text-xs',
  md: 'size-10 text-sm',
  lg: 'size-14 text-base',
}

const initialsFor = (name) => {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('')
}

const Avatar = ({ name = 'User', src = '', size = 'md', className = '' }) => {
  const [failed, setFailed] = useState(false)
  const showImage = src && !failed

  return (
    <span
      role="img"
      aria-label={name}
      className={`inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-teal-800 font-medium text-white dark:bg-teal-600 dark:text-stone-950 ${sizes[size] || sizes.md} ${className}`}
    >
      {showImage ? (
        <img src={src} alt="" className="size-full object-cover" onError={() => setFailed(true)} />
      ) : (
        <span aria-hidden="true">{initialsFor(name)}</span>
      )}
    </span>
  )
}

export default Avatar
