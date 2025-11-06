import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import './index.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import ScrollToTop from './components/ScrollToTop';
import ProjectDetail from './pages/ProjectDetail';
import Blog from './pages/Blog';


function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path='/project/:id' element={<ProjectDetail/>} />
          <Route path="/blog" element={<Blog />} />   
        </Routes>
                                         
      </div>
    </Router>
  );
}

export default App;
