import React from 'react'
import Navbar from '../components/layout/Navbar'
import break1Img from '../assets/break1.jpg'
import break2Img from '../assets/break2.jpg'

const BreakfastPage = () => {
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
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <img src={break1Img} alt="Omelette" className="w-full h-80 object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Omelette</h3>
                    <p className="text-sm text-gray-600 mt-1">Fluffy eggs with fresh vegetables and cheese</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">15k Rwf</div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <img src={break2Img} alt="Pancakes" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Pancakes</h3>
                    <p className="text-sm text-gray-600 mt-1">Golden pancakes with maple syrup and butter</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">12k Rwf</div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <img src={break1Img} alt="Coffee" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Coffee</h3>
                    <p className="text-sm text-gray-600 mt-1">Freshly brewed premium coffee</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">3k Rwf</div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <img src={break2Img} alt="Orange Juice" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Orange Juice</h3>
                    <p className="text-sm text-gray-600 mt-1">Freshly squeezed orange juice</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">4k Rwf</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side - Additional Menu Cards */}
            <div className="space-y-4 ">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <img src={break1Img} alt="Croissant" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Croissant</h3>
                    <p className="text-sm text-gray-600 mt-1">Buttery, flaky French pastry</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">8k Rwf</div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <img src={break2Img} alt="Toast" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Toast</h3>
                    <p className="text-sm text-gray-600 mt-1">Artisanal bread with butter and jam</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">5k Rwf</div>
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