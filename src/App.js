import './App.css';
import Header from './components/header/Header'
import Navbar from './components/navbar/navbar';
import About from './components/about/about';
import Experience from './components/experience/experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/portfolio';
import Testimonial from './components/testimonial/testimonial';
import Contact from './components/contact/contact';
import Footer from './components/footer/Footer';

import React from 'react'

function App() {
 return (
 <>
 <Header/>
 <Navbar/>
 <About/>
 <Experience/>
 <Services/>
 <Portfolio/>
 <Testimonial/>
 <Contact/>
 <Footer/>
 </>
 );
 }
 export default App;
