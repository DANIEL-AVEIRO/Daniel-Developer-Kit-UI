const choice = (key, label, options) => ({
  key,
  type: 'select',
  label,
  options: options.map((option) => (typeof option === 'string' ? { value: option, label: labelFor(option) } : option)),
})

const flag = (key, label) => ({ key, type: 'boolean', label })

function labelFor(value) {
  return value.charAt(0).toUpperCase() + value.slice(1)
}

function line(file, name, markup, prelude = '') {
  return `import ${name} from './${file}'\n${prelude ? `${prelude}\n` : ''}\nexport default function Example() {\n  return (\n    ${markup}\n  )\n}\n`
}

function propsFrom(entries) {
  const parts = entries.filter((part) => part)
  return parts.length ? ` ${parts.join(' ')}` : ''
}

export const playgroundCatalog = {
  buttons: {
    defaults: {
      variant: 'primary',
      size: 'md',
      rounded: 'md',
      disabled: false,
      fullWidth: false,
      loading: false,
    },
    controls: [
      choice('variant', 'Variant', ['primary', 'secondary', 'outline', 'ghost', 'danger']),
      choice('size', 'Size', ['sm', 'md', 'lg']),
      choice('rounded', 'Rounded corners', [
        { value: 'none', label: 'None' },
        { value: 'md', label: 'Medium' },
        { value: 'full', label: 'Full' },
      ]),
      flag('disabled', 'Disabled'),
      flag('fullWidth', 'Full width'),
      flag('loading', 'Loading'),
    ],
    formatUsage(values) {
      const attrs = propsFrom([
        values.variant !== 'primary' ? `variant="${values.variant}"` : '',
        values.size !== 'md' ? `size="${values.size}"` : '',
        values.rounded !== 'md' ? `rounded="${values.rounded}"` : '',
        values.disabled ? 'disabled' : '',
        values.fullWidth ? 'fullWidth' : '',
        values.loading ? 'loading' : '',
      ])
      return line('Button.jsx', 'Button', `<Button${attrs}>Save changes</Button>`)
    },
  },
  'icon-buttons': {
    defaults: { variant: 'outline', size: 'md', rounded: 'md', disabled: false },
    controls: [
      choice('variant', 'Variant', ['primary', 'outline', 'ghost']),
      choice('size', 'Size', ['sm', 'md', 'lg']),
      choice('rounded', 'Rounded corners', [
        { value: 'none', label: 'None' },
        { value: 'md', label: 'Medium' },
        { value: 'full', label: 'Full' },
      ]),
      flag('disabled', 'Disabled'),
    ],
    formatUsage(values) {
      const attrs = propsFrom([
        'label="Notifications"',
        values.variant !== 'outline' ? `variant="${values.variant}"` : '',
        values.size !== 'md' ? `size="${values.size}"` : '',
        values.rounded !== 'md' ? `rounded="${values.rounded}"` : '',
        values.disabled ? 'disabled' : '',
      ])
      return line(
        'IconButton.jsx',
        'IconButton',
        `<IconButton${attrs}>\n      <Bell className="size-4" aria-hidden="true" />\n    </IconButton>`,
        "import { Bell } from 'lucide-react'",
      )
    },
  },
  badges: {
    defaults: { tone: 'neutral' },
    controls: [choice('tone', 'Color', ['neutral', 'info', 'success', 'warning', 'danger'])],
    formatUsage(values) {
      return line('Badge.jsx', 'Badge', `<Badge tone="${values.tone}">Paid</Badge>`)
    },
  },
  avatars: {
    defaults: { size: 'md' },
    controls: [choice('size', 'Size', ['sm', 'md', 'lg'])],
    formatUsage(values) {
      return line('Avatar.jsx', 'Avatar', `<Avatar name="Amina Shah" size="${values.size}" />`)
    },
  },
  alerts: {
    defaults: { tone: 'info', dismissible: false },
    controls: [
      choice('tone', 'Color', ['info', 'success', 'warning', 'danger']),
      flag('dismissible', 'Dismissible'),
    ],
    formatUsage(values) {
      const dismiss = values.dismissible ? ' onDismiss={() => {}}' : ''
      return line('Alert.jsx', 'Alert', `<Alert tone="${values.tone}" title="Check the form"${dismiss}>Review the highlighted fields.</Alert>`)
    },
  },
  spinners: {
    defaults: { size: 'md' },
    controls: [choice('size', 'Size', ['sm', 'md', 'lg'])],
    formatUsage(values) {
      return line('Spinner.jsx', 'Spinner', `<Spinner label="Loading courses" size="${values.size}" />`)
    },
  },
  'text-inputs': {
    defaults: { disabled: false, error: '' },
    controls: [
      flag('disabled', 'Disabled'),
      choice('error', 'Error', [
        { value: '', label: 'None' },
        { value: 'Enter a valid email.', label: 'Invalid email' },
      ]),
    ],
    formatUsage(values) {
      const attrs = propsFrom([
        'id="email"',
        'label="Email"',
        'type="email"',
        'placeholder="you@school.edu"',
        values.disabled ? 'disabled' : '',
        values.error ? `error="${values.error}"` : '',
      ])
      return line('TextField.jsx', 'TextField', `<TextField${attrs} />`)
    },
  },
  textareas: {
    defaults: { disabled: false, error: '' },
    controls: [
      flag('disabled', 'Disabled'),
      choice('error', 'Error', [
        { value: '', label: 'None' },
        { value: 'Add a short message.', label: 'Required' },
      ]),
    ],
    formatUsage(values) {
      const attrs = propsFrom([
        'id="notes"',
        'label="Notes"',
        values.disabled ? 'disabled' : '',
        values.error ? `error="${values.error}"` : '',
      ])
      return line('TextArea.jsx', 'TextArea', `<TextArea${attrs} />`)
    },
  },
  'select-fields': {
    defaults: { disabled: false, error: '' },
    controls: [
      flag('disabled', 'Disabled'),
      choice('error', 'Error', [
        { value: '', label: 'None' },
        { value: 'Choose a track.', label: 'Required' },
      ]),
    ],
    formatUsage(values) {
      const attrs = propsFrom([
        'id="track"',
        'label="Track"',
        'options={[{ value: "design", label: "Design" }]}',
        values.disabled ? 'disabled' : '',
        values.error ? `error="${values.error}"` : '',
      ])
      return line('SelectField.jsx', 'SelectField', `<SelectField${attrs} />`)
    },
  },
  checkboxes: {
    defaults: { disabled: false },
    controls: [flag('disabled', 'Disabled')],
    formatUsage(values) {
      const attrs = propsFrom(['id="terms"', 'label="Accept the terms"', values.disabled ? 'disabled' : ''])
      return line('CheckboxField.jsx', 'CheckboxField', `<CheckboxField${attrs} />`)
    },
  },
  switches: {
    defaults: { disabled: false },
    controls: [flag('disabled', 'Disabled')],
    formatUsage(values) {
      const attrs = propsFrom([
        'id="updates"',
        'label="Email updates"',
        'checked={checked}',
        'onChange={setChecked}',
        values.disabled ? 'disabled' : '',
      ])
      return `import { useState } from 'react'\nimport SwitchField from './SwitchField.jsx'\n\nexport default function Example() {\n  const [checked, setChecked] = useState(true)\n\n  return (\n    <SwitchField${attrs} />\n  )\n}\n`
    },
  },
  'status-badges': {
    defaults: { status: 'online' },
    controls: [choice('status', 'Color', ['online', 'away', 'busy', 'offline', 'pending', 'paid', 'failed'])],
    formatUsage(values) {
      return line('StatusBadge.jsx', 'StatusBadge', `<StatusBadge status="${values.status}" />`)
    },
  },
}

export function playgroundFor(entry) {
  if (!entry || entry.kind !== 'component') return null
  return playgroundCatalog[entry.slug] ?? null
}
