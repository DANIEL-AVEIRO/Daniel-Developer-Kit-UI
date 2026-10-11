import { useState } from 'react'
import Button from './Button.jsx'

const ButtonPreview = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Danger</Button>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button disabled>Disabled</Button>
        <Button loading>Loading</Button>
      </div>
      <Button onClick={() => setCount((value) => value + 1)}>Clicked {count} times</Button>
    </div>
  )
}

export default ButtonPreview
