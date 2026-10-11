import StatCard from './StatCard.jsx'

const stats = [
  { label: 'Active students', value: '128', change: '6.2%', direction: 'up', hint: 'vs last week' },
  { label: 'Submissions', value: '86', change: '3.1%', direction: 'up', hint: 'vs last week' },
  { label: 'Needs review', value: '14', change: '2.4%', direction: 'down', hint: 'vs last week' },
]

const StatCardPreview = () => {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
  )
}

export default StatCardPreview
