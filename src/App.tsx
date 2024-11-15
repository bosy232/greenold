import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import PaymentSection from './components/PaymentSection';
import Documents from './pages/Documents';
import Journal from './pages/Journal';
import Abstract from './pages/Abstract';
import Registration from './pages/Registration';
import AnnualMeeting from './pages/AnnualMeeting';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/payment" element={<PaymentSection />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/meeting/:year" element={<AnnualMeeting />} />
            <Route path="/journal/current" element={<Journal />} />
            <Route path="/journal/archive" element={<Journal />} />
            <Route path="/journal/submit" element={<Journal />} />
            <Route path="/abstract" element={<Abstract />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;