import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import menuImg from '../assets/menu.jpg'
import betweenImg from '../assets/between.jpg'

// Photographic banner backgrounds (Unsplash hotlinks)
const FOOD_BG = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80'
// a cocktail/drinks-focused photo
const DRINK_BG = 'https://images.unsplash.com/photo-1551024709-8f23befc6f5d?auto=format&fit=crop&w=1200&q=80'

type CategoryId = 'all' | 'appetizers' | 'mains' | 'desserts' | 'drinks'

type Item = { id: string; title: string; price: string; description?: string }

const SAMPLE_ITEMS: Record<Exclude<CategoryId, 'all'>, Item[]> = {
  appetizers: [
    { id: 'a1', title: 'Omelette', price: '15k Rwf' },
    { id: 'a2', title: 'Pizza', price: '15k Rwf' }
  ],
  mains: [
    { id: 'm1', title: 'Burgga', price: '15k Rwf' },
    { id: 'm2', title: 'Chicken', price: '15k Rwf' }
  ],
  desserts: [
    { id: 'd1', title: 'Omelette', price: '15k Rwf' },
    { id: 'd2', title: 'Omelette', price: '15k Rwf' }
  ],
  drinks: [
    { id: 'dr1', title: 'Panache', price: '2k Rwf' },
    { id: 'dr2', title: 'Fanta', price: '2k Rwf' },
    { id: 'dr3', title: 'Mirinda', price: '2k Rwf' },
    { id: 'dr4', title: 'energy', price: '1k Rwf' }
  ]
}

export default function Menu() {

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <header className="relative w-full h-56 md:h-80 bg-cover bg-center" style={{ backgroundImage: `url(${menuImg})` }}>
        <div className="absolute inset-0 bg-black/45 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-white text-3xl md:text-5xl font-extrabold drop-shadow">Menu</h1>
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
            {/* Preview / items (full width) */}
            <section className="col-span-1">
                <div className="text-center mb-8">
                  <h3 className="text-lg italic tracking-wide">The</h3>
                  <h2 className="text-4xl md:text-5xl font-extrabold">Menu</h2>
                  <div className="mx-auto mt-2 w-6 h-6 text-red-500 flex items-center justify-center">
                    {/* small decorative star */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2l2.9 5.88L21 9.27l-4.5 4.06L17.8 21 12 17.77 6.2 21l1.3-7.67L3 9.27l6.1-1.39L12 2z" fill="#D92525" />
                    </svg>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {/* Food Column */}
                <div>
                  <div className="rounded-xl overflow-hidden ring-4 ring-blue-300 mb-4 shadow-lg">
                    <div className="relative h-36 bg-cover bg-center" style={{ backgroundImage: `url(${FOOD_BG})` }}>
                      <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                        <span className="text-white text-2xl md:text-3xl font-bold tracking-widest drop-shadow">FOOD</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[...SAMPLE_ITEMS.appetizers, ...SAMPLE_ITEMS.mains]
                      .map(item => (
                        <div key={item.id} className="bg-white border rounded-md mb-3 p-3">
                          <div className="flex items-center">
                            <div className="text-sm font-medium text-gray-800 w-40">{item.title}</div>
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

                {/* Drink Column */}
                <div>
                  <div className="rounded-xl overflow-hidden mb-4 shadow-lg">
                    <div className="relative h-36 bg-cover bg-center" style={{ backgroundImage: `url(${DRINK_BG})` }}>
                      <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                        <span className="text-white text-2xl md:text-3xl font-bold tracking-widest drop-shadow">DRINK</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {SAMPLE_ITEMS.drinks
                      .map(item => (
                        <div key={item.id} className="bg-white border rounded-md mb-3 p-3">
                          <div className="flex items-center">
                            <div className="text-sm font-medium text-gray-800 w-40">{item.title}</div>
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
                </div>

                {/* Between image removed from centered container to render full-bleed below */}
            </section>
          </div>
        </div>

        {/* Full-bleed between image with CHEF overlay */}
        <div className="w-full relative">
          <div className="w-full h-4 md:h-5 lg:h-10">
            <img src={betweenImg} alt="between" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h3 className="text-white text-xl md:text-2xl font-semibold tracking-widest">CHEF</h3>
            </div>
          </div>
        </div>
        
      </main>

      <Footer />
    </div>
  )
}

