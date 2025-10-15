import React from 'react'
import Navber from './Navber'
import HeroSection from './HeroSection'
import AnalysisTools from '../componants/AnalysisTools'
import DashboardSection from '../componants/DashboardSection'
import SecureData from '../componants/SecureData'
import Contact from '../componants/Contact'
import Footer from './Footer'

function Home() {
  return (
    <section id="home">
      <Navber />
      <HeroSection/>
      <AnalysisTools/>
      <DashboardSection/>
        <SecureData/>
        <Contact/>
         <Footer />
    </section>
  )
}

export default Home
