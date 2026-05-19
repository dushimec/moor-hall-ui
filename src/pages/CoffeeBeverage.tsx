import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import { useGuestInteraction } from '../context/GuestInteractionContext'
import cokImg from '../assets/cok.jpg'
import cok1Img from '../assets/cok1.jpg'

const CoffeeBeveragePage = () => {
  const navigate = useNavigate()
  const { quickCheckout } = useGuestInteraction()

  const parsePrice = (priceStr: string) => {
    const clean = priceStr.replace('k', '').replace(' Rwf', '').trim()
    const num = parseFloat(clean)
    return priceStr.includes('k') ? num * 1000 : num
  }

  const handleOrderNow = (item: any, e: React.MouseEvent) => {
    e.stopPropagation()
    const price = parsePrice(item.price)
    quickCheckout({
      id: `cart_${item.id}_${Date.now()}`,
      menuItemId: item.id,
      name: item.title,
      price,
      quantity: 1,
    })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 bg-gray-50 pt-32">
        <div className="max-w-7xl mx-auto mb-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800">Coffee & Beverages</h1>
            <p className="text-lg text-gray-600 mt-2">Premium selection of artisanal coffees and refreshing beverages</p>
          </div>
          {/* Hero Banner Section - Two large side-by-side images */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
            <div className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
              <img src={cokImg} alt="Artisanal Coffee Experience" className="w-full h-80 lg:h-96 object-cover" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
              <img src={cok1Img} alt="Premium Beverage Selection" className="w-full h-80 lg:h-96 object-cover" />
            </div>
          </div>
          {/* Menu Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-4">
              <div onClick={() => navigate('/product', { state: { id: 'cb1', title: 'Classic Espresso', price: '8k Rwf', image: 'https://images.unsplash.com/photo-1459755486867-b55449bb39ff?auto=format&fit=crop&q=80&w=400&h=400', description: 'Rich and bold single shot espresso made from premium beans' } })} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200 cursor-pointer flex">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-md">
                    <img src="https://images.unsplash.com/photo-1459755486867-b55449bb39ff?auto=format&fit=crop&q=80&w=400&h=400" alt="Espresso" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Classic Espresso</h3>
                    <p className="text-sm text-gray-600 mt-1">Rich and bold single shot espresso made from premium beans</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">8k Rwf</div>
                </div>
                <div className="ml-4 flex items-center">
                  <button onClick={(e) => handleOrderNow({ id: 'cb1', title: 'Classic Espresso', price: '8k Rwf', image: 'https://images.unsplash.com/photo-1459755486867-b55449bb39ff?auto=format&fit=crop&q=80&w=400&h=400', description: 'Rich and bold single shot espresso made from premium beans' }, e)} className="bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold hover:bg-red-700 transition">Order Now</button>
                </div>
              </div>

              <div onClick={() => navigate('/product', { state: { id: 'cb2', title: 'Creamy Cappuccino', price: '12k Rwf', image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=400&h=400', description: 'Espresso with steamed milk and thick foam topping' } })} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200 cursor-pointer flex">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-md">
                    <img src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=400&h=400" alt="Cappuccino" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Creamy Cappuccino</h3>
                    <p className="text-sm text-gray-600 mt-1">Espresso with steamed milk and thick foam topping</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">12k Rwf</div>
                </div>
                <div className="ml-4 flex items-center">
                  <button onClick={(e) => handleOrderNow({ id: 'cb2', title: 'Creamy Cappuccino', price: '12k Rwf', image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=400&h=400', description: 'Espresso with steamed milk and thick foam topping' }, e)} className="bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold hover:bg-red-700 transition">Order Now</button>
                </div>
              </div>

              <div onClick={() => navigate('/product', { state: { id: 'cb3', title: 'Vanilla Latte', price: '15k Rwf', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=400&h=400', description: 'Smooth espresso with steamed milk and vanilla syrup' } })} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200 cursor-pointer flex">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-md">
                    <img src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=400&h=400" alt="Latte" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Vanilla Latte</h3>
                    <p className="text-sm text-gray-600 mt-1">Smooth espresso with steamed milk and vanilla syrup</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">15k Rwf</div>
                </div>
                <div className="ml-4 flex items-center">
                  <button onClick={(e) => handleOrderNow({ id: 'cb3', title: 'Vanilla Latte', price: '15k Rwf', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=400&h=400', description: 'Smooth espresso with steamed milk and vanilla syrup' }, e)} className="bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold hover:bg-red-700 transition">Order Now</button>
                </div>
              </div>

              <div onClick={() => navigate('/product', { state: { id: 'cb4', title: 'Iced Americano', price: '10k Rwf', image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=400&h=400', description: 'Chilled espresso diluted with cold water over ice' } })} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200 cursor-pointer flex">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-md">
                    <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=400&h=400" alt="Americano" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Iced Americano</h3>
                    <p className="text-sm text-gray-600 mt-1">Chilled espresso diluted with cold water over ice</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">10k Rwf</div>
                </div>
                <div className="ml-4 flex items-center">
                  <button onClick={(e) => handleOrderNow({ id: 'cb4', title: 'Iced Americano', price: '10k Rwf', image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=400&h=400', description: 'Chilled espresso diluted with cold water over ice' }, e)} className="bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold hover:bg-red-700 transition">Order Now</button>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div onClick={() => navigate('/product', { state: { id: 'cb5', title: 'Fresh Orange Juice', price: '14k Rwf', image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80&w=400&h=400', description: 'Freshly squeezed oranges, no preservatives added' } })} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200 cursor-pointer flex">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-md">
                    <img src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80&w=400&h=400" alt="Fresh Juice" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Fresh Orange Juice</h3>
                    <p className="text-sm text-gray-600 mt-1">Freshly squeezed oranges, no preservatives added</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">14k Rwf</div>
                </div>
                <div className="ml-4 flex items-center">
                  <button onClick={(e) => handleOrderNow({ id: 'cb5', title: 'Fresh Orange Juice', price: '14k Rwf', image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80&w=400&h=400', description: 'Freshly squeezed oranges, no preservatives added' }, e)} className="bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold hover:bg-red-700 transition">Order Now</button>
                </div>
              </div>

              <div onClick={() => navigate('/product', { state: { id: 'cb6', title: 'Berry Blast Smoothie', price: '18k Rwf', image: 'https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&q=80&w=400&h=400', description: 'Mixed berries, yogurt, and honey blended to perfection' } })} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200 cursor-pointer flex">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-md">
                    <img src="https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&q=80&w=400&h=400" alt="Smoothie" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Berry Blast Smoothie</h3>
                    <p className="text-sm text-gray-600 mt-1">Mixed berries, yogurt, and honey blended to perfection</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">18k Rwf</div>
                </div>
                <div className="ml-4 flex items-center">
                  <button onClick={(e) => handleOrderNow({ id: 'cb6', title: 'Berry Blast Smoothie', price: '18k Rwf', image: 'https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&q=80&w=400&h=400', description: 'Mixed berries, yogurt, and honey blended to perfection' }, e)} className="bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold hover:bg-red-700 transition">Order Now</button>
                </div>
              </div>

              <div onClick={() => navigate('/product', { state: { id: 'cb7', title: 'Chamomile Tea', price: '9k Rwf', image: 'https://images.unsplash.com/photo-1553909489-cd47e9adb6cc?auto=format&fit=crop&q=80&w=400&h=400', description: 'Relaxing herbal tea with natural calming properties' } })} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200 cursor-pointer flex">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-md">
                    <img src="https://images.unsplash.com/photo-1553909489-cd47e9adb6cc?auto=format&fit=crop&q=80&w=400&h=400" alt="Herbal Tea" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Chamomile Tea</h3>
                    <p className="text-sm text-gray-600 mt-1">Relaxing herbal tea with natural calming properties</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">9k Rwf</div>
                </div>
                <div className="ml-4 flex items-center">
                  <button onClick={(e) => handleOrderNow({ id: 'cb7', title: 'Chamomile Tea', price: '9k Rwf', image: 'https://images.unsplash.com/photo-1553909489-cd47e9adb6cc?auto=format&fit=crop&q=80&w=400&h=400', description: 'Relaxing herbal tea with natural calming properties' }, e)} className="bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold hover:bg-red-700 transition">Order Now</button>
                </div>
              </div>

              <div onClick={() => navigate('/product', { state: { id: 'cb8', title: 'Matcha Latte', price: '16k Rwf', image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=400&h=400', description: 'Premium Japanese matcha with steamed milk and honey' } })} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200 cursor-pointer flex">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-md">
                    <img src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=400&h=400" alt="Specialty Drink" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Matcha Latte</h3>
                    <p className="text-sm text-gray-600 mt-1">Premium Japanese matcha with steamed milk and honey</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">16k Rwf</div>
                </div>
                <div className="ml-4 flex items-center">
                  <button onClick={(e) => handleOrderNow({ id: 'cb8', title: 'Matcha Latte', price: '16k Rwf', image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=400&h=400', description: 'Premium Japanese matcha with steamed milk and honey' }, e)} className="bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold hover:bg-red-700 transition">Order Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CoffeeBeveragePage