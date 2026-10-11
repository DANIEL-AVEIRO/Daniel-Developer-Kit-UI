import { useState } from 'react'
import RadioGroup from './RadioGroup.jsx'

const plans = [
  { value: 'studio', label: 'Studio', description: 'For one class project.' },
  { value: 'lab', label: 'Lab', description: 'Shared with a small team.' },
  { value: 'campus', label: 'Campus', description: 'Several courses and instructors.' },
]

const RadioGroupPreview = () => {
  const [plan, setPlan] = useState('lab')

  return (
    <div className="max-w-md">
      <RadioGroup name="plan" label="Plan" options={plans} value={plan} onChange={setPlan} />
      <p className="mt-3 text-sm text-stone-600 dark:text-stone-400">Current plan: {plan}</p>
    </div>
  )
}

export default RadioGroupPreview
