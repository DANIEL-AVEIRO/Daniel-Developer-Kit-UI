import TextArea from './TextArea.jsx'

const TextAreaPreview = () => {
  return (
    <div className="max-w-lg space-y-4">
      <TextArea id="project-brief" label="Project brief" placeholder="What should the page help a student do?" hint="A few sentences is enough." />
      <TextArea id="project-note" label="Review note" defaultValue="Too short" error="Add a little more detail before sending." />
    </div>
  )
}

export default TextAreaPreview
