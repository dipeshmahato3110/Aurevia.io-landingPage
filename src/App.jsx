import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Product from './components/Product';
import Action from './components/Action';
import FAQ from './components/FAQ';
import Transform from './components/Transform';
import Content from './components/Content';



function App() {
  return (
    <Router>
      <AnimatePresence>
        <div className="min-h-screen bg-gray-900">
          <Navbar />
          <main>
            <section id="hero"><Hero /> </section>
            
            <section id="features"> <Features /></section>
            
           <section id="product">  <Product /></section>
           
            <Testimonials />
            <Content/>
            <section id="action"> <Action /></section>
            
            <FAQ />
            <section id="pricing"> <Pricing /></section>
            
            <Transform />
          </main>
          <Footer />
   
        </div>
      </AnimatePresence>
    </Router>
  );
}

export default App;