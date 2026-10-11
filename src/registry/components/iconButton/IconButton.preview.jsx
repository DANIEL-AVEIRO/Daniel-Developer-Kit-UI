import { Bell, Plus, Search, Settings } from 'lucide-react'
import { useState } from 'react'
import IconButton from './IconButton.jsx'

const IconButtonPreview = () => {
  const [saved, setSaved] = useState(false)

  return (
    <div className="flex flex-wrap items-center gap-2">
      <IconButton label="Search">
        <Search className="size-4" aria-hidden="true" />
      </IconButton>
      <IconButton label="Notifications" variant="ghost">
        <Bell className="size-4" aria-hidden="true" />
      </IconButton>
      <IconButton label="Settings" variant="primary">
        <Settings className="size-4" aria-hidden="true" />
      </IconButton>
      <IconButton label={saved ? 'Added' : 'Add item'} onClick={() => setSaved(true)} disabled={saved}>
        <Plus className="size-4" aria-hidden="true" />
      </IconButton>
      <span className="text-sm text-stone-600 dark:text-stone-300">{saved ? 'Item added' : 'Icon buttons need a text label.'}</span>
    </div>
  )
}

export default IconButtonPreview
