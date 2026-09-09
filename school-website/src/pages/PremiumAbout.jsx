import { Link } from 'react-router-dom'

function PremiumAbout() {
  return (
    <div style={styles.container}>
      <section style={styles.pageHeader}>
        <span style={styles.badge}>⭐ Premium</span>
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
            { icon: '🎓', title: 'Academic Excellence', desc: 'We maintain high standards through dedicated teaching and a rigorous, updated curriculum.' },
            { icon: '🤝', title: 'Integrity & Respect', desc: 'We foster honesty, empathy, and mutual respect across our entire school community.' },
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

      <section style={styles.history}>
        <h2 style={styles.sectionTitle}>Our Journey</h2>
        <div style={styles.timeline}>
          {[
            { year: '1985', event: 'School founded with 80 students and 5 teachers.' },
            { year: '1995', event: 'Added secondary classes and a science laboratory.' },
            { year: '2005', event: 'New campus building completed with library and sports field.' },
            { year: '2015', event: 'Introduced computer lab and digital learning tools.' },
            { year: '2020', event: 'Launched online learning platform and virtual classrooms.' },
            { year: '2023', event: 'Opened new STEM wing with robotics and innovation lab.' },
            { year: '2025', event: 'Over 800 students across K-12, recognized for academic excellence.' }
          ].map(item => (
            <div key={item.year} style={styles.timelineItem}>
              <div style={styles.timelineYear}>{item.year}</div>
              <div style={styles.timelineDot} />
              <p style={styles.timelineEvent}>{item.event}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.facilities}>
        <h2 style={styles.sectionTitle}>Our Facilities</h2>
        <div style={styles.facilityGrid}>
          {[
            { icon: '🔬', name: 'Science Labs', desc: 'Fully equipped biology, chemistry, and physics labs' },
            { icon: '💻', name: 'Computer Lab', desc: 'Modern workstations with high-speed internet' },
            { icon: '📚', name: 'Library', desc: 'Over 10,000 books and digital learning resources' },
            { icon: '⚽', name: 'Sports Complex', desc: 'Football field, basketball court, and athletics track' },
            { icon: '🎭', name: 'Auditorium', desc: '500-seat auditorium for performances and events' },
            { icon: '🎨', name: 'Art Studio', desc: 'Dedicated space for visual arts and creative projects' }
          ].map(facility => (
            <div key={facility.name} style={styles.facilityCard}>
              <div style={styles.facilityIcon}>{facility.icon}</div>
              <h3 style={styles.facilityName}>{facility.name}</h3>
              <p style={styles.facilityDesc}>{facility.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div style={styles.backNav}>
        <Link to="/premium" style={styles.backLink}>← Back to Home</Link>
      </div>
    </div>
  )
}

const styles = {
  container: { maxWidth: '1000px', margin: '0 auto', padding: '0 1rem' },
  pageHeader: { textAlign: 'center', padding: '3rem 0 2rem' },
  badge: { display: 'inline-block', background: '#fbbf24', color: '#1e1b4b', padding: '0.25rem 0.7rem', borderRadius: '2rem', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '0.75rem' },
  pageTitle: { fontSize: '2.5rem', color: '#1e1b4b', marginBottom: '0.5rem' },
  pageSubtitle: { fontSize: '1.15rem', color: '#64748b' },
  intro: { background: '#fff', padding: '2.5rem', borderRadius: '12px', marginBottom: '2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' },
  introContent: { maxWidth: '800px', margin: '0 auto' },
  lead: { fontSize: '1.1rem', lineHeight: 1.8, color: '#334155', marginBottom: '1rem' },
  pillars: { marginBottom: '2rem' },
  sectionTitle: { fontSize: '1.75rem', color: '#1e1b4b', textAlign: 'center', marginBottom: '1.5rem' },
  pillarGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' },
  pillarCard: { background: '#fff', padding: '1.5rem', borderRadius: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.06)' },
  pillarIcon: { fontSize: '2.5rem', marginBottom: '0.75rem' },
  pillarTitle: { fontSize: '1.15rem', color: '#1e1b4b', marginBottom: '0.5rem' },
  pillarDesc: { fontSize: '0.95rem', color: '#475569', lineHeight: 1.6 },
  mission: { marginBottom: '2rem' },
  missionGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' },
  missionCard: { background: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' },
  missionLabel: { fontSize: '1.25rem', color: '#7c3aed', marginBottom: '1rem' },
  missionText: { fontSize: '1rem', lineHeight: 1.7, color: '#475569' },
  history: { marginBottom: '2rem' },
  timeline: { background: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' },
  timelineItem: { display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.25rem', paddingBottom: '1.25rem', borderBottom: '1px solid #f1f5f9' },
  timelineYear: { fontWeight: 'bold', color: '#7c3aed', fontSize: '1.1rem', minWidth: '60px' },
  timelineDot: { width: '12px', height: '12px', borderRadius: '50%', background: '#7c3aed', marginTop: '6px', flexShrink: 0 },
  timelineEvent: { fontSize: '0.95rem', color: '#334155', lineHeight: 1.6, flex: 1 },
  facilities: { marginBottom: '2rem' },
  facilityGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' },
  facilityCard: { background: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 6px rgba(0,0,0,0.06)', borderLeft: '4px solid #7c3aed' },
  facilityIcon: { fontSize: '2rem', marginBottom: '0.5rem' },
  facilityName: { fontSize: '1.05rem', color: '#1e1b4b', marginBottom: '0.3rem' },
  facilityDesc: { fontSize: '0.88rem', color: '#475569', lineHeight: 1.5 },
  backNav: { textAlign: 'center', marginTop: '1rem' },
  backLink: { color: '#7c3aed', textDecoration: 'none', fontWeight: 500 }
}

export default PremiumAbout
