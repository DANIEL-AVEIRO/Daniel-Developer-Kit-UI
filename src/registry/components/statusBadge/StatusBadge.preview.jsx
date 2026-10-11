import StatusBadge from './StatusBadge.jsx'

const statuses = ['online', 'away', 'busy', 'offline', 'pending', 'paid', 'failed']

const StatusBadgePreview = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {statuses.map((status) => (
        <StatusBadge key={status} status={status} />
      ))}
    </div>
  )
}

export default StatusBadgePreview
