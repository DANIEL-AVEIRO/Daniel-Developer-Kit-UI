import { useEffect } from 'react'

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · DevKit UI` : 'DevKit UI'
  }, [title])
}
