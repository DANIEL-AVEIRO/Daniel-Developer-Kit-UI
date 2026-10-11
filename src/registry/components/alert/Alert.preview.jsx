import { useState } from 'react'
import Alert from './Alert.jsx'

const examples = [
  ['info', 'Preview data', 'These numbers are sample values stored in the component.'],
  ['success', 'Changes saved', 'The form stayed in the browser. Nothing was sent to a server.'],
  ['warning', 'Unsaved edits', 'Leave this page only after you copy the source you need.'],
  ['danger', 'Action blocked', 'Replace this message with the error your app actually returns.'],
]

const AlertPreview = () => {
  const [visible, setVisible] = useState(true)

  return (
    <div className="space-y-3">
      {examples.map(([tone, title, body]) => (
        <Alert key={tone} tone={tone} title={title}>
          {body}
        </Alert>
      ))}
      {visible ? (
        <Alert tone="info" title="Dismissible" onDismiss={() => setVisible(false)}>
          This alert can be closed. It does not persist anywhere.
        </Alert>
      ) : (
        <button type="button" onClick={() => setVisible(true)} className="text-sm font-medium text-teal-800 underline dark:text-teal-300">
          Show the alert again
        </button>
      )}
    </div>
  )
}

export default AlertPreview
