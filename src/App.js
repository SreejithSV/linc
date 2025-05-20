import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Help from './components/Help/Help';
import Footer from './components/Footer/Footer';
import Testimonial from './components/Testimonial/Testimonial';
import Offer from './components/Offer/Offer';
import Choose from './components/Choose/Choose';
import Work from './components/Work/Work';
import Faq from './components/Faq/Faq';
import './App.css';

function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100); // wait to allow render
      }
    }
  }, [location]);

  return null;
}

function HomeWithSections() {
  return (
    <>
     <div id='home'><Home /></div>
      <div id="how-it-works"><Work /></div>
      <div id="offer"><Offer /></div> 
      <div id="why-choose-us"><Choose /></div>
      <div id="testimonials"><Testimonial /></div>
      <div id="faq"><Faq /></div>
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToHashElement />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeWithSections />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
