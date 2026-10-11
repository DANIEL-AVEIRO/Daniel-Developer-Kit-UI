import { Component, useEffect, useState } from 'react'
import { useSearchParams, useParams } from 'react-router-dom'
import { playgroundFor } from '../playground/catalog.js'
import { getEntry } from '../registry/registryIndex.js'

const PreviewPage = () => {
  const { kind, slug } = useParams()
  const [params] = useSearchParams()
  const theme = params.get('theme') === 'dark' ? 'dark' : 'light'
  const entry = getEntry(kind, slug)
  const playground = playgroundFor(entry)
  const [Preview, setPreview] = useState(null)
  const [failed, setFailed] = useState(false)
  const [playgroundValues, setPlaygroundValues] = useState(playground?.defaults ?? null)
  const [PlaygroundView, setPlaygroundView] = useState(null)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  useEffect(() => {
    if (!entry) return undefined
    let cancelled = false
    entry
      .loadPreview()
      .then((ComponentPreview) => {
        if (!cancelled) {
          setFailed(false)
          setPreview(() => ComponentPreview)
        }
      })
      .catch(() => {
        if (!cancelled) {
          setPreview(null)
          setFailed(true)
        }
      })
    return () => {
      cancelled = true
    }
  }, [entry])

  useEffect(() => {
    if (!playground) return undefined
    let cancelled = false
    import('../playground/RenderPlayground.jsx')
      .then((mod) => {
        if (!cancelled) setPlaygroundView(() => mod.PlaygroundPreview)
      })
      .catch(() => {
        if (!cancelled) setPlaygroundView(null)
      })
    return () => {
      cancelled = true
    }
  }, [playground])

  useEffect(() => {
    if (!playground) return undefined
    function onMessage(event) {
      if (event.origin !== window.location.origin) return
      if (event.data?.type !== 'devkit-playground') return
      if (event.data.slug !== slug) return
      if (!event.data.values || typeof event.data.values !== 'object') return
      setPlaygroundValues(event.data.values)
    }
    window.addEventListener('message', onMessage)
    window.parent.postMessage({ type: 'devkit-playground-ready', slug }, window.location.origin)
    return () => window.removeEventListener('message', onMessage)
  }, [playground, slug])

  useEffect(() => {
    const root = document.getElementById('preview-root')
    if (!root || !slug) return undefined
    const report = () => {
      window.parent.postMessage(
        { type: 'devkit-preview-height', slug, height: root.scrollHeight },
        window.location.origin,
      )
    }
    const observer = new ResizeObserver(report)
    observer.observe(root)
    report()
    return () => observer.disconnect()
  }, [slug, Preview])

  const padded = entry?.kind === 'component'

  return (
    <div id="preview-root" className={padded ? 'bg-canvas p-6 text-ink dark:bg-canvas-dark dark:text-stone-100' : 'bg-canvas text-ink dark:bg-canvas-dark dark:text-stone-100'}>
      {!entry || failed ? (
        <p className="p-6 text-sm">This preview is unavailable.</p>
      ) : Preview ? (
        <PreviewErrorBoundary key={`${kind}-${slug}`}>
          {playground && playgroundValues && PlaygroundView ? (
            <div className="mb-8 border-b border-dashed border-stone-300 pb-6 dark:border-stone-700">
              <p className="mb-3 text-xs font-semibold tracking-wide text-stone-500 uppercase">Configured</p>
              <PlaygroundView slug={slug} values={playgroundValues} />
            </div>
          ) : null}
          {playground ? <p className="mb-3 text-xs font-semibold tracking-wide text-stone-500 uppercase">Examples</p> : null}
          <Preview />
        </PreviewErrorBoundary>
      ) : (
        <p className="p-6 text-sm text-stone-500">Loading preview…</p>
      )}
    </div>
  )
}

class PreviewErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { failed: false }
  }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  render() {
    if (this.state.failed) {
      return <p className="p-6 text-sm text-red-700">The preview failed to render.</p>
    }
    return this.props.children
  }
}

export default PreviewPage
