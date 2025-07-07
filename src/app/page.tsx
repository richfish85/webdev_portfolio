'use client'
import HeroSection from '@/components/HeroSection'
import GridSection from '@/components/GridSection'
import Footer from '@/components/Footer'
import TerminalPanel from '@/components/TerminalPanel'
export default function HomePage() {


  return (
    <div className="flex flex-col min-h-screen pb-12">
      
      <HeroSection />
      <GridSection />
      <Footer />
      <TerminalPanel />
    </div>
  )
}
