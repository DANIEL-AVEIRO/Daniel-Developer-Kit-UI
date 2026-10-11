import { useState } from 'react'
import Card, { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './Card.jsx'

const CardPreview = () => {
  const [saved, setSaved] = useState(false)

  return (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>Studio notes</CardTitle>
        <CardDescription>A short brief for the Wednesday review.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Keep the palette neutral, use one accent, and leave room around the source code panel.</p>
      </CardContent>
      <CardFooter>
        <button
          type="button"
          onClick={() => setSaved(true)}
          className="rounded-md bg-teal-800 px-3 py-1.5 text-sm font-medium text-white hover:bg-teal-900 dark:bg-teal-600 dark:text-stone-950"
        >
          {saved ? 'Saved' : 'Save note'}
        </button>
      </CardFooter>
    </Card>
  )
}

export default CardPreview
