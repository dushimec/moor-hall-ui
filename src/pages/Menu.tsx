import React, { useState } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import menuImg from '../assets/menu.jpg'
import betweenImg from '../assets/between.jpg'
import chiefImg from '../assets/chief.jpg'
import pizzaImg from '../assets/pizza.png'
import burgerImg from '../assets/burger.png'
import foodImg from '../assets/food.png'

// Photographic banner backgrounds (Unsplash hotlinks)
const FOOD_BG = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80'
// a cocktail/drinks-focused photo
const DRINK_BG = 'https://images.unsplash.com/photo-1551024709-8f23befc6f5d?auto=format&fit=crop&w=1200&q=80'

type CategoryId = 'all' | 'cocktails' | 'breakfast' | 'dinner' | 'food'

type Item = { id: string; title: string; price: string; image?: string; description?: string }

// Category filter buttons configuration
const CATEGORIES: { id: CategoryId; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'cocktails', label: 'Cocktails' },
  { id: 'breakfast', label: 'Breakfast' },
  { id: 'dinner', label: 'Dinner' },
  { id: 'food', label: 'Food' }
]

const SPECIALS_ITEMS: Item[] = [
  { id: 's1', title: 'Crispy Crust Pizza', price: '20k Rwf', image: pizzaImg, description: 'Freshly baked with premium cheese, tomatoes, and ghyievwhscjcvueghvy.vcvghscvgveg, vchvdhvc gev, vgevsjhvcghwevty, aromatic herbs' },
  { id: 's2', title: 'Grilled Salmon', price: '25k Rwf', image: foodImg, description: 'Atlantic salmon grilled to perfection with lemon butter sauce' },
  { id: 's3', title: 'Premium Burger', price: '18k Rwf', image: burgerImg, description: 'Juicy beef patty with cheddar, lettuce, tomato, and special sauce' },
  { id: 's4', title: 'Chocolate Lava Cake', price: '12k Rwf', image: foodImg, description: 'Warm chocolate cake with a molten center, served with vanilla ice cream' }
]

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

const MENU_ITEMS: Record<Exclude<CategoryId, 'all'>, Item[]> = {
  cocktails: SAMPLE_ITEMS.drinks.map(item => ({ ...item, description: 'A refreshing drink to complement your meal.', image: foodImg })),
  breakfast: SAMPLE_ITEMS.appetizers.map(item => ({ ...item, description: 'Start your day with this delicious breakfast option.', image: pizzaImg })),
  dinner: SAMPLE_ITEMS.mains.map(item => ({ ...item, description: 'Enjoy this hearty dinner dish.', image: burgerImg })),
  food: [...SAMPLE_ITEMS.appetizers, ...SAMPLE_ITEMS.mains, ...SAMPLE_ITEMS.desserts].map(item => ({ ...item, description: 'A tasty food item from our menu.', image: foodImg }))
}

export default function Menu() {
// offsets (in px) to stagger the specials cards vertically
  const CARD_OFFSETS = [-40, 60, -40, 60]

  // connector line heights based on padding + offset
  const CONNECTOR_HEIGHTS = CARD_OFFSETS.map(offset => 100 + offset)

  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all')

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
        <div className="max-w-7xl mx-auto p-4 sm:p-6">
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
          </div>

          <div className="relative max-w-16xl mx-auto px-6 py-25">
            {CARD_OFFSETS.map((_, i) => (
              <div key={`connector-${i}`} className="hidden md:block absolute w-px bg-red-500" style={{ top: 0, left: `${12.5 + i * 25}%`, height: `${CONNECTOR_HEIGHTS[i]}px` }}>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full shadow-sm"></div>
              </div>
            ))}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {SPECIALS_ITEMS.map((item, idx) => {
                const offset = CARD_OFFSETS[idx % CARD_OFFSETS.length] ?? 0
                 return (
                 <div key={item.id} style={{ marginTop: `${offset}px` }} className="bg-white/95 rounded-lg shadow-lg p-4 flex flex-col items-stretch h-full min-h-[380px]">
                   <div className="flex items-center justify-center -mt-10 mb-4">
                    <div className="w-30 h-30 mt-10 bg-white rounded-full overflow-hidden flex items-center justify-center shadow-md">
                      <img src={item.image || menuImg} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                  </div>

                  <h4 className="text-center font-semibold">{item.title}</h4>
                  <p className="text-sm text-gray-600 text-center mt-5">{item.description}</p>

                  <div className="mt-auto pt-4 px-4 flex flex-col items-cente gap-3">
                    <div className="text-lg font-bold text-gray-800">Price {item.price}</div>
                    <button className="bg-red-600 text-white px-6 py-2 rounded-md shadow-sm hover:bg-red-700 transition-colors">Order Now</button>
                  </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Category buttons below specials menu */}
        <div className="flex  bg-gray-200 gap-40 justify-center py-3">
          {CATEGORIES.map(cat => (
            <button key={cat.id} onClick={() => setSelectedCategory(cat.id)} className={`px-4 py-2 text-black font-bold text-xl rounded-md ${selectedCategory === cat.id ? 'bg-red-600 text-white' : 'hover:bg-red-600 hover:text-white'} transition-colors`}>
              {cat.label}
            </button>
          ))}
        </div>

        {(() => {
          const items = selectedCategory === 'all' ? Object.values(MENU_ITEMS).flat() : MENU_ITEMS[selectedCategory as Exclude<CategoryId, 'all'>]
          const category = selectedCategory === 'all' ? null : CATEGORIES.find(c => c.id === selectedCategory)
          if (items.length === 0) return null
          const bgImage = category ? (selectedCategory === 'cocktails' ? DRINK_BG : FOOD_BG) : null
          return (
            <div className="max-w-7xl mx-auto p-6 mb-20 mt-5">
              {bgImage && (
                <div className="rounded-xl overflow-hidden ring-4 mb-4 shadow-lg">
                  
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {items.map(item => {
                  const priceParts = item.price.split(' ')
                  return (
                    <div key={item.id} className="bg-white border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow flex">
                      <div className="w-16 h-16 rounded-md overflow-hidden mr-4 flex-shrink-0">
                        <img src={item.image || menuImg} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h3 className="font-semibold text-lg">{item.title}</h3>
                          <div className="font-bold text-gray-800 text-lg text-right">
                            <div>{priceParts[0]}</div>
                            <div className="text-sm">{priceParts[1]}</div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })()}

      </main>

      {/* <Footer /> */}
    </div>
  )
}

