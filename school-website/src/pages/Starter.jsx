import { Link } from 'react-router-dom'

function Starter() {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Starter Package</h1>
        <p style={styles.tagline}>&quot;Basic Presence&quot;</p>
        <p style={styles.description}>
          For small schools that just need a professional online presence.
        </p>
      </div>

      <div style={styles.content}>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>What&apos;s Included</h2>
          <ul style={styles.checklist}>
            {[
              'Up to 5 pages (Home, About, Admissions, Contact, Gallery)',
              'Mobile-responsive design',
              'School logo and branding integration',
              'Contact form',
              'Basic SEO setup (titles, meta descriptions)',
              '1 round of revisions',
              'Domain + hosting setup assistance (client pays hosting/domain fees)'
            ].map((item, i) => (
              <li key={i} style={styles.checkItem}>✓ {item}</li>
            ))}
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Not Included</h2>
          <div style={styles.alertBox}>
            <p>CMS access, blog, custom features, ongoing maintenance</p>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Turnaround Time</h2>
          <p style={styles.infoBox}>~1-2 weeks</p>
        </section>

        <div style={styles.actionBox}>
          <Link to="/basic" style={styles.backLink}>← Back to Basic demo site</Link>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem 1rem'
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
    paddingBottom: '2rem',
    borderBottom: '2px solid #e2e8f0'
  },
  title: {
    fontSize: '2.5rem',
    color: '#2563eb',
    marginBottom: '0.5rem'
  },
  tagline: {
    fontSize: '1.5rem',
    fontStyle: 'italic',
    color: '#64748b',
    marginBottom: '1rem'
  },
  description: {
    color: '#475569',
    fontSize: '1.1rem'
  },
  content: {
    background: '#fff',
    borderRadius: '8px',
    padding: '2rem',
    boxShadow: '0 4px 6px rgba(0,0,0,0.07)'
  },
  section: {
    marginBottom: '2rem'
  },
  sectionTitle: {
    fontSize: '1.5rem',
    color: '#1e293b',
    marginBottom: '1rem'
  },
  checklist: {
    listStyle: 'none'
  },
  checkItem: {
    padding: '0.5rem 0',
    borderBottom: '1px solid #f1f5f9'
  },
  alertBox: {
    background: '#fef3c7',
    border: '1px solid #fcd34d',
    padding: '1rem',
    borderRadius: '6px'
  },
  infoBox: {
    background: '#dbeafe',
    padding: '1rem',
    borderRadius: '6px',
    textAlign: 'center',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#1e40af'
  },
  actionBox: {
    marginTop: '2rem',
    textAlign: 'center'
  },
  backLink: {
    color: '#2563eb',
    fontSize: '1rem'
  }
}

export default Starter
