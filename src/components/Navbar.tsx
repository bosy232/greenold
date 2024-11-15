import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Stethoscope } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  const annualMeetings = [2023, 2022, 2021, 2020, 2019, 2018, 2017];

  return (
    <nav className="bg-[#2C3E50] border-t-4 border-crimson fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Stethoscope className="h-8 w-8 text-[#1abc9c] mr-2" />
              <span className="text-white text-2xl font-bold">EFSS</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className={`nav-link ${isActive('/') ? 'text-[#1abc9c]' : ''}`}>Home</Link>
              <Link to="/about" className={`nav-link ${isActive('/about') ? 'text-[#1abc9c]' : ''}`}>About</Link>
              <div className="relative group">
                <button className="nav-link inline-flex items-center">
                  Annual Meeting
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute hidden group-hover:block w-48 bg-[#2C3E50] rounded-md shadow-lg py-1">
                  {annualMeetings.map(year => (
                    <Link 
                      key={year} 
                      to={`/meeting/${year}`} 
                      className={`block px-4 py-2 text-white hover:bg-[#1abc9c] transition-colors ${
                        isActive(`/meeting/${year}`) ? 'bg-[#1abc9c]' : ''
                      }`}
                    >
                      {year}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="relative group">
                <button className="nav-link inline-flex items-center">
                  Journal
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute hidden group-hover:block w-48 bg-[#2C3E50] rounded-md shadow-lg py-1">
                  <Link 
                    to="/journal/current" 
                    className={`block px-4 py-2 text-white hover:bg-[#1abc9c] ${
                      isActive('/journal/current') ? 'bg-[#1abc9c]' : ''
                    }`}
                  >
                    Current Issue
                  </Link>
                  <Link 
                    to="/journal/archive" 
                    className={`block px-4 py-2 text-white hover:bg-[#1abc9c] ${
                      isActive('/journal/archive') ? 'bg-[#1abc9c]' : ''
                    }`}
                  >
                    Archive
                  </Link>
                  <Link 
                    to="/journal/submit" 
                    className={`block px-4 py-2 text-white hover:bg-[#1abc9c] ${
                      isActive('/journal/submit') ? 'bg-[#1abc9c]' : ''
                    }`}
                  >
                    Submit Paper
                  </Link>
                </div>
              </div>
              <Link to="/gallery" className={`nav-link ${isActive('/gallery') ? 'text-[#1abc9c]' : ''}`}>Gallery</Link>
              <Link to="/documents" className={`nav-link ${isActive('/documents') ? 'text-[#1abc9c]' : ''}`}>Documents</Link>
              <Link to="/payment" className={`nav-link ${isActive('/payment') ? 'text-[#1abc9c]' : ''}`}>Payment</Link>
              <Link to="/registration" className={`nav-link ${isActive('/registration') ? 'text-[#1abc9c]' : ''}`}>Registration</Link>
              <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'text-[#1abc9c]' : ''}`}>Contact</Link>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#2C3E50] border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              className={`block px-3 py-2 text-white hover:bg-[#1abc9c] ${
                isActive('/') ? 'bg-[#1abc9c]' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`block px-3 py-2 text-white hover:bg-[#1abc9c] ${
                isActive('/about') ? 'bg-[#1abc9c]' : ''
              }`}
            >
              About
            </Link>
            <Link 
              to="/gallery" 
              className={`block px-3 py-2 text-white hover:bg-[#1abc9c] ${
                isActive('/gallery') ? 'bg-[#1abc9c]' : ''
              }`}
            >
              Gallery
            </Link>
            <Link 
              to="/documents" 
              className={`block px-3 py-2 text-white hover:bg-[#1abc9c] ${
                isActive('/documents') ? 'bg-[#1abc9c]' : ''
              }`}
            >
              Documents
            </Link>
            <Link 
              to="/payment" 
              className={`block px-3 py-2 text-white hover:bg-[#1abc9c] ${
                isActive('/payment') ? 'bg-[#1abc9c]' : ''
              }`}
            >
              Payment
            </Link>
            <Link 
              to="/registration" 
              className={`block px-3 py-2 text-white hover:bg-[#1abc9c] ${
                isActive('/registration') ? 'bg-[#1abc9c]' : ''
              }`}
            >
              Registration
            </Link>
            <Link 
              to="/contact" 
              className={`block px-3 py-2 text-white hover:bg-[#1abc9c] ${
                isActive('/contact') ? 'bg-[#1abc9c]' : ''
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;