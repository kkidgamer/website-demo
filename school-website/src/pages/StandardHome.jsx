import { Link } from 'react-router-dom'

function StandardHome() {
  return (
    <div style={styles.container}>
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Welcome to Greenfield International School</h1>
          <p style={styles.heroSubtitle}>
            Empowering young minds for a brighter tomorrow since 1985
          </p>
          <div style={styles.heroButtons}>
            <Link to="/standard/academics" style={styles.primaryBtn}>Explore Academics</Link>
            <Link to="/standard/contact" style={styles.secondaryBtn}>Contact Us</Link>
          </div>
        </div>
        <div style={styles.heroImage}>
          <div style={styles.heroPlaceholder}>
            <span style={styles.heroIcon}>🏫</span>
          </div>
        </div>
      </section>

      <section style={styles.aboutPreview}>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle}>About Our School</h2>
          <p style={styles.paragraph}>
            Greenfield International School is a private K-12 institution committed to
            academic excellence, character development, and inclusive learning.
            We offer a well-rounded curriculum, modern facilities, and a supportive
            community that prepares students for success in life.
          </p>
          <Link to="/about" style={styles.learnMore}>Learn More About Us →</Link>
        </div>
      </section>

      <section style={styles.highlights}>
        <h2 style={styles.sectionTitle}>Why Choose Us</h2>
        <div style={styles.highlightGrid}>
          {[
            {
              icon: '📚',
              title: 'Strong Academics',
              desc: 'Accredited curriculum with experienced educators and modern teaching methods.'
            },
            {
              icon: '🔬',
              title: 'State-of-the-Art Facilities',
              desc: 'Science labs, computer labs, sports fields, library, and a modern auditorium.'
            },
            {
              icon: '🎨',
              title: 'Rich Extracurriculars',
              desc: 'Sports, music, drama, debate, robotics, and community service programs.'
            },
            {
              icon: '👨‍👩‍👧‍👦',
              title: 'Active Community',
              desc: 'A supportive parent-teacher association and regular community events.'
            }
          ].map(item => (
            <div key={item.title} style={styles.highlightCard}>
              <div style={styles.highlightIcon}>{item.icon}</div>
              <h3 style={styles.highlightTitle}>{item.title}</h3>
              <p style={styles.highlightDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.cta}>
        <h2 style={styles.ctaTitle}>Ready to Join Greenfield?</h2>
        <p style={styles.ctaText}>
          Admissions are now open for the upcoming academic year. Schedule a campus tour today.
        </p>
        <Link to="/standard/contact" style={styles.ctaButton}>Apply for Admission</Link>
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
    background: 'linear-gradient(135deg, #1e3a5f 0%, #2a5298 100%)',
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
    color: '#1e3a5f',
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
    color: '#1e3a5f',
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
    color: '#2563eb',
    fontWeight: 'bold',
    textDecoration: 'none'
  },
  highlights: {
    marginBottom: '3rem'
  },
  highlightGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem'
  },
  highlightCard: {
    background: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    textAlign: 'center'
  },
  highlightIcon: {
    fontSize: '3rem',
    marginBottom: '1rem'
  },
  highlightTitle: {
    fontSize: '1.25rem',
    color: '#1e3a5f',
    marginBottom: '0.5rem'
  },
  highlightDesc: {
    color: '#475569',
    fontSize: '0.95rem',
    lineHeight: 1.6
  },
  cta: {
    background: '#1e3a5f',
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
    color: '#1e3a5f',
    borderRadius: '8px',
    fontWeight: 'bold',
    textDecoration: 'none'
  }
}

export default StandardHome
