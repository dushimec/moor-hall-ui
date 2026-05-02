import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import menuImg from '../assets/menu.jpg'
import betweenImg from '../assets/between.jpg'
import chiefImg from '../assets/chief.jpg'
import break1Img from '../assets/break1.jpg'
import break2Img from '../assets/break2.jpg'

// Photographic banner backgrounds (Unsplash hotlinks)
const FOOD_BG = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80'

type Item = { id: string; title: string; price: string; image?: string; description?: string }

const SAMPLE_ITEMS = {
  appetizers: [
    { id: 'a1', title: 'Omelette', price: '15k Rwf', image: break1Img },
    { id: 'a2', title: 'Pizza', price: '15k Rwf', image: break2Img }
  ]
}

const MENU_ITEMS = SAMPLE_ITEMS.appetizers.map((item, index) => ({ ...item, description: 'Start your day with this delicious breakfast option.', image: index === 0 ? break1Img : break2Img }))

export default function BreakfastPage() {
  // offsets (in px) to stagger the specials cards vertically
  const CARD_OFFSETS = [-40, 60, -40, 60]

  // connector line heights based on padding + offset
  const CONNECTOR_HEIGHTS = CARD_OFFSETS.map(offset => 100 + offset)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <header className="relative w-full h-56 md:h-80 bg-cover bg-center" style={{ backgroundImage: `url(${menuImg})` }}>
        <div className="absolute inset-0 bg-black/45 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-white text-3xl md:text-5xl font-extrabold drop-shadow">Breakfast Menu</h1>
            <div className="mt-5 flex justify-center">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5v14M12 19l4-4M12 19l-4-4" stroke="#FF3B30" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-white">
        <div className="max-w-7xl mx-auto p-6">
          <div className="grid grid-cols-1 gap-6">
            <section className="col-span-1">
              <div className="text-center mb-8">
                <h3 className="text-lg italic tracking-wide">Our</h3>
                <h2 className="text-4xl md:text-5xl font-extrabold">Breakfast Menu</h2>
                <div className="mx-auto mt-2 w-6 h-6 text-red-500 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2l2.9 5.88L21 9.27l-4.5 4.06L17.8 21 12 17.77 6.2 21l1.3-7.67L3 9.27l6.1-1.39L12 2z" fill="#D92525" />
                  </svg>
                </div>
              </div>

              <div className="max-w-7xl mx-auto p-6">
                <div className="rounded-xl overflow-hidden ring-4 ring-yellow-300 mb-4 shadow-lg">
                  <div className="relative h-36 bg-cover bg-center" style={{ backgroundImage: `url(${FOOD_BG})` }}>
                    <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                      <span className="text-white text-2xl md:text-3xl font-bold tracking-widest drop-shadow">BREAKFAST</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {MENU_ITEMS.map(item => (
                    <div key={item.id} className="bg-white border rounded-md mb-3 p-3">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-md overflow-hidden mr-2 flex-shrink-0">
                          <img src={item.image || menuImg} alt={item.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="text-sm font-medium text-gray-800 w-32">{item.title}</div>
                        <div className="flex-1 mx-4">
                          <div className="w-full h-1 opacity-30" style={{
                            backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.9) 1px, rgba(0,0,0,0) 1px)",
                            backgroundSize: '6px 6px',
                            backgroundRepeat: 'repeat-x',
                            backgroundPosition: '0 center'
                          }} />
                        </div>
                        <div className="text-sm font-semibold text-gray-800">{item.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </section>
          </div>
        </div>

        {/* Full-bleed between image with CHEF overlay */}
        <div className="w-full relative">
          <div className="w-full h-4 md:h-5 lg:h-10">
            <img src={betweenImg} alt="between" className="w-full h-full object-cover" />
          </div>
        </div>
        {/* Specials heading above chef background */}
        {/* Textured heading strip (full-width) */}
        <div className="w-full ">
          <div
            className="mx-auto px-6"
            style={{
              backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10'><rect width='10' height='10' fill='%23eaeaea'/><circle cx='3' cy='3' r='0.6' fill='%23d9d9d9'/></svg>")`,
              backgroundRepeat: 'repeat',
            }}
          >
            <h3 className="text-center text-2xl font-extrabold italic py-2">Our Specials Menu</h3>
          </div>
        </div>

        {/* Specials row over chef background */}
        <div className="w-full  relative">
          <div className="absolute  inset-0">
            <img src={chiefImg} alt="chef background" className="w-full h-full object-cover opacity-90" />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="relative max-w-16xl mx-auto px-6 py-25">
            {CARD_OFFSETS.map((_, i) => (
              <div key={`connector-${i}`} className="hidden md:block absolute w-px bg-red-500" style={{ top: 0, left: `${12.5 + i * 25}%`, height: `${CONNECTOR_HEIGHTS[i]}px` }}>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full shadow-sm"></div>
              </div>
            ))}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {/* Specials items would go here, but for breakfast page, perhaps omit or keep as is */}
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}