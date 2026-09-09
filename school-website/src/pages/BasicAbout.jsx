import { Link } from 'react-router-dom'

function BasicAbout() {
  return (
    <div style={styles.container}>
      <section style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>About Us</h1>
        <p style={styles.pageSubtitle}>Our story, mission, and vision</p>
      </section>

      <section style={styles.intro}>
        <div style={styles.introContent}>
          <p style={styles.lead}>
            Greenfield International School was founded in 1985 with a simple belief:
            every child deserves access to a nurturing, world-class education. Over the
            decades, we have grown from a small local school into a vibrant community of
            learners representing diverse backgrounds.
          </p>
          <p style={styles.lead}>
            Our holistic approach goes beyond textbooks — we shape character, curiosity,
            and confidence in every student who walks through our doors.
          </p>
        </div>
      </section>

      <section style={styles.pillars}>
        <h2 style={styles.sectionTitle}>Our Core Values</h2>
        <div style={styles.pillarGrid}>
          {[
            { icon: '🎓', title: 'Academic Excellence', desc: 'We maintain high standards through dedicated teaching and a rigorous curriculum.' },
            { icon: '🤝', title: 'Integrity & Respect', desc: 'We foster honesty, empathy, and mutual respect across our school community.' },
            { icon: '🌍', title: 'Global Citizenship', desc: 'We prepare students to understand and contribute to an interconnected world.' },
            { icon: '💪', title: 'Resilience & Growth', desc: 'We encourage a growth mindset — learning from challenges and striving to improve.' }
          ].map(pillar => (
            <div key={pillar.title} style={styles.pillarCard}>
              <div style={styles.pillarIcon}>{pillar.icon}</div>
              <h3 style={styles.pillarTitle}>{pillar.title}</h3>
              <p style={styles.pillarDesc}>{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.mission}>
        <h2 style={styles.sectionTitle}>Mission & Vision</h2>
        <div style={styles.missionGrid}>
          <div style={styles.missionCard}>
            <h3 style={styles.missionLabel}>Our Mission</h3>
            <p style={styles.missionText}>
              To provide a safe, inclusive, and stimulating learning environment that
              equips every student with the knowledge, skills, and values needed to
              thrive in school, career, and life.
            </p>
          </div>
          <div style={styles.missionCard}>
            <h3 style={styles.missionLabel}>Our Vision</h3>
            <p style={styles.missionText}>
              To be a leading school known for producing thoughtful, capable, and
              compassionate citizens who make a positive difference in their communities.
            </p>
          </div>
        </div>
      </section>

      <div style={styles.backNav}>
        <Link to="/basic" style={styles.backLink}>← Back to Home</Link>
      </div>
    </div>
  )
}

const styles = {
  container: { maxWidth: '1000px', margin: '0 auto', padding: '0 1rem' },
  pageHeader: { textAlign: 'center', padding: '3rem 0 2rem' },
  pageTitle: { fontSize: '2.5rem', color: '#065f46', marginBottom: '0.5rem' },
  pageSubtitle: { fontSize: '1.15rem', color: '#64748b' },
  intro: { background: '#fff', padding: '2.5rem', borderRadius: '12px', marginBottom: '2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' },
  introContent: { maxWidth: '800px', margin: '0 auto' },
  lead: { fontSize: '1.1rem', lineHeight: 1.8, color: '#334155', marginBottom: '1rem' },
  pillars: { marginBottom: '2rem' },
  sectionTitle: { fontSize: '1.75rem', color: '#065f46', textAlign: 'center', marginBottom: '1.5rem' },
  pillarGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' },
  pillarCard: { background: '#fff', padding: '1.5rem', borderRadius: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.06)' },
  pillarIcon: { fontSize: '2.5rem', marginBottom: '0.75rem' },
  pillarTitle: { fontSize: '1.15rem', color: '#065f46', marginBottom: '0.5rem' },
  pillarDesc: { fontSize: '0.95rem', color: '#475569', lineHeight: 1.6 },
  mission: { marginBottom: '2rem' },
  missionGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' },
  missionCard: { background: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' },
  missionLabel: { fontSize: '1.25rem', color: '#059669', marginBottom: '1rem' },
  missionText: { fontSize: '1rem', lineHeight: 1.7, color: '#475569' },
  backNav: { textAlign: 'center', marginTop: '1rem' },
  backLink: { color: '#059669', textDecoration: 'none', fontWeight: 500 }
}

export default BasicAbout
