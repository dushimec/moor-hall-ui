import React from 'react'
import Navbar from '../components/layout/Navbar'
import lunchImg from '../assets/lunch.jpg'
import lunch1Img from '../assets/lunch1.jpg'

const LunchPage = () => {
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
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-md">
                    <img src={lunchImg} alt="Grilled Chicken" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Grilled Chicken</h3>
                    <p className="text-sm text-gray-600 mt-1">Herb-marinated chicken breast with roasted vegetables</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">25k Rwf</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-md">
                    <img src={lunch1Img} alt="Steak" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Grilled Steak</h3>
                    <p className="text-sm text-gray-600 mt-1">Juicy ribeye steak with garlic butter and herbs</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">35k Rwf</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-md">
                    <img src={lunchImg} alt="Sausages" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">BBQ Sausages</h3>
                    <p className="text-sm text-gray-600 mt-1">Smoked sausages with caramelized onions</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">18k Rwf</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-md">
                    <img src={lunch1Img} alt="Loaded Fries" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Loaded Fries</h3>
                    <p className="text-sm text-gray-600 mt-1">Crispy fries topped with cheese and bacon</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">12k Rwf</div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-md">
                    <img src={lunchImg} alt="BBQ Ribs" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">BBQ Ribs</h3>
                    <p className="text-sm text-gray-600 mt-1">Slow-cooked pork ribs with tangy BBQ sauce</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">28k Rwf</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-md">
                    <img src={lunch1Img} alt="Grilled Vegetables" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Grilled Vegetables</h3>
                    <p className="text-sm text-gray-600 mt-1">Seasonal vegetables grilled to perfection</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">10k Rwf</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-md">
                    <img src={lunchImg} alt="Burger" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Classic Burger</h3>
                    <p className="text-sm text-gray-600 mt-1">Beef patty with lettuce, tomato, and special sauce</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">15k Rwf</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-md">
                    <img src={lunch1Img} alt="Caesar Salad" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Caesar Salad</h3>
                    <p className="text-sm text-gray-600 mt-1">Crisp romaine lettuce with parmesan and croutons</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">14k Rwf</div>
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