import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import TrustStrip from '../components/TrustStrip'
import Hero from '../components/Hero'
import Collections from '../components/Collections'
import SocialProof from '../components/SocialProof'
import FeaturedProducts from '../components/FeaturedProducts'
import PromoBanner from '../components/PromoBanner'
import TrustSection from '../components/TrustSection'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import FloatingCta from '../components/FloatingCta'

export default function HomePage() {
  return (
    <div className="home">
      <div className="home__ambient" aria-hidden="true" />

      <TopBar />
      <Navbar />
      <TrustStrip />

      <main>
        <Hero />
        <Collections />
        <SocialProof />
        <FeaturedProducts />
        <PromoBanner />
        <TrustSection />
        <Testimonials />
        <Newsletter />
      </main>

      <Footer />
      <FloatingCta />
    </div>
  )
}
