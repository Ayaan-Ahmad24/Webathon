import './App.css'
import ContactPage from './components/ContactUs'
import CacheLogicFooter from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/navbar'
import WorldwideLocations from './components/OurLocations'
import ServicesSection from './components/OurServices'
import TeamSection from './components/OurTeam'
import PortfolioSection from './components/Portfolio'
import SocialProofSection from './components/Socials'
import WhyUsSection from './components/WhyUs'
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SocialProofSection />
      <ServicesSection />
      <WhyUsSection />
      <PortfolioSection />
      <TeamSection />
      <WorldwideLocations />
      <ContactPage />
      <CacheLogicFooter />
    </>
  )
}

export default App
