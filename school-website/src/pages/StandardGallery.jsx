import { useState } from 'react'
import { Link } from 'react-router-dom'
import { unsplashPhotos } from '../data/unsplashPhotos'

const categories = ['All', 'Events', 'Facilities', 'Students', 'Sports', 'Arts']

const gallery = [
  { category: 'Events', title: 'Graduation Ceremony', image: "/illustrations/community-day.svg", photo: 'campus', color: '#fbbf24' },
  { category: 'Facilities', title: 'New Science Laboratory', image: "/illustrations/science-lab.svg", photo: 'classroom', color: '#2563eb' },
  { category: 'Students', title: 'Classroom Activities', image: "/illustrations/classroom.svg", photo: 'classroom', color: '#34d399' },
  { category: 'Sports', title: 'Football Practice', image: "/illustrations/sports-field.svg", photo: 'field', color: '#ef4444' },
  { category: 'Arts', title: 'Art Exhibition 2026', image: "/illustrations/arts-room.svg", photo: 'classroom', color: '#a855f7' },
  { category: 'Events', title: 'Parents’ Day Celebration', image: "/illustrations/community-day.svg", photo: 'campus', color: '#fbbf24' },
  { category: 'Facilities', title: 'School Library', image: "/illustrations/library.svg", photo: 'library', color: '#2563eb' },
  { category: 'Students', title: 'Computer Lab Session', image: "/illustrations/classroom.svg", photo: 'classroom', color: '#34d399' },
  { category: 'Sports', title: 'Basketball Match', image: "/illustrations/sports-field.svg", photo: 'basketball', color: '#ef4444' },
  { category: 'Arts', title: 'Drama Club Performance', image: "/illustrations/arts-room.svg", photo: 'classroom', color: '#a855f7' },
  { category: 'Events', title: 'STEM Fair', image: "/illustrations/science-lab.svg", photo: 'classroom', color: '#fbbf24' },
  { category: 'Facilities', title: 'Playground', image: "/illustrations/sports-field.svg", photo: 'field', color: '#2563eb' }
]

function StandardGallery() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? gallery : gallery.filter(item => item.category === active)

  return (
    <div style={styles.container} className="schoolweb-page">
      <section style={styles.pageHeader} className="schoolweb-page-header">
        <h1 style={styles.pageTitle}>Photo Gallery</h1>
        <p style={styles.pageSubtitle}>A glimpse into life at Greenfield International School</p>
      </section>

      <section style={styles.filters}>
        <div style={styles.filterButtons}>
          {categories.map(cat => (
            <button
              key={cat}
              type="button"
              aria-pressed={active === cat}
              className="schoolweb-filter-button"
              onClick={() => setActive(cat)}
              style={{
                ...styles.filterBtn,
                ...(active === cat ? styles.filterBtnActive : {})
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section style={styles.grid} className="schoolweb-gallery-grid">
        {filtered.map(item => (
          <div key={item.title} style={styles.galleryCard}>
            <div style={{ ...styles.thumbnail, background: `linear-gradient(135deg, ${item.color}40, ${item.color}20)` }}>
              <img src={unsplashPhotos[item.photo].src} onError={event => { event.currentTarget.onerror = null; event.currentTarget.src = item.image }} alt={item.title} loading="lazy" decoding="async" width="640" height="420" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <p style={styles.caption}>{item.title}</p>
            <a className="schoolweb-photo-credit" href={unsplashPhotos[item.photo].page} target="_blank" rel="noreferrer">Photo by {unsplashPhotos[item.photo].photographer} on Unsplash</a>
            <span style={styles.categoryTag}>{item.category}</span>
          </div>
        ))}
      </section>

      <div style={styles.backNav}>
        <Link to="/standard" style={styles.backLink}>← Back to Home</Link>
      </div>
    </div>
  )
}

const styles = {
  container: { maxWidth: '1100px', margin: '0 auto', padding: '0 1rem' },
  pageHeader: { textAlign: 'center', padding: '3rem 0 2rem' },
  pageTitle: { fontSize: '2.5rem', color: '#1e3a5f', marginBottom: '0.5rem' },
  pageSubtitle: { fontSize: '1.15rem', color: '#64748b' },
  filters: { marginBottom: '2rem', textAlign: 'center' },
  filterButtons: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' },
  filterBtn: {
    padding: '0.5rem 1.25rem',
    border: '2px solid #e2e8f0',
    background: '#fff',
    borderRadius: '2rem',
    fontSize: '0.9rem',
    cursor: 'pointer',
    color: '#475569'
  },
  filterBtnActive: {
    background: '#2563eb',
    border: '2px solid #2563eb',
    color: '#fff'
  },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '2rem' },
  galleryCard: { background: '#fff', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 6px rgba(0,0,0,0.06)' },
  thumbnail: { height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  placeholderIcon: { fontSize: '2.5rem' },
  caption: { padding: '0.75rem 0.75rem 0.25rem', fontSize: '0.92rem', color: '#334155', textAlign: 'center' },
  categoryTag: { display: 'block', textAlign: 'center', padding: '0 0.75rem 0.75rem', fontSize: '0.78rem', color: '#64748b' },
  backNav: { textAlign: 'center', marginTop: '1rem' },
  backLink: { color: '#2563eb', textDecoration: 'none', fontWeight: 500 }
}

export default StandardGallery
