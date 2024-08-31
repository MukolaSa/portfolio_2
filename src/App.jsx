import React from 'react'
import './App.css'
import Home from './components/Home/Home'
import Services from './components/services/Services'
import Skills from 'components/skills/Skills'
import Portfolio from 'components/portfolio/Portfolio'
import Resume from 'components/resume/Resume'
import Testimonials from 'components/testimonials/Testimonials'
import Pricing from 'components/pricing/Pricing'
import Blog from 'components/Blog/Blog'
import Contact from 'components/contact/Contact'
import Footer from 'components/footer/Footer'
import Header from 'components/Header/Header'

const App = () => {
  return (
    <main className='main'>
      <Header/>
      <Home/>
      <Services/>
      <Skills/>
      <Portfolio/>
      <Resume/>
      <Testimonials/>
      <Pricing/>
      <Blog/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App