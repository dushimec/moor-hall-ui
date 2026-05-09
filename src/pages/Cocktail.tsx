import React from 'react'
import Navbar from '../components/layout/Navbar'
import cokImg from '../assets/cok.jpg'
import cok1Img from '../assets/cok1.jpg'

const CocktailPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 bg-gray-50 pt-32">
        <div className="max-w-7xl mx-auto mb-10">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800">Cocktail Menu</h1>
            <p className="text-lg text-gray-600 mt-2">Crafted with premium spirits and fresh ingredients</p>
          </div>

          {/* Asymmetrical Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Bottom Left Featured Image */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="relative">
                {/* Geometric Frame with Angled Cut */}
                <div className="relative bg-black p-4 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-white p-2">
                    <div className="overflow-hidden shadow-2xl">
                      <img
                        src={cok1Img}
                        alt="Stylish Red Cocktail"
                        className="w-full h-80 object-cover transform -rotate-1 hover:rotate-0 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
                {/* Decorative element */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full opacity-80"></div>
              </div>
            </div>

            {/* Top Right Featured Image */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="relative">
                {/* Geometric Frame with Angled Cut */}
                <div className="relative bg-black p-4 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-white p-2">
                    <div className="overflow-hidden shadow-2xl">
                      <img
                        src={cokImg}
                        alt="Luxury Cocktails Display"
                        className="w-full h-96 object-cover transform rotate-1 hover:rotate-0 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-400 rounded-full opacity-60"></div>
                <div className="absolute -top-4 -right-4 w-4 h-4 bg-orange-300 rounded-full opacity-40"></div>
              </div>
            </div>
          </div>

          {/* Menu Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* Mojito */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 shadow-md border-2 border-gray-100">
                  <img src={cokImg} alt="Mojito" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">Classic Mojito</h3>
                  <p className="text-sm text-gray-600 mt-1">Fresh mint, lime, sugar, and premium rum</p>
                </div>
                <div className="text-lg font-bold text-orange-600">8k Rwf</div>
              </div>
            </div>

            {/* Berry Martini */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 shadow-md border-2 border-gray-100">
                  <img src={cok1Img} alt="Berry Martini" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">Berry Martini</h3>
                  <p className="text-sm text-gray-600 mt-1">Mixed berries, vodka, and a hint of citrus</p>
                </div>
                <div className="text-lg font-bold text-orange-600">10k Rwf</div>
              </div>
            </div>

            {/* Cosmopolitan */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 shadow-md border-2 border-gray-100">
                  <img src={cokImg} alt="Cosmopolitan" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">Cosmopolitan</h3>
                  <p className="text-sm text-gray-600 mt-1">Vodka, cranberry, lime, and triple sec</p>
                </div>
                <div className="text-lg font-bold text-orange-600">9k Rwf</div>
              </div>
            </div>

            {/* Old Fashioned */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 shadow-md border-2 border-gray-100">
                  <img src={cok1Img} alt="Old Fashioned" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">Old Fashioned</h3>
                  <p className="text-sm text-gray-600 mt-1">Bourbon, sugar, bitters, and orange peel</p>
                </div>
                <div className="text-lg font-bold text-orange-600">11k Rwf</div>
              </div>
            </div>

            {/* Margarita */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 shadow-md border-2 border-gray-100">
                  <img src={cokImg} alt="Margarita" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">Classic Margarita</h3>
                  <p className="text-sm text-gray-600 mt-1">Tequila, lime juice, and triple sec</p>
                </div>
                <div className="text-lg font-bold text-orange-600">9k Rwf</div>
              </div>
            </div>

            {/* Espresso Martini */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 shadow-md border-2 border-gray-100">
                  <img src={cok1Img} alt="Espresso Martini" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">Espresso Martini</h3>
                  <p className="text-sm text-gray-600 mt-1">Vodka, coffee liqueur, and fresh espresso</p>
                </div>
                <div className="text-lg font-bold text-orange-600">12k Rwf</div>
              </div>
            </div>

            {/* Negroni */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 shadow-md border-2 border-gray-100">
                  <img src={cokImg} alt="Negroni" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">Negroni</h3>
                  <p className="text-sm text-gray-600 mt-1">Gin, Campari, and sweet vermouth</p>
                </div>
                <div className="text-lg font-bold text-orange-600">10k Rwf</div>
              </div>
            </div>

            {/* Aperol Spritz */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 shadow-md border-2 border-gray-100">
                  <img src={cok1Img} alt="Aperol Spritz" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">Aperol Spritz</h3>
                  <p className="text-sm text-gray-600 mt-1">Aperol, prosecco, and soda water</p>
                </div>
                <div className="text-lg font-bold text-orange-600">8k Rwf</div>
              </div>
            </div>

            {/* Whiskey Sour */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 shadow-md border-2 border-gray-100">
                  <img src={cokImg} alt="Whiskey Sour" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">Whiskey Sour</h3>
                  <p className="text-sm text-gray-600 mt-1">Bourbon, lemon juice, and simple syrup</p>
                </div>
                <div className="text-lg font-bold text-orange-600">9k Rwf</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CocktailPage