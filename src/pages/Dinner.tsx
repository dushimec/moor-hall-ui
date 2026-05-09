import React from 'react'
import Navbar from '../components/layout/Navbar'
import lunchImg from '../assets/lunch.jpg'
import lunch1Img from '../assets/lunch1.jpg'
import chiefImg from '../assets/chief.jpg'
import betweenImg from '../assets/between.jpg'
import welcomeImg from '../assets/welcome.jpg'

const DinnerPage = () => {
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
              <img src={lunchImg} alt="Seafood Dinner Specialties" className="w-full h-80 lg:h-96 object-cover" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
              <img src={chiefImg} alt="Chef's Premium Dinner Creations" className="w-full h-80 lg:h-96 object-cover" />
            </div>
          </div>
          {/* Menu Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                    <img src={lunchImg} alt="Grilled Salmon" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Grilled Salmon</h3>
                    <p className="text-sm text-gray-600 mt-1">Atlantic salmon with lemon herb butter and asparagus</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">42k Rwf</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                    <img src={chiefImg} alt="Filet Mignon" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Filet Mignon</h3>
                    <p className="text-sm text-gray-600 mt-1">Prime beef tenderloin with red wine reduction</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">55k Rwf</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                    <img src={lunch1Img} alt="Lobster Ravioli" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Lobster Ravioli</h3>
                    <p className="text-sm text-gray-600 mt-1">Homemade pasta filled with lobster in cream sauce</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">38k Rwf</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                    <img src={betweenImg} alt="Duck Confit" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Duck Confit</h3>
                    <p className="text-sm text-gray-600 mt-1">Slow-cooked duck leg with cherry gastrique</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">45k Rwf</div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                    <img src={lunchImg} alt="Seafood Paella" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Seafood Paella</h3>
                    <p className="text-sm text-gray-600 mt-1">Spanish rice with shrimp, mussels, and saffron</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">48k Rwf</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                    <img src={chiefImg} alt="Beef Wellington" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Beef Wellington</h3>
                    <p className="text-sm text-gray-600 mt-1">Puff pastry wrapped beef with mushroom duxelles</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">52k Rwf</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                    <img src={welcomeImg} alt="Truffle Risotto" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Truffle Risotto</h3>
                    <p className="text-sm text-gray-600 mt-1">Creamy Arborio rice with black truffle and parmesan</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">35k Rwf</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                    <img src={betweenImg} alt="Chocolate Soufflé" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">Chocolate Soufflé</h3>
                    <p className="text-sm text-gray-600 mt-1">Warm chocolate soufflé with vanilla ice cream</p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">22k Rwf</div>
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