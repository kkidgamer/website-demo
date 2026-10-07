import { useEffect, useState } from 'react'
import { CMS_API_BASE } from '../utils/cmsApi'

function AnnouncementBanner() {
  const [announcements, setAnnouncements] = useState([])

  useEffect(() => {
    if (!CMS_API_BASE) return undefined
    const controller = new AbortController()
    fetch(`${CMS_API_BASE}/api/announcements/`, { signal: controller.signal })
      .then(response => response.ok ? response.json() : Promise.reject(new Error('Could not load announcements')))
      .then(data => setAnnouncements(data.announcements))
      .catch(error => {
        if (error.name !== 'AbortError') console.error('Could not load CMS announcements:', error)
      })
    return () => controller.abort()
  }, [])

  if (!announcements.length) return null

  return (
    <aside className="cms-announcements" aria-label="School announcements">
      <span className="cms-announcements-label">School notice</span>
      <div className="cms-announcements-list">
        {announcements.map(item => (
          <div className="cms-announcement" key={item.id}>
            <div><strong>{item.title}</strong><p>{item.message}</p></div>
            {item.link_url && <a href={item.link_url}>{item.link_label || 'More details'} →</a>}
          </div>
        ))}
      </div>
    </aside>
  )
}

export default AnnouncementBanner
