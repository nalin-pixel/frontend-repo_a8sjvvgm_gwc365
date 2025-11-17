import Hero from './components/Hero'
import Problem from './components/Problem'
import USP from './components/USP'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import ProductCategories from './components/ProductCategories'
import WhoFor from './components/WhoFor'
import WhatYouGet from './components/WhatYouGet'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import TrustBar from './components/TrustBar'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <TrustBar />
      <Problem />
      <USP />
      <HowItWorks />
      <Testimonials />
      <ProductCategories />
      <WhoFor />
      <WhatYouGet />
      <FAQ />
      <FinalCTA />
    </div>
  )
}

export default App
