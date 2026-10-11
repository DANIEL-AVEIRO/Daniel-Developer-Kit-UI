import TextField from './TextField.jsx'

const TextFieldPreview = () => {
  return (
    <form className="max-w-sm space-y-4" onSubmit={(event) => event.preventDefault()}>
      <TextField id="course-name" label="Course name" placeholder="Interface systems" hint="Shown on the student record." />
      <TextField id="course-code" label="Course code" defaultValue="CS" error="Use at least four characters." />
      <TextField id="course-room" label="Room" placeholder="Disabled example" disabled />
    </form>
  )
}

export default TextFieldPreview
