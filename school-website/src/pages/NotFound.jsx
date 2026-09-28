import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main style={styles.container}>
      <p style={styles.code}>404</p>
      <h1>Page not found</h1>
      <p>The page you requested does not exist or may have moved.</p>
      <Link to="/standard" style={styles.link}>Return to the school website</Link>
    </main>
  )
}

const styles = {
  container: { maxWidth: '760px', margin: '0 auto', padding: '6rem 1rem', textAlign: 'center' },
  code: { fontSize: '5rem', fontWeight: 800, margin: 0, color: '#1e3a5f' },
  link: { display: 'inline-block', marginTop: '1.5rem', color: '#2563eb', fontWeight: 600 }
}

export default NotFound

diff --git a/school-website/src/data/school.js b/school-website/src/data/school.js
new file mode 100644
--- /dev/null
+++ b/school-website/src/data/school.js
@@ -0,0 +1,29 @@
+// Single source of truth for school-specific content used by the template.
+export const school = {
+  name: 'Greenfield International School',
+  address: ['123 Education Avenue', 'Nairobi, Kenya'],
+  phone: '+254 700 123 456',
+  email: 'office@greenfield.academy',
