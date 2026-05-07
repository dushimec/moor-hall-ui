import React from 'react'
import Navbar from '../components/layout/Navbar'
import break1Img from '../assets/break1.jpg'
import break2Img from '../assets/break2.jpg'
import cokImg from '../assets/cok.jpg'
import cok1Img from '../assets/cok1.jpg'
import chiefImg from '../assets/chief.jpg'
import welcomeImg from '../assets/welcome.jpg'

const CoffeeBeveragePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 bg-gray-50 pt-32">
        <div className="max-w-7xl mx-auto mb-10">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800">Coffee & Beverages Menu</h1>
            <p className="text-lg text-gray-600 mt-2">Premium selection of artisanal coffees and refreshing beverages</p>
          </div>

          {/* Hero Banner Section - Two large side-by-side images */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
            <div className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
              <img src={break1Img} alt="Premium Coffee Selection" className="w-full h-80 lg:h-96 object-cover" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
              <img src={cokImg} alt="Fresh Beverage Collection" className="w-full h-80 lg:h-96 object-cover" />
            </div>
          </div>

          {/* Menu Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                    <img src={break1Img} alt="Espresso" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Classic Espresso</h3>
                    <p className="text-sm text-gray-600 mt-1">Rich and bold shot of premium Italian espresso</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">3k Rwf</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                    <img src={break2Img} alt="Cappuccino" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Cappuccino</h3>
                    <p className="text-sm text-gray-600 mt-1">Espresso with steamed milk and frothy foam</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">5k Rwf</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                    <img src={break1Img} alt="Latte" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Café Latte</h3>
                    <p className="text-sm text-gray-600 mt-1">Smooth espresso with steamed milk and light foam</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">6k Rwf</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                    <img src={break2Img} alt="Americano" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Americano</h3>
                    <p className="text-sm text-gray-600 mt-1">Espresso diluted with hot water for milder taste</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">4k Rwf</div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                    <img src={welcomeImg} alt="Green Tea" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Premium Green Tea</h3>
                    <p className="text-sm text-gray-600 mt-1">Organic Japanese green tea, antioxidant-rich</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">4k Rwf</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                    <img src={chiefImg} alt="Hot Chocolate" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Belgian Hot Chocolate</h3>
                    <p className="text-sm text-gray-600 mt-1">Rich Belgian chocolate with whipped cream</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">7k Rwf</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                    <img src={cokImg} alt="Fresh Juice" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Fresh Orange Juice</h3>
                    <p className="text-sm text-gray-600 mt-1">Freshly squeezed oranges, no preservatives</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">5k Rwf</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                    <img src={cok1Img} alt="Smoothie" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Tropical Smoothie</h3>
                    <p className="text-sm text-gray-600 mt-1">Banana, mango, and pineapple blend</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">8k Rwf</div>
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