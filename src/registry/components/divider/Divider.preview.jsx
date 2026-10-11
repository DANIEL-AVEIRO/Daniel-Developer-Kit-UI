import Divider from './Divider.jsx'

const DividerPreview = () => {
  return (
    <div className="max-w-lg space-y-4 text-sm text-stone-600 dark:text-stone-300">
      <p>Section above the rule.</p>
      <Divider />
      <p>Section below the rule.</p>
      <Divider label="Or continue with" />
    </div>
  )
}

export default DividerPreview
