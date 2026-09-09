import { Link } from 'react-router-dom'

function Standard() {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Standard Package</h1>
        <p style={styles.tagline}>&quot;Interactive School Site&quot;</p>
        <p style={styles.description}>
          For schools wanting a manageable, content-rich site they can update themselves.
        </p>
      </div>

      <div style={styles.content}>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Everything in Starter, plus:</h2>
          <ul style={styles.checklist}>
            {[
              'Up to 10-12 pages (adds: Academics, Staff Directory, News/Blog, Events Calendar, Downloads/Resources)',
              'Content Management System (CMS) so staff can edit text/images',
              'Photo gallery with categories (events, facilities, activities)',
              'News/announcements section',
              'Basic SEO + Google Business/Maps integration',
              '2 rounds of revisions',
              '1 training session for staff on using the CMS',
              '3 months of free minor support (bug fixes, small text edits)'
            ].map((item, i) => (
              <li key={i} style={styles.checkItem}>✓ {item}</li>
            ))}
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Not Included</h2>
          <div style={styles.alertBox}>
            <p>Custom application features (e.g. online admissions portal, fee payment), multi-language support</p>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Turnaround Time</h2>
          <p style={styles.infoBox}>~3-4 weeks</p>
        </section>

        <div style={styles.actionBox}>
          <Link to="/standard" style={styles.backLink}>← Back to Standard demo site</Link>
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

export default Standard
