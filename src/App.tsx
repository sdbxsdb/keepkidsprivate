import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { HeroSection } from './components/sections/HeroSection'
import { WhatYouPostedSection } from './components/sections/WhatYouPostedSection'
import { WhatAiCanDoSection } from './components/sections/WhatAiCanDoSection'
import { DontBelieveUsSection } from './components/sections/DontBelieveUsSection'
import {
  TenSecondCheckSection,
  FinalCTASection,
} from './components/sections/TenSecondCheckSection'

export default function App() {
  return (
    <div className="bg-navy-950 min-h-screen">
      <Header />

      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <WhatYouPostedSection />
        <WhatAiCanDoSection />
        <DontBelieveUsSection />
        <TenSecondCheckSection />
        <FinalCTASection />
      </main>

      <Footer />
    </div>
  )
}
