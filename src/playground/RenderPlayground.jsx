import { Bell } from 'lucide-react'
import { useState } from 'react'
import Alert from '../registry/components/alert/Alert.jsx'
import Avatar from '../registry/components/avatar/Avatar.jsx'
import Badge from '../registry/components/badge/Badge.jsx'
import Button from '../registry/components/button/Button.jsx'
import CheckboxField from '../registry/components/checkboxField/CheckboxField.jsx'
import IconButton from '../registry/components/iconButton/IconButton.jsx'
import SelectField from '../registry/components/selectField/SelectField.jsx'
import Spinner from '../registry/components/spinner/Spinner.jsx'
import StatusBadge from '../registry/components/statusBadge/StatusBadge.jsx'
import SwitchField from '../registry/components/switchField/SwitchField.jsx'
import TextArea from '../registry/components/textArea/TextArea.jsx'
import TextField from '../registry/components/textField/TextField.jsx'

const trackOptions = [
  { value: 'design', label: 'Design' },
  { value: 'engineering', label: 'Engineering' },
]

export function PlaygroundPreview({ slug, values }) {
  switch (slug) {
    case 'buttons':
      return (
        <Button
          variant={values.variant}
          size={values.size}
          rounded={values.rounded}
          fullWidth={values.fullWidth}
          loading={values.loading}
          disabled={values.disabled}
        >
          Save changes
        </Button>
      )
    case 'icon-buttons':
      return (
        <IconButton label="Notifications" variant={values.variant} size={values.size} rounded={values.rounded} disabled={values.disabled}>
          <Bell className="size-4" aria-hidden="true" />
        </IconButton>
      )
    case 'badges':
      return <Badge tone={values.tone}>Paid</Badge>
    case 'avatars':
      return <Avatar name="Amina Shah" size={values.size} />
    case 'alerts':
      return <AlertPlayground values={values} />
    case 'spinners':
      return <Spinner label="Loading courses" size={values.size} />
    case 'text-inputs':
      return (
        <div className="max-w-sm">
          <TextField
            id="playground-email"
            label="Email"
            type="email"
            placeholder="you@school.edu"
            disabled={values.disabled}
            error={values.error || undefined}
          />
        </div>
      )
    case 'textareas':
      return (
        <div className="max-w-sm">
          <TextArea id="playground-notes" label="Notes" disabled={values.disabled} error={values.error || undefined} />
        </div>
      )
    case 'select-fields':
      return (
        <div className="max-w-sm">
          <SelectField
            id="playground-track"
            label="Track"
            options={trackOptions}
            disabled={values.disabled}
            error={values.error || undefined}
          />
        </div>
      )
    case 'checkboxes':
      return <CheckboxField id="playground-terms" label="Accept the terms" disabled={values.disabled} />
    case 'switches':
      return <SwitchPlayground disabled={values.disabled} />
    case 'status-badges':
      return <StatusBadge status={values.status} />
    default:
      return null
  }
}

function AlertPlayground({ values }) {
  return <AlertBody key={`${values.tone}-${values.dismissible}`} values={values} />
}

function AlertBody({ values }) {
  const [open, setOpen] = useState(true)

  if (!open) {
    return (
      <button type="button" className="text-sm font-medium underline" onClick={() => setOpen(true)}>
        Show alert
      </button>
    )
  }

  return (
    <Alert
      tone={values.tone}
      title="Check the form"
      onDismiss={values.dismissible ? () => setOpen(false) : undefined}
    >
      Review the highlighted fields.
    </Alert>
  )
}

function SwitchPlayground({ disabled }) {
  const [checked, setChecked] = useState(true)

  return (
    <div className="max-w-sm">
      <SwitchField id="playground-updates" label="Email updates" description="Course reminders" checked={checked} onChange={setChecked} disabled={disabled} />
    </div>
  )
}
