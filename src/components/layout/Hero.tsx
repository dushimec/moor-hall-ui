import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import pizza from '../../assets/pizza.png'
import burger from '../../assets/burger.png'

const slides = [
  {
    id: 'pizza',
    image: pizza,
    title: 'French Break\nCheesy Pizza',
    description: 'Savour a rich blend of cheeses, herbs and perfectly baked crust — a French-inspired pizza experience crafted for sharing (or not).',
    price: '15,000 Rwf',
  },
  {
    id: 'burger',
    image: burger,
    title: 'Double Cheese\nBurger',
    description: 'Juicy grilled patty layered with melted cheese and crisp lettuce — a classic done right for true burger lovers.',
    price: '20,000 Rwf',
  },
]

const textVariant = (delay = 0) => ({
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0, transition: { delay, duration: 0.75, ease: 'easeInOut' } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.5, ease: 'easeInOut' } },
})

const badgeVariant = (delay = 0) => ({
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { delay, duration: 0.75, ease: 'easeInOut' } },
  exit: { opacity: 0, x: -30, transition: { duration: 0.5, ease: 'easeInOut' } },
})

const imageVariant = {
  hidden: { opacity: 0, y: -30 },
  visible: (delay = 0.6) => ({ opacity: 1, y: 0, transition: { delay, duration: 0.9, ease: 'easeInOut' } }),
  exit: { opacity: 0, y: -20, transition: { duration: 0.6, ease: 'easeInOut' } },
}

const stripeVariant = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 0.2, y: 0, transition: { duration: 0.9, ease: 'easeInOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.6, ease: 'easeInOut' } },
}

const floatY = (d = 4) => ({
  animate: { y: [0, -10, 0], rotate: [0, 4, 0] },
  transition: { duration: d, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' },
})

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const t = setInterval(() => {
      if (!isScrolling) {
        setIndex((i) => (i + 1) % slides.length)
      }
    }, 6000)
    return () => clearInterval(t)
  }, [isScrolling])

  // Wheel scroll navigation
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return
      
      setIsScrolling(true)
      if (e.deltaY > 0) {
        setIndex((i) => (i + 1) % slides.length)
      } else {
        setIndex((i) => (i - 1 + slides.length) % slides.length)
      }
      
      setTimeout(() => setIsScrolling(false), 800)
    }

    const heroSection = document.getElementById('hero-section')
    if (heroSection) {
      heroSection.addEventListener('wheel', handleWheel, { passive: true })
    }
    
    return () => {
      if (heroSection) {
        heroSection.removeEventListener('wheel', handleWheel)
      }
    }
  }, [isScrolling])

  // Touch swipe navigation
  useEffect(() => {
    let touchStartY = 0

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrolling) return
      
      const touchEndY = e.changedTouches[0].clientY
      const diffY = touchStartY - touchEndY
      
      if (Math.abs(diffY) > 50) {
        setIsScrolling(true)
        if (diffY > 0) {
          setIndex((i) => (i + 1) % slides.length)
        } else {
          setIndex((i) => (i - 1 + slides.length) % slides.length)
        }
        
        setTimeout(() => setIsScrolling(false), 800)
      }
    }

    const heroSection = document.getElementById('hero-section')
    if (heroSection) {
      heroSection.addEventListener('touchstart', handleTouchStart, { passive: true })
      heroSection.addEventListener('touchend', handleTouchEnd, { passive: true })
    }
    
    return () => {
      if (heroSection) {
        heroSection.removeEventListener('touchstart', handleTouchStart)
        heroSection.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [isScrolling])

  const current = slides[index]

  return (
    <section id="hero-section" className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing">
      {/* Vertical stripe that animates from up with the image */}
      <div className="absolute inset-0 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div key={current.id + '-stripe'} className="absolute inset-y-0 right-40 h-autho -translate-x-1/2 w-36 md:w-56 bg-[#fffb11] pointer-events-none" variants={stripeVariant} initial="hidden" animate="visible" exit="exit" style={{ transform: 'translateX(-50%)' }} />
        </AnimatePresence>
      </div>

      <div className="relative max-w-7xl mx-auto px-8 pt-32 pb-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left navigation arrow */}
        <button 
          onClick={() => !isScrolling && setIndex((i) => (i - 1 + slides.length) % slides.length)}
          className="absolute  md:left-0 top-1/2 -translate-y-1/2 w-12 h-12 border border-white hover:bg-[#C8961A] rounded-full flex items-center justify-center text-white transition-all z-20 "
          aria-label="Previous slide"
        >
          <svg className="w-6  h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right navigation arrow */}
        <button 
          onClick={() => !isScrolling && setIndex((i) => (i + 1) % slides.length)}
          className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 w-12 h-12 border border-white hover:bg-[#C8961A] rounded-full flex items-center justify-center text-white transition-all z-20"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        {/* Left: text content (staggered from up) */}
        <div className="text-left h-full flex flex-col justify-center py-8 min-h-[420px]">
          <div className="min-h-17">
            <AnimatePresence mode="wait">
              <motion.div key={current.id + '-badge'} initial="hidden" animate="visible" exit="exit" variants={badgeVariant(0)}>
                <div className="inline-block  border font-bold border-white text-black text-lg rounded-md px-6 py-2 mb-6">
                  {`PURCHASE TODAY, JUST ${current.price}`}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="min-h-[180px]">
            <AnimatePresence mode="wait">
            <motion.h1 key={current.id + '-title'} className="text-4xl md:text-5xl lg:text-7xl font-bold text-white uppercase leading-tight drop-shadow-lg whitespace-pre-line" initial="hidden" animate="visible" exit="exit" variants={textVariant(0.12)}>
              {current.title}
            </motion.h1>
            </AnimatePresence>
          </div>

          <div className="min-h-[80px]">
            <AnimatePresence mode="wait">
              <motion.p key={current.id + '-desc'} className="mt-4 text-white/90 max-w-lg text-lg font-semibold" initial="hidden" animate="visible" exit="exit" variants={textVariant(0.28)}>
                {current.description}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="min-h-[50px]">
            <AnimatePresence mode="wait">
            <motion.div key={current.id + '-cta'} className="mt-8 flex gap-3 items-center" initial="hidden" animate="visible" exit="exit" variants={textVariant(0.44)}>
              <button className="bg-[#C8961A] hover:bg-red-700 text-black font-bold px-6 py-2 rounded-md shadow-lg transition-all duration-300">Order Now</button>
              <div className="flex items-center gap-2 text-white font-medium">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
                </svg>
                Available in Kigali
              </div>
            </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right: animated food images */}
        <div className="flex items-center justify-center relative h-full py-8 min-h-[420px]">
          {/* floating element (small) */}
          <AnimatePresence></AnimatePresence>
          <motion.div className="absolute -top-6 -right-10 md:-right-16" animate={{ y: [0, -10, 0], rotate: [0, 4, 0] }} transition={{ duration: 4, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}>
            <img src={burger} alt="burger" className="w-14 h-14 mt-10 md:w-20 md:h-20 rounded-full object-cover shadow-lg border-2 border-white/20" />
          </motion.div>

          <div className="relative w-full min-h-[320px] md:min-h-[450px] flex items-center justify-center overflow-visible">
            <AnimatePresence mode="wait">
              <motion.div key={current.id + '-img'} className="w-full h-full flex items-center justify-center" variants={imageVariant} initial="hidden" animate="visible" exit="exit">
                <motion.img 
                  src={current.image} 
                  alt={current.title} 
                  className="max-w-full max-h-[380px] md:max-h-[500px] w-auto h-auto object-contain drop-shadow-2xl" 
                  initial={{ scale: 1 }} 
                  animate={{ scale: 1.04 }} 
                  transition={{ duration: 14, ease: 'easeInOut' }} 
                  style={{ imageRendering: 'auto' }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Scroll indicator dots */}
      <div className="absolute bottom- left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => !isScrolling && setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === i 
                ? 'bg-white w-8' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to ${slide.id} slide`}
          />
        ))}
      </div>

      {/* subtle decorative shapes */}
      <svg className="absolute right-8 bottom-4 opacity-25 pointer-events-none" width="220" height="220" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g2" x1="0" x2="1">
            <stop offset="0%" stopColor="#ffd7b0" />
            <stop offset="100%" stopColor="#ff9a6b" />
          </linearGradient>
        </defs>
        <circle cx="60" cy="60" r="50" fill="url(#g2)" />
        <circle cx="120" cy="110" r="40" fill="#ffb19a" />
      </svg>
    </section>
  )
}

export default Hero
