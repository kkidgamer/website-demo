import { Link } from 'react-router-dom'
import { unsplashPhotos } from '../data/unsplashPhotos'

const gallery = [
  { title: 'School Front Entrance', image: "/illustrations/campus.svg", photo: 'campus', color: '#059669' },
  { title: 'Classroom', image: "/illustrations/classroom.svg", photo: 'classroom', color: '#34d399' },
  { title: 'Playground', image: "/illustrations/sports-field.svg", photo: 'field', color: '#fbbf24' },
  { title: 'School Assembly', image: "/illustrations/community-day.svg", photo: 'campus', color: '#ef4444' },
  { title: 'Library', image: "/illustrations/library.svg", photo: 'library', color: '#a855f7' },
  { title: 'Sports Field', image: "/illustrations/sports-field.svg", photo: 'basketball', color: '#059669' }
]

function BasicGallery() {
  return (
    <div style={styles.container} className="schoolweb-page">
      <section style={styles.pageHeader} className="schoolweb-page-header">
        <h1 style={styles.pageTitle}>Photo Gallery</h1>
        <p style={styles.pageSubtitle}>A glimpse into life at Greenfield International School</p>
      </section>

      <section style={styles.grid}>
        {gallery.map(item => (
          <div key={item.title} style={styles.galleryCard}>
            <div style={{ ...styles.thumbnail, background: `linear-gradient(135deg, ${item.color}40, ${item.color}20)` }}>
              <img src={unsplashPhotos[item.photo].src} onError={event => { event.currentTarget.onerror = null; event.currentTarget.src = item.image }} alt={item.title} loading="lazy" decoding="async" width="640" height="420" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <p style={styles.caption}>{item.title}</p>
            <a className="schoolweb-photo-credit" href={unsplashPhotos[item.photo].page} target="_blank" rel="noreferrer">Photo by {unsplashPhotos[item.photo].photographer} on Unsplash</a>
          </div>
        ))}
      </section>

      <div style={styles.backNav}>
        <Link to="/basic" style={styles.backLink}>← Back to Home</Link>
      </div>
    </div>
  )
}

const styles = {
  container: { maxWidth: '900px', margin: '0 auto', padding: '0 1rem' },
  pageHeader: { textAlign: 'center', padding: '3rem 0 2rem' },
  pageTitle: { fontSize: '2.5rem', color: '#065f46', marginBottom: '0.5rem' },
  pageSubtitle: { fontSize: '1.15rem', color: '#64748b' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.25rem', marginBottom: '2rem' },
  galleryCard: { background: '#fff', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 6px rgba(0,0,0,0.06)' },
  thumbnail: { height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  placeholderIcon: { fontSize: '2.5rem' },
  caption: { padding: '0.75rem', fontSize: '0.92rem', color: '#334155', textAlign: 'center' },
  backNav: { textAlign: 'center', marginTop: '1rem' },
  backLink: { color: '#059669', textDecoration: 'none', fontWeight: 500 }
}

export default BasicGallery
