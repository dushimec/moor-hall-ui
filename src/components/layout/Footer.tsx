import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logomoor.png'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-5">
       <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <img src={logo} alt="Moor Hall Restaurant" className="h-20 w-auto mb-4" />
            <p className="text-gray-400 mb-6 leading-relaxed">
              Moor Hall Restaurant offers authentic culinary experiences with fresh, locally sourced ingredients and exceptional hospitality.
            </p>
            <div className="flex gap-4">
              {/* Social Icons */}
              <a href="#" aria-label="WhatsApp" className="bg-[#25D366] p-2 rounded-full hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.5 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="bg-[#1877F2] p-2 rounded-full hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.5 7.46V5.56c0-.86.47-1.69 1.81-1.69h2.37V.68l-3.26-.06c-3.6 0-4.42 2.71-4.42 4.39v2.45H7v3.65h3.99V24h4.73V11.11h3.19l.86-3.65h-4.05z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="bg-linear-to-br from-[#FCAF45] via-[#E1306C] to-[#833AB4] p-2 rounded-full hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="4"/>
                  <circle cx="12" cy="12" r="3"/>
                  <circle cx="17.5" cy="6.5" r="1"/>
                </svg>
              </a>
              <a href="#" aria-label="TikTok" className="bg-black p-2 rounded-full hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#C8961A]">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-[#C8961A] transition-colors">Home</Link></li>
              <li><Link to="/menu/pizza" className="text-gray-400 hover:text-[#C8961A] transition-colors">Our Menu</Link></li>
              <li><Link to="/about/our-story" className="text-gray-400 hover:text-[#C8961A] transition-colors">About Us</Link></li>
              <li><Link to="/gallery/food" className="text-gray-400 hover:text-[#C8961A] transition-colors">Gallery</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-[#C8961A] transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-[#C8961A] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#C8961A]">Opening Hours</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex justify-between"><span>Monday - Friday</span><span>10:00 AM - 10:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday</span><span>11:00 AM - 11:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday</span><span>12:00 PM - 9:00 PM</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#C8961A]">Contact Us</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 text-[#C8961A] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>123 Restaurant Street, Food City, FC 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#C8961A] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span>+(250)789000000</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#C8961A] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span>info@moorhall.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 Moor Hall Restaurant. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/terms" className="text-gray-500 hover:text-[#C8961A] transition-colors">Terms & Conditions</Link>
              <a href="#" className="text-gray-500 hover:text-[#C8961A] transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer