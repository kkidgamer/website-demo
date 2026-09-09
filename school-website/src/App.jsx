import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import StandardHome from './pages/StandardHome'
import StandardAbout from './pages/StandardAbout'
import StandardAcademics from './pages/StandardAcademics'
import StandardStaff from './pages/StandardStaff'
import StandardNews from './pages/StandardNews'
import StandardEvents from './pages/StandardEvents'
import StandardGallery from './pages/StandardGallery'
import StandardDownloads from './pages/StandardDownloads'
import StandardContact from './pages/StandardContact'
import BasicHome from './pages/BasicHome'
import BasicAbout from './pages/BasicAbout'
import BasicContact from './pages/BasicContact'
import BasicAdmissions from './pages/BasicAdmissions'
import BasicGallery from './pages/BasicGallery'
import PremiumHome from './pages/PremiumHome'
import PremiumAbout from './pages/PremiumAbout'
import PremiumAcademics from './pages/PremiumAcademics'
import PremiumStaff from './pages/PremiumStaff'
import PremiumNews from './pages/PremiumNews'
import PremiumEvents from './pages/PremiumEvents'
import PremiumGallery from './pages/PremiumGallery'
import PremiumDownloads from './pages/PremiumDownloads'
import PremiumContact from './pages/PremiumContact'
import PremiumTestimonials from './pages/PremiumTestimonials'
import StarterPricing from './pages/Starter'
import StandardPricing from './pages/Standard'
import PremiumPricing from './pages/Premium'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          {/* Basic (Starter) package demo site */}
          <Route path="/basic" element={<BasicHome />} />
          <Route path="/basic/about" element={<BasicAbout />} />
          <Route path="/basic/admissions" element={<BasicAdmissions />} />
          <Route path="/basic/contact" element={<BasicContact />} />
          <Route path="/basic/gallery" element={<BasicGallery />} />

          {/* Standard package demo site */}
          <Route path="/standard" element={<StandardHome />} />
          <Route path="/standard/about" element={<StandardAbout />} />
          <Route path="/standard/academics" element={<StandardAcademics />} />
          <Route path="/standard/staff" element={<StandardStaff />} />
          <Route path="/standard/news" element={<StandardNews />} />
          <Route path="/standard/events" element={<StandardEvents />} />
          <Route path="/standard/gallery" element={<StandardGallery />} />
          <Route path="/standard/downloads" element={<StandardDownloads />} />
          <Route path="/standard/contact" element={<StandardContact />} />

          {/* Premium package demo site */}
          <Route path="/premium" element={<PremiumHome />} />
          <Route path="/premium/testimonials" element={<PremiumTestimonials />} />
          <Route path="/premium/about" element={<PremiumAbout />} />
          <Route path="/premium/academics" element={<PremiumAcademics />} />
          <Route path="/premium/staff" element={<PremiumStaff />} />
          <Route path="/premium/news" element={<PremiumNews />} />
          <Route path="/premium/events" element={<PremiumEvents />} />
          <Route path="/premium/gallery" element={<PremiumGallery />} />
          <Route path="/premium/downloads" element={<PremiumDownloads />} />
          <Route path="/premium/contact" element={<PremiumContact />} />

          {/* Pricing pages */}
          <Route path="/basic/pricing" element={<StarterPricing />} />
          <Route path="/standard/pricing" element={<StandardPricing />} />
          <Route path="/premium/pricing" element={<PremiumPricing />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
