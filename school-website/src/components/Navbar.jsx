import { Link, NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const path = location.pathname;

  // Determine the current package
  let packageType = "standard";

  if (path.startsWith("/premium")) {
    packageType = "premium";
  } else if (path.startsWith("/basic")) {
    packageType = "basic";
  }

  const navItems = {
    basic: [
      { name: "Home", path: "/basic" },
      { name: "About", path: "/basic/about" },
      { name: "Admissions", path: "/basic/admissions" },
      { name: "Gallery", path: "/basic/gallery" },
      { name: "Contact", path: "/basic/contact" },
      { name: "Pricing", path: "/basic/pricing" },
    ],

    standard: [
      { name: "Home", path: "/standard" },
      { name: "About", path: "/standard/about" },
      { name: "Academics", path: "/standard/academics" },
      { name: "Staff", path: "/standard/staff" },
      { name: "News", path: "/standard/news" },
      { name: "Events", path: "/standard/events" },
      { name: "Gallery", path: "/standard/gallery" },
      { name: "Downloads", path: "/standard/downloads" },
      { name: "Contact", path: "/standard/contact" },
      { name: "Pricing", path: "/standard/pricing" },
    ],

    premium: [
      { name: "Home", path: "/premium" },
      { name: "About", path: "/premium/about" },
      { name: "Testimonials", path: "/premium/testimonials" },
      { name: "Academics", path: "/premium/academics" },
      { name: "Staff", path: "/premium/staff" },
      { name: "News", path: "/premium/news" },
      { name: "Events", path: "/premium/events" },
      { name: "Gallery", path: "/premium/gallery" },
      { name: "Downloads", path: "/premium/downloads" },
      { name: "Contact", path: "/premium/contact" },
      { name: "Pricing", path: "/premium/pricing" },
    ],
  };

  const currentLinks = navItems[packageType];

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <Link to={`/${packageType}`} style={styles.logo}>
          🏫 SchoolWeb
        </Link>

        <div style={styles.navLinks}>
          {currentLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === `/${packageType}`}
              style={({ isActive }) => ({
                ...styles.link,
                ...(isActive ? styles.activeLink : {}),
              })}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    background: "#fff",
    padding: "1rem 0",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },

  container: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "2rem",
  },

  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#2563eb",
    textDecoration: "none",
    flexShrink: 0,
  },

  navLinks: {
    display: "flex",
    gap: "1.2rem",
    flexWrap: "wrap",
    alignItems: "center",
  },

  link: {
    fontWeight: "500",
    color: "#333",
    fontSize: "0.9rem",
    textDecoration: "none",
    padding: "0.4rem 0",
  },

  activeLink: {
    color: "#2563eb",
    fontWeight: "bold",
    borderBottom: "2px solid #2563eb",
  },
};

export default Navbar;