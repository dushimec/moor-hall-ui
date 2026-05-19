import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import { useGuestInteraction } from '../context/GuestInteractionContext'
import lunchImg from '../assets/lunch.jpg'
import lunch1Img from '../assets/lunch1.jpg'

const LunchPage = () => {
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
             {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800">Lunch Menu</h1>
            <p className="text-lg text-gray-600 mt-2">Grilled to perfection with fresh ingredients</p>
          </div>
          {/* Hero Banner Section - Two large side-by-side images */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            <div className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
              <img src={lunchImg} alt="Grilled Meat Platter" className="w-full h-80 lg:h-96 object-cover" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
              <img src={lunch1Img} alt="BBQ Feast" className="w-full h-80 lg:h-96 object-cover" />
            </div>
          </div>
          {/* Menu Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-4">
              <div onClick={() => navigate('/product', { state: { id: 'l1', title: 'Grilled Chicken', price: '25k Rwf', image: lunchImg, description: 'Herb-marinated chicken breast with roasted vegetables' } })} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200 cursor-pointer flex">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-md">
                    <img src={lunchImg} alt="Grilled Chicken" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Grilled Chicken</h3>
                    <p className="text-sm text-gray-600 mt-1">Herb-marinated chicken breast with roasted vegetables</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">25k Rwf</div>
                </div>
                <div className="ml-4 flex items-center">
                  <button onClick={(e) => handleOrderNow({ id: 'l1', title: 'Grilled Chicken', price: '25k Rwf', image: lunchImg, description: 'Herb-marinated chicken breast with roasted vegetables' }, e)} className="bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold hover:bg-red-700 transition">Order Now</button>
                </div>
              </div>

              <div onClick={() => navigate('/product', { state: { id: 'l2', title: 'Grilled Steak', price: '35k Rwf', image: lunch1Img, description: 'Juicy ribeye steak with garlic butter and herbs' } })} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200 cursor-pointer flex">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-md">
                    <img src={lunch1Img} alt="Steak" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Grilled Steak</h3>
                    <p className="text-sm text-gray-600 mt-1">Juicy ribeye steak with garlic butter and herbs</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">35k Rwf</div>
                </div>
                <div className="ml-4 flex items-center">
                  <button onClick={(e) => handleOrderNow({ id: 'l2', title: 'Grilled Steak', price: '35k Rwf', image: lunch1Img, description: 'Juicy ribeye steak with garlic butter and herbs' }, e)} className="bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold hover:bg-red-700 transition">Order Now</button>
                </div>
              </div>

              <div onClick={() => navigate('/product', { state: { id: 'l3', title: 'BBQ Sausages', price: '18k Rwf', image: lunchImg, description: 'Smoked sausages with caramelized onions' } })} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200 cursor-pointer flex">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-md">
                    <img src={lunchImg} alt="Sausages" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">BBQ Sausages</h3>
                    <p className="text-sm text-gray-600 mt-1">Smoked sausages with caramelized onions</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">18k Rwf</div>
                </div>
                <div className="ml-4 flex items-center">
                  <button onClick={(e) => handleOrderNow({ id: 'l3', title: 'BBQ Sausages', price: '18k Rwf', image: lunchImg, description: 'Smoked sausages with caramelized onions' }, e)} className="bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold hover:bg-red-700 transition">Order Now</button>
                </div>
              </div>

              <div onClick={() => navigate('/product', { state: { id: 'l4', title: 'Loaded Fries', price: '12k Rwf', image: lunch1Img, description: 'Crispy fries topped with cheese and bacon' } })} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200 cursor-pointer flex">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-md">
                    <img src={lunch1Img} alt="Loaded Fries" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Loaded Fries</h3>
                    <p className="text-sm text-gray-600 mt-1">Crispy fries topped with cheese and bacon</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">12k Rwf</div>
                </div>
                <div className="ml-4 flex items-center">
                  <button onClick={(e) => handleOrderNow({ id: 'l4', title: 'Loaded Fries', price: '12k Rwf', image: lunch1Img, description: 'Crispy fries topped with cheese and bacon' }, e)} className="bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold hover:bg-red-700 transition">Order Now</button>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div onClick={() => navigate('/product', { state: { id: 'l5', title: 'BBQ Ribs', price: '28k Rwf', image: lunchImg, description: 'Slow-cooked pork ribs with tangy BBQ sauce' } })} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200 cursor-pointer flex">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-md">
                    <img src={lunchImg} alt="BBQ Ribs" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">BBQ Ribs</h3>
                    <p className="text-sm text-gray-600 mt-1">Slow-cooked pork ribs with tangy BBQ sauce</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">28k Rwf</div>
                </div>
                <div className="ml-4 flex items-center">
                  <button onClick={(e) => handleOrderNow({ id: 'l5', title: 'BBQ Ribs', price: '28k Rwf', image: lunchImg, description: 'Slow-cooked pork ribs with tangy BBQ sauce' }, e)} className="bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold hover:bg-red-700 transition">Order Now</button>
                </div>
              </div>

              <div onClick={() => navigate('/product', { state: { id: 'l6', title: 'Grilled Vegetables', price: '10k Rwf', image: lunch1Img, description: 'Seasonal vegetables grilled to perfection' } })} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200 cursor-pointer flex">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-md">
                    <img src={lunch1Img} alt="Grilled Vegetables" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Grilled Vegetables</h3>
                    <p className="text-sm text-gray-600 mt-1">Seasonal vegetables grilled to perfection</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">10k Rwf</div>
                </div>
                <div className="ml-4 flex items-center">
                  <button onClick={(e) => handleOrderNow({ id: 'l6', title: 'Grilled Vegetables', price: '10k Rwf', image: lunch1Img, description: 'Seasonal vegetables grilled to perfection' }, e)} className="bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold hover:bg-red-700 transition">Order Now</button>
                </div>
              </div>

              <div onClick={() => navigate('/product', { state: { id: 'l7', title: 'Classic Burger', price: '15k Rwf', image: lunchImg, description: 'Beef patty with lettuce, tomato, and special sauce' } })} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200 cursor-pointer flex">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-md">
                    <img src={lunchImg} alt="Burger" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Classic Burger</h3>
                    <p className="text-sm text-gray-600 mt-1">Beef patty with lettuce, tomato, and special sauce</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">15k Rwf</div>
                </div>
                <div className="ml-4 flex items-center">
                  <button onClick={(e) => handleOrderNow({ id: 'l7', title: 'Classic Burger', price: '15k Rwf', image: lunchImg, description: 'Beef patty with lettuce, tomato, and special sauce' }, e)} className="bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold hover:bg-red-700 transition">Order Now</button>
                </div>
              </div>

              <div onClick={() => navigate('/product', { state: { id: 'l8', title: 'Caesar Salad', price: '14k Rwf', image: lunch1Img, description: 'Crisp romaine lettuce with parmesan and croutons' } })} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200 cursor-pointer flex">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-md">
                    <img src={lunch1Img} alt="Caesar Salad" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Caesar Salad</h3>
                    <p className="text-sm text-gray-600 mt-1">Crisp romaine lettuce with parmesan and croutons</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">14k Rwf</div>
                </div>
                <div className="ml-4 flex items-center">
                  <button onClick={(e) => handleOrderNow({ id: 'l8', title: 'Caesar Salad', price: '14k Rwf', image: lunch1Img, description: 'Crisp romaine lettuce with parmesan and croutons' }, e)} className="bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold hover:bg-red-700 transition">Order Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default LunchPage