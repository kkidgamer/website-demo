import { Link } from 'react-router-dom'

const gallery = [
  { title: 'School Front Entrance', color: '#059669' },
  { title: 'Classroom', color: '#34d399' },
  { title: 'Playground', color: '#fbbf24' },
  { title: 'School Assembly', color: '#ef4444' },
  { title: 'Library', color: '#a855f7' },
  { title: 'Sports Field', color: '#059669' }
]

function BasicGallery() {
  return (
    <div style={styles.container}>
      <section style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>Photo Gallery</h1>
        <p style={styles.pageSubtitle}>A glimpse into life at Greenfield International School</p>
      </section>

      <section style={styles.grid}>
        {gallery.map(item => (
          <div key={item.title} style={styles.galleryCard}>
            <div style={{ ...styles.thumbnail, background: `linear-gradient(135deg, ${item.color}40, ${item.color}20)` }}>
              <span style={{ ...styles.placeholderIcon, color: item.color }}>📷</span>
            </div>
            <p style={styles.caption}>{item.title}</p>
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
