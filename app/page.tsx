import Head from 'next/head'
import HeroSection from './components/HeroSection'
import Features from './components/Features'
export default function Home() {
  
  return (
    <main className="">
      <HeroSection />
      <Features />
    </main>
  )
}
