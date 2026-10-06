import { Link } from 'react-router-dom'
import { unsplashPhotos } from '../data/unsplashPhotos'

function BasicHome() {
  return (
    <div style={styles.container} className="schoolweb-page">
      <section style={styles.hero} className="schoolweb-hero">
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Welcome to Greenfield International School</h1>
          <p style={styles.heroSubtitle}>
            Empowering young minds for a brighter tomorrow since 1985
          </p>
          <div style={styles.heroButtons}>
            <Link className="schoolweb-button" to="/basic/about" style={styles.primaryBtn}>Learn About Us</Link>
            <Link className="schoolweb-button" to="/basic/contact" style={styles.secondaryBtn}>Contact Us</Link>
          </div>
        </div>
        <div style={styles.heroImage}>
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.55rem' }}>
            <img src={unsplashPhotos.campus.src} onError={event => { event.currentTarget.onerror = null; event.currentTarget.src = '/illustrations/campus.svg' }} alt="Students outside a school building" width="520" height="360" fetchPriority="high" style={{ width: '100%', maxWidth: '520px', height: 'auto', borderRadius: '16px' }} />
            <a className="schoolweb-photo-credit" href={unsplashPhotos.campus.page} target="_blank" rel="noreferrer">Photo by {unsplashPhotos.campus.photographer} on Unsplash</a>
          </div>
        </div>
      </section>

      <section style={styles.aboutPreview} className="schoolweb-feature-panel">
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle}>About Our School</h2>
          <p style={styles.paragraph}>
            Greenfield International School is a private K-12 institution committed to
            academic excellence, character development, and inclusive learning.
          </p>
          <Link to="/basic/about" style={styles.learnMore}>Learn More About Us →</Link>
        </div>
      </section>

      <section style={styles.cta} className="schoolweb-cta">
        <h2 style={styles.ctaTitle}>Ready to Join Greenfield?</h2>
        <p style={styles.ctaText}>
          Admissions are now open for the upcoming academic year.
        </p>
        <Link className="schoolweb-button" to="/basic/contact" style={styles.ctaButton}>Get in Touch</Link>
      </section>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem'
  },
  hero: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'linear-gradient(135deg, #065f46 0%, #059669 100%)',
    color: '#fff',
    padding: '5rem 2rem',
    borderRadius: '12px',
    marginBottom: '3rem',
    gap: '2rem',
    flexWrap: 'wrap'
  },
  heroContent: {
    flex: '1 1 400px'
  },
  heroTitle: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    fontWeight: 700
  },
  heroSubtitle: {
    fontSize: '1.25rem',
    opacity: 0.9,
    marginBottom: '2rem'
  },
  heroButtons: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  },
  primaryBtn: {
    padding: '0.75rem 1.5rem',
    background: '#fbbf24',
    color: '#065f46',
    borderRadius: '8px',
    fontWeight: 'bold',
    textDecoration: 'none'
  },
  secondaryBtn: {
    padding: '0.75rem 1.5rem',
    border: '2px solid #fff',
    color: '#fff',
    borderRadius: '8px',
    fontWeight: 'bold',
    textDecoration: 'none'
  },
  heroImage: {
    flex: '1 1 300px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  heroPlaceholder: {
    fontSize: '6rem',
    background: 'rgba(255,255,255,0.1)',
    padding: '2rem',
    borderRadius: '12px',
    border: '2px solid rgba(255,255,255,0.3)'
  },
  heroIcon: {},
  aboutPreview: {
    background: '#fff',
    padding: '3rem',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    marginBottom: '3rem'
  },
  sectionContent: {
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center'
  },
  sectionTitle: {
    fontSize: '2rem',
    color: '#065f46',
    marginBottom: '1rem',
    textAlign: 'center'
  },
  paragraph: {
    fontSize: '1.1rem',
    color: '#475569',
    lineHeight: 1.8,
    marginBottom: '1.5rem'
  },
  learnMore: {
    color: '#059669',
    fontWeight: 'bold',
    textDecoration: 'none'
  },
  cta: {
    background: '#065f46',
    color: '#fff',
    padding: '3rem 2rem',
    borderRadius: '12px',
    textAlign: 'center'
  },
  ctaTitle: {
    fontSize: '2rem',
    marginBottom: '1rem'
  },
  ctaText: {
    fontSize: '1.1rem',
    opacity: 0.9,
    marginBottom: '2rem'
  },
  ctaButton: {
    display: 'inline-block',
    padding: '0.85rem 2rem',
    background: '#fbbf24',
    color: '#065f46',
    borderRadius: '8px',
    fontWeight: 'bold',
    textDecoration: 'none'
  }
}

export default BasicHome
