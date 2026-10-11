import Badge from './Badge.jsx'

const BadgePreview = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge>Draft</Badge>
      <Badge tone="info">In review</Badge>
      <Badge tone="success">Published</Badge>
      <Badge tone="warning">Scheduled</Badge>
      <Badge tone="danger">Blocked</Badge>
    </div>
  )
}

export default BadgePreview
