import { useEffect, useState } from 'react'

function CmsPage({ slug, fallback }) {
  const apiBase = import.meta.env.VITE_CMS_API_URL?.replace(/\/$/, '')
  const [result, setResult] = useState({ slug: null, page: null })

  useEffect(() => {
    if (!apiBase) return undefined

    const controller = new AbortController()
    fetch(`${apiBase}/api/pages/${encodeURIComponent(slug)}/`, { signal: controller.signal })
      .then(response => response.ok ? response.json() : null)
      .then(data => setResult({ slug, page: data }))
      .catch(error => {
        if (error.name !== 'AbortError') {
          console.error('Could not load CMS page:', error)
          setResult({ slug, page: null })
        }
      })

    return () => controller.abort()
  }, [apiBase, slug])

  const page = result.slug === slug ? result.page : null
  if (!page) return fallback

  return (
    <article className="schoolweb-page cms-page">
      <header className="schoolweb-page-header">
        <h1>{page.title}</h1>
        {page.summary && <p>{page.summary}</p>}
      </header>
      <div className="cms-page-content">
        {page.blocks.map((block, index) => {
          if (block.type === 'heading') return <h2 key={index}>{block.content}</h2>
          if (block.type === 'text') return <p key={index}>{block.content}</p>
          if (block.type === 'quote') return <blockquote key={index}>{block.content}</blockquote>
          if (block.type === 'image' && block.image_url) {
            return <figure key={index}><img src={block.image_url} alt={block.image_alt} /></figure>
          }
          if (block.type === 'button' && block.link_url) {
            return <p key={index}><a className="schoolweb-button" href={block.link_url}>{block.link_label || 'Learn more'}</a></p>
          }
          return null
        })}
      </div>
    </article>
  )
}

export default CmsPage
