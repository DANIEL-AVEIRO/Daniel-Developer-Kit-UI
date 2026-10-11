import { useState } from 'react'
import SelectField from './SelectField.jsx'

const tracks = [
  { value: 'design', label: 'Interface design' },
  { value: 'frontend', label: 'Frontend engineering' },
  { value: 'research', label: 'User research' },
]

const SelectFieldPreview = () => {
  const [value, setValue] = useState('')

  return (
    <form className="max-w-sm space-y-4" onSubmit={(event) => event.preventDefault()}>
      <SelectField id="study-track" label="Study track" options={tracks} value={value} onChange={(event) => setValue(event.target.value)} hint={value ? `Selected: ${value}` : 'Choose one track.'} />
      <SelectField id="campus" label="Campus" options={[{ value: 'harbor', label: 'Harbor' }]} error="Campus is required." />
    </form>
  )
}

export default SelectFieldPreview
