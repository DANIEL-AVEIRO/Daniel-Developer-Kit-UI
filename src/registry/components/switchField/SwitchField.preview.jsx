import { useState } from 'react'
import SwitchField from './SwitchField.jsx'

const SwitchFieldPreview = () => {
  const [settings, setSettings] = useState({ publicProfile: true, tips: false })

  return (
    <div className="max-w-md space-y-4">
      <SwitchField
        id="public-profile"
        label="Public profile"
        description="Other students can see your name and track."
        checked={settings.publicProfile}
        onChange={(checked) => setSettings((current) => ({ ...current, publicProfile: checked }))}
      />
      <SwitchField
        id="product-tips"
        label="Product tips"
        description="Occasional notes about new components."
        checked={settings.tips}
        onChange={(checked) => setSettings((current) => ({ ...current, tips: checked }))}
      />
    </div>
  )
}

export default SwitchFieldPreview
