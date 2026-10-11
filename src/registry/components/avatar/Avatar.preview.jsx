import Avatar from './Avatar.jsx'

const portrait = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><rect width="80" height="80" fill="#115e59"/><circle cx="40" cy="32" r="12" fill="#ccfbf1"/><path d="M18 70c4-14 12-20 22-20s18 6 22 20" fill="#ccfbf1"/></svg>')}`

const AvatarPreview = () => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Avatar name="Amina Shah" size="sm" />
      <Avatar name="Leo Martins" src={portrait} />
      <Avatar name="Noah Adeyemi" size="lg" />
      <Avatar name="Broken image" src="/missing-avatar.png" />
    </div>
  )
}

export default AvatarPreview
