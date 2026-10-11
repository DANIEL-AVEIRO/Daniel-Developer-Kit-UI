import Spinner from './Spinner.jsx'

const SpinnerPreview = () => {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <Spinner size="sm" label="Saving" />
      <Spinner label="Loading courses" />
      <Spinner size="lg" label="Preparing preview" />
    </div>
  )
}

export default SpinnerPreview
