import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2C3E50] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>elnashar53@hotmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+20 123 456 789</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1" />
                <span>10 Mesaha Str., Dokki, Giza, Egypt</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-[#1abc9c] transition-colors">About Us</Link></li>
              <li><Link to="/membership" className="hover:text-[#1abc9c] transition-colors">Membership</Link></li>
              <li><Link to="/journal" className="hover:text-[#1abc9c] transition-colors">Journal</Link></li>
              <li><Link to="/events" className="hover:text-[#1abc9c] transition-colors">Events</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/abstract" className="hover:text-[#1abc9c] transition-colors">Submit Abstract</Link></li>
              <li><Link to="/gallery" className="hover:text-[#1abc9c] transition-colors">Photo Gallery</Link></li>
              <li><Link to="/registration" className="hover:text-[#1abc9c] transition-colors">Registration</Link></li>
              <li><Link to="/contact" className="hover:text-[#1abc9c] transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for updates</p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:border-[#1abc9c] text-white placeholder-white/50"
              />
              <button className="w-full bg-[#1abc9c] px-4 py-2 rounded-md hover:bg-[#16a085] transition-colors">
                Subscribe
              </button>
            </form>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-[#1abc9c] transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-[#1abc9c] transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-[#1abc9c] transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Egyptian Fertility And Sterility Society. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;