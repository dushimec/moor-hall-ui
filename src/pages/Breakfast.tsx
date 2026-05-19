import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import { useGuestInteraction } from '../context/GuestInteractionContext'
import break1Img from '../assets/break1.jpg'
import break2Img from '../assets/break2.jpg'

const BreakfastPage = () => {
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
            <h1 className="text-4xl font-bold text-gray-800">Breakfast Menu</h1>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Left Side - Featured Image */}
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <img src={break1Img} alt="Featured Breakfast" className="w-full h-130 object-cover" />
              </div>
          
            </div>

            {/* Right Side - Menu Cards */}
            <div className="space-y-4">
              <div onClick={() => navigate('/product', { state: { id: 'b1', title: 'Omelette', price: '15k Rwf', image: break1Img, description: 'Fluffy eggs with fresh vegetables and cheese' } })} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 cursor-pointer flex">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <img src={break1Img} alt="Omelette" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Omelette</h3>
                    <p className="text-sm text-gray-600 mt-1">Fluffy eggs with fresh vegetables and cheese</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">15k Rwf</div>
                </div>
                <div className="ml-4 flex items-center">
                  <button onClick={(e) => handleOrderNow({ id: 'b1', title: 'Omelette', price: '15k Rwf', image: break1Img, description: 'Fluffy eggs with fresh vegetables and cheese' }, e)} className="bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold hover:bg-red-700 transition">Order Now</button>
                </div>
              </div>
              <div onClick={() => navigate('/product', { state: { id: 'b2', title: 'Pancakes', price: '12k Rwf', image: break2Img, description: 'Golden pancakes with maple syrup and butter' } })} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 cursor-pointer flex">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <img src={break2Img} alt="Pancakes" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Pancakes</h3>
                    <p className="text-sm text-gray-600 mt-1">Golden pancakes with maple syrup and butter</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">12k Rwf</div>
                </div>
                <div className="ml-4 flex items-center">
                  <button onClick={(e) => handleOrderNow({ id: 'b2', title: 'Pancakes', price: '12k Rwf', image: break2Img, description: 'Golden pancakes with maple syrup and butter' }, e)} className="bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold hover:bg-red-700 transition">Order Now</button>
                </div>
              </div>
              <div onClick={() => navigate('/product', { state: { id: 'b3', title: 'Coffee', price: '3k Rwf', image: break1Img, description: 'Freshly brewed premium coffee' } })} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 cursor-pointer flex">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <img src={break1Img} alt="Coffee" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Coffee</h3>
                    <p className="text-sm text-gray-600 mt-1">Freshly brewed premium coffee</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">3k Rwf</div>
                </div>
                <div className="ml-4 flex items-center">
                  <button onClick={(e) => handleOrderNow({ id: 'b3', title: 'Coffee', price: '3k Rwf', image: break1Img, description: 'Freshly brewed premium coffee' }, e)} className="bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold hover:bg-red-700 transition">Order Now</button>
                </div>
              </div>
              <div onClick={() => navigate('/product', { state: { id: 'b4', title: 'Orange Juice', price: '4k Rwf', image: break2Img, description: 'Freshly squeezed orange juice' } })} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 cursor-pointer flex">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <img src={break2Img} alt="Orange Juice" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Orange Juice</h3>
                    <p className="text-sm text-gray-600 mt-1">Freshly squeezed orange juice</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">4k Rwf</div>
                </div>
                <div className="ml-4 flex items-center">
                  <button onClick={(e) => handleOrderNow({ id: 'b4', title: 'Orange Juice', price: '4k Rwf', image: break2Img, description: 'Freshly squeezed orange juice' }, e)} className="bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold hover:bg-red-700 transition">Order Now</button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side - Additional Menu Cards */}
            <div className="space-y-4 ">
              <div onClick={() => navigate('/product', { state: { id: 'b5', title: 'Croissant', price: '8k Rwf', image: break1Img, description: 'Buttery, flaky French pastry' } })} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 cursor-pointer flex">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <img src={break1Img} alt="Croissant" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Croissant</h3>
                    <p className="text-sm text-gray-600 mt-1">Buttery, flaky French pastry</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">8k Rwf</div>
                </div>
                <div className="ml-4 flex items-center">
                  <button onClick={(e) => handleOrderNow({ id: 'b5', title: 'Croissant', price: '8k Rwf', image: break1Img, description: 'Buttery, flaky French pastry' }, e)} className="bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold hover:bg-red-700 transition">Order Now</button>
                </div>
              </div>
              <div onClick={() => navigate('/product', { state: { id: 'b6', title: 'Toast', price: '5k Rwf', image: break2Img, description: 'Artisanal bread with butter and jam' } })} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 cursor-pointer flex">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <img src={break2Img} alt="Toast" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Toast</h3>
                    <p className="text-sm text-gray-600 mt-1">Artisanal bread with butter and jam</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">5k Rwf</div>
                </div>
                <div className="ml-4 flex items-center">
                  <button onClick={(e) => handleOrderNow({ id: 'b6', title: 'Toast', price: '5k Rwf', image: break2Img, description: 'Artisanal bread with butter and jam' }, e)} className="bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold hover:bg-red-700 transition">Order Now</button>
                </div>
              </div>
            </div>

            {/* Right Side - Large Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <img src={break2Img} alt="Croissant and Coffee" className="w-full h-120 object-cover" />
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}

export default BreakfastPage