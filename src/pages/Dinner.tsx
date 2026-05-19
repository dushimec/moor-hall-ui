import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import { useGuestInteraction } from '../context/GuestInteractionContext'
import menuImg from '../assets/menu.jpg'
import chiefImg from '../assets/chief.jpg'

const DinnerPage = () => {
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
            <h1 className="text-4xl font-bold text-gray-800">Dinner Menu</h1>
            <p className="text-lg text-gray-600 mt-2">Elegant dining experience with our finest selections</p>
          </div>
          {/* Hero Banner Section - Two large side-by-side images */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
            <div className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
              <img src={menuImg} alt="Fine Dining Experience" className="w-full h-80 lg:h-96 object-cover" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
              <img src={chiefImg} alt="Chef's Special Dinner" className="w-full h-80 lg:h-96 object-cover" />
            </div>
          </div>
          {/* Menu Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-4">
              <div onClick={() => navigate('/product', { state: { id: 'd1', title: 'Grilled Salmon', price: '42k Rwf', image: menuImg, description: 'Atlantic salmon with lemon herb butter and asparagus' } })} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200 cursor-pointer flex">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-md">
                    <img src={menuImg} alt="Grilled Salmon" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Grilled Salmon</h3>
                    <p className="text-sm text-gray-600 mt-1">Atlantic salmon with lemon herb butter and asparagus</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">42k Rwf</div>
                </div>
                <div className="ml-4 flex items-center">
                  <button onClick={(e) => handleOrderNow({ id: 'd1', title: 'Grilled Salmon', price: '42k Rwf', image: menuImg, description: 'Atlantic salmon with lemon herb butter and asparagus' }, e)} className="bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold hover:bg-red-700 transition">Order Now</button>
                </div>
              </div>

              <div onClick={() => navigate('/product', { state: { id: 'd2', title: 'Filet Mignon', price: '55k Rwf', image: chiefImg, description: 'Prime beef tenderloin with red wine reduction' } })} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200 cursor-pointer flex">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-md">
                    <img src={chiefImg} alt="Filet Mignon" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Filet Mignon</h3>
                    <p className="text-sm text-gray-600 mt-1">Prime beef tenderloin with red wine reduction</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">55k Rwf</div>
                </div>
                <div className="ml-4 flex items-center">
                  <button onClick={(e) => handleOrderNow({ id: 'd2', title: 'Filet Mignon', price: '55k Rwf', image: chiefImg, description: 'Prime beef tenderloin with red wine reduction' }, e)} className="bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold hover:bg-red-700 transition">Order Now</button>
                </div>
              </div>

              <div onClick={() => navigate('/product', { state: { id: 'd3', title: 'Lobster Ravioli', price: '38k Rwf', image: menuImg, description: 'Homemade pasta filled with lobster in cream sauce' } })} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200 cursor-pointer flex">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-md">
                    <img src={menuImg} alt="Lobster Ravioli" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Lobster Ravioli</h3>
                    <p className="text-sm text-gray-600 mt-1">Homemade pasta filled with lobster in cream sauce</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">38k Rwf</div>
                </div>
                <div className="ml-4 flex items-center">
                  <button onClick={(e) => handleOrderNow({ id: 'd3', title: 'Lobster Ravioli', price: '38k Rwf', image: menuImg, description: 'Homemade pasta filled with lobster in cream sauce' }, e)} className="bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold hover:bg-red-700 transition">Order Now</button>
                </div>
              </div>

              <div onClick={() => navigate('/product', { state: { id: 'd4', title: 'Duck Confit', price: '45k Rwf', image: chiefImg, description: 'Slow-cooked duck leg with cherry gastrique' } })} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200 cursor-pointer flex">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-md">
                    <img src={chiefImg} alt="Duck Confit" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Duck Confit</h3>
                    <p className="text-sm text-gray-600 mt-1">Slow-cooked duck leg with cherry gastrique</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">45k Rwf</div>
                </div>
                <div className="ml-4 flex items-center">
                  <button onClick={(e) => handleOrderNow({ id: 'd4', title: 'Duck Confit', price: '45k Rwf', image: chiefImg, description: 'Slow-cooked duck leg with cherry gastrique' }, e)} className="bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold hover:bg-red-700 transition">Order Now</button>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div onClick={() => navigate('/product', { state: { id: 'd5', title: 'Seafood Paella', price: '48k Rwf', image: menuImg, description: 'Spanish rice with shrimp, mussels, and saffron' } })} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200 cursor-pointer flex">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-md">
                    <img src={menuImg} alt="Seafood Paella" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Seafood Paella</h3>
                    <p className="text-sm text-gray-600 mt-1">Spanish rice with shrimp, mussels, and saffron</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">48k Rwf</div>
                </div>
                <div className="ml-4 flex items-center">
                  <button onClick={(e) => handleOrderNow({ id: 'd5', title: 'Seafood Paella', price: '48k Rwf', image: menuImg, description: 'Spanish rice with shrimp, mussels, and saffron' }, e)} className="bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold hover:bg-red-700 transition">Order Now</button>
                </div>
              </div>

              <div onClick={() => navigate('/product', { state: { id: 'd6', title: 'Beef Wellington', price: '52k Rwf', image: chiefImg, description: 'Puff pastry wrapped beef with mushroom duxelles' } })} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200 cursor-pointer flex">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-md">
                    <img src={chiefImg} alt="Beef Wellington" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Beef Wellington</h3>
                    <p className="text-sm text-gray-600 mt-1">Puff pastry wrapped beef with mushroom duxelles</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">52k Rwf</div>
                </div>
                <div className="ml-4 flex items-center">
                  <button onClick={(e) => handleOrderNow({ id: 'd6', title: 'Beef Wellington', price: '52k Rwf', image: chiefImg, description: 'Puff pastry wrapped beef with mushroom duxelles' }, e)} className="bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold hover:bg-red-700 transition">Order Now</button>
                </div>
              </div>

              <div onClick={() => navigate('/product', { state: { id: 'd7', title: 'Truffle Risotto', price: '35k Rwf', image: menuImg, description: 'Creamy Arborio rice with black truffle and parmesan' } })} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200 cursor-pointer flex">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-md">
                    <img src={menuImg} alt="Truffle Risotto" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Truffle Risotto</h3>
                    <p className="text-sm text-gray-600 mt-1">Creamy Arborio rice with black truffle and parmesan</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">35k Rwf</div>
                </div>
                <div className="ml-4 flex items-center">
                  <button onClick={(e) => handleOrderNow({ id: 'd7', title: 'Truffle Risotto', price: '35k Rwf', image: menuImg, description: 'Creamy Arborio rice with black truffle and parmesan' }, e)} className="bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold hover:bg-red-700 transition">Order Now</button>
                </div>
              </div>

              <div onClick={() => navigate('/product', { state: { id: 'd8', title: 'Chocolate Soufflé', price: '22k Rwf', image: chiefImg, description: 'Warm chocolate soufflé with vanilla ice cream' } })} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200 cursor-pointer flex">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-md">
                    <img src={chiefImg} alt="Chocolate Soufflé" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Chocolate Soufflé</h3>
                    <p className="text-sm text-gray-600 mt-1">Warm chocolate soufflé with vanilla ice cream</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">22k Rwf</div>
                </div>
                <div className="ml-4 flex items-center">
                  <button onClick={(e) => handleOrderNow({ id: 'd8', title: 'Chocolate Soufflé', price: '22k Rwf', image: chiefImg, description: 'Warm chocolate soufflé with vanilla ice cream' }, e)} className="bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold hover:bg-red-700 transition">Order Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default DinnerPage