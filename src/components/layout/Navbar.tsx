import React, { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logomoor.png'

type SubItem = { label: string; href?: string }

const NavItem: React.FC<{ label: string; items?: SubItem[] }> = ({ label, items }) => {
  const [open, setOpen] = useState(false)
  const hasMenu = Array.isArray(items) && items.length > 0
  const location = useLocation()
  const targetPath = label === "Home" ? "/" : "/" + label.toLowerCase()
  const isActive = location.pathname === targetPath

  return (
    <div
      className="relative"
      onMouseEnter={() => hasMenu && setOpen(true)}
      onMouseLeave={() => hasMenu && setOpen(false)}
    >
      {hasMenu ? (
        <button
          className={`text-md font-bold px-3 py-2 flex items-center gap-1 transition-colors duration-200 ${isActive ? 'text-[#C8961A]' : 'text-black hover:text-[#C8961A]'}`}
          aria-haspopup="true"
          aria-expanded={open}
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
          onKeyDown={e => {
            if (e.key === 'Escape') setOpen(false)
          }}
        >
          <span>{label}</span>
          <svg className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''} ${isActive ? 'text-[#C8961A]' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
      ) : (
        <Link 
          to={targetPath}
          className={`text-md font-bold px-3 py-2 flex items-center gap-1 ${isActive ? 'text-[#C8961A]' : 'text-black hover:text-[#C8961A]'}`}
        >
          <span>{label}</span>
        </Link>
      )}

      {hasMenu && (
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg ring-1 ring-white ring-opacity-5 z-40"
            >
              <ul className="py-2">
                {items!.map((it, idx) => (
                  <li key={idx}>
                    <Link
                      to={it.href ?? '#'}
                      className="block px-4 py-2 text-sm text-black hover:bg-gray-50"
                      onClick={() => setOpen(false)}
                    >
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  )
}

const SocialIcons: React.FC = () => {
  const icons = [
    {
      name: 'WhatsApp',
      href: '#',
      svg: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="11" fill="white"/>
          <circle cx="12" cy="12" r="10" fill="#25D366"/>
          <path d="M15.5 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" fill="white"/>
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: '#',
      svg: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="11" fill="white"/>
          <circle cx="12" cy="12" r="10" fill="#1877F2"/>
          <path d="M14.5 7.46V5.56c0-.86.47-1.69 1.81-1.69h2.37V.68l-3.26-.06c-3.6 0-4.42 2.71-4.42 4.39v2.45H7v3.65h3.99V24h4.73V11.11h3.19l.86-3.65h-4.05z" fill="white"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      svg: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="insta-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FCAF45"/>
              <stop offset="25%" stopColor="#F77737"/>
              <stop offset="50%" stopColor="#E1306C"/>
              <stop offset="75%" stopColor="#C13584"/>
              <stop offset="100%" stopColor="#833AB4"/>
            </linearGradient>
          </defs>
          <rect x="1" y="1" width="22" height="22" rx="6" fill="white"/>
          <rect x="2.5" y="2.5" width="19" height="19" rx="5" fill="url(#insta-gradient)"/>
          <rect x="6" y="6" width="12" height="12" rx="3" fill="none" stroke="white" strokeWidth="2"/>
          <circle cx="12" cy="12" r="3" fill="none" stroke="white" strokeWidth="2"/>
          <circle cx="17" cy="7" r="1.2" fill="white"/>
        </svg>
      ),
    },
    {
      name: 'TikTok',
      href: '#',
      svg: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="11" fill="white"/>
          <g transform="translate(0.2, 0)">
            <path d="M15.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" fill="#00F2EA"/>
          </g>
          <g transform="translate(-0.2, 0)">
            <path d="M15.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" fill="#FE2C55"/>
          </g>
          <path d="M15.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" fill="#000000"/>
        </svg>
      ),
    }
  ]

  return (
    <div className="flex items-center gap-3">
      {icons.map((ic, i) => (
        <a key={i} href={ic.href} aria-label={ic.name} className="hover:scale-110 transition-transform duration-200 drop-shadow-sm">
          {ic.svg}
        </a>
      ))}
    </div>
  )
}

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const navRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {isScrolled && <div style={{ height: 96 }} aria-hidden />}

        <nav ref={navRef} className={`absolute top-0 left-0 right-0 bg-white/90 text-black backdrop-blur-md rounded-xl shadow-lg mt-5 mx-auto px-8 max-w-7xl w-[90%] flex items-center justify-between transition-all duration-300 z-50`}>
           <div className="flex items-center gap-3">
             <img src={logo} alt="Moor-Hall" className="w-28 h-24 object-contain rounded-full" />
           </div>

           <div className="hidden text-black md:flex items-center justify-center space-x-1">
                <NavItem label="Home" />
                <NavItem label="Menu" items={[{ label: 'Pizza', href: '/menu/pizza' }, { label: 'Burgers', href: '/menu/burgers' }, { label: 'Desserts', href: '/menu/desserts' }]} />
               <NavItem label="About" items={[{ label: 'Our Story', href: '/about/our-story' }, { label: 'Mission & Values', href: '/about/mission' }, { label: 'Why Choose Us', href: '/about/why-us' }, { label: 'Terms & Conditions', href: '/terms' }]} />
               <NavItem label="Gallery" items={[{ label: 'Food Photos', href: '/gallery/food' }, { label: 'Coffee Shop', href: '/gallery/coffee-shop' }, { label: 'Bakery Products', href: '/gallery/bakery' },{ label: 'Catering Events', href: '/gallery/catering-events' }]} />
                <NavItem label="Services" />
                <NavItem label="Contact" />
           </div>

           <div className="hidden md:flex items-center">
             <SocialIcons />
           </div>
          </nav>

       <AnimatePresence mode="wait">
        {isScrolled && (
          <motion.nav
            initial={{ y: -28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
            className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-md"
          >
            <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-24">
              <div className="flex items-center gap-3">
                <img src={logo} alt="Moor-Hall" className="w-28 h-24 object-contain " />
              </div>

             <div className="hidden md:flex items-center justify-center space-x-1">
               <NavItem label="Home" />
               <NavItem label="Menu" items={[{ label: 'Pizza', href: '/menu/pizza' }, { label: 'Burgers', href: '/menu/burgers' }, { label: 'Desserts', href: '/menu/desserts' }]} />
               <NavItem label="About" items={[{ label: 'Our Story', href: '/about/our-story' }, { label: 'Mission & Values', href: '/about/mission' }, { label: 'Why Choose Us', href: '/about/why-us' }, { label: 'Terms & Conditions', href: '/terms' }]} />
               <NavItem label="Gallery" items={[{ label: 'Food Photos', href: '/gallery/food' }, { label: 'Coffee Shop', href: '/gallery/coffee-shop' }, { label: 'Bakery Products', href: '/gallery/bakery' },{ label: 'Catering Events', href: '/gallery/catering-events' }]} />
                <NavItem label="Services" />
               <NavItem label="Contact" />
             </div>

              <div className="hidden md:flex items-center">
                <SocialIcons />
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
