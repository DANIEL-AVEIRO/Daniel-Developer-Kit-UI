import { useState } from 'react'
import CheckboxField from './CheckboxField.jsx'

const CheckboxFieldPreview = () => {
  const [checked, setChecked] = useState({ notes: true, digest: false })

  return (
    <fieldset className="max-w-md space-y-3">
      <legend className="mb-2 text-sm font-medium text-stone-800 dark:text-stone-200">Email preferences</legend>
      <CheckboxField
        id="notes"
        label="Project notes"
        description="A summary when someone comments."
        checked={checked.notes}
        onChange={(event) => setChecked((current) => ({ ...current, notes: event.target.checked }))}
      />
      <CheckboxField
        id="digest"
        label="Weekly digest"
        description="One email each Monday."
        checked={checked.digest}
        onChange={(event) => setChecked((current) => ({ ...current, digest: event.target.checked }))}
      />
    </fieldset>
  )
}

export default CheckboxFieldPreview
