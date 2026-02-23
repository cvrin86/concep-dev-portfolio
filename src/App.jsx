

import { Routes, Route } from 'react-router-dom';
import AboutPage  from './pages/AboutPage';
import  ContactPage  from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { PortfolioPage } from './pages/PortfolioPage';
import ServicesPage  from './pages/ServicesPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import BackgroundParticles from './components/BackgroundParticles';
import LegalNotice from './pages/LegalNotice';

import ProjectDetail from './pages/ProjectDetail';

function App() {



  return (
    <>
    <div className='d-flex flex-column min-vh-100'>

      <Header />
      <main className='flex-grow-1'>
      

      <BackgroundParticles/>
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/legal-notice" element={<LegalNotice/>}/>
          <Route path="/project/:id" element={<ProjectDetail/>}/>
        </Routes>


      </main>
      <Footer/>


    </div>
    </>


  )
}

export default App
