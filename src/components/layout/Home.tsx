import React from 'react'
import { useNavigate } from 'react-router-dom'
import yoga from '../../assets/welcome.jpg'
import chief from '../../assets/chief.jpg'
import pizza from '../../assets/pizza.png'
import burger from '../../assets/burger.png'
import menu from '../../assets/menu.png'
import resto from '../../assets/resto.png'

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
    <section className="relative h-full overflow-hidden">
      {/* Grainy texture background */}
      <div 
        className="absolute inset-0" 
        style={{ 
          backgroundColor: '#e9e9e7',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundBlendMode: 'soft-light',
          opacity: 0.95
        }}
      />
      
      {/* Bottom black textured section */}
      <div 
        className="absolute bottom-0 left-0 w-full h-48"
        style={{
          background: 'linear-gradient(to right, #0a0a0a, #1a1a1a)',
          clipPath: 'polygon(0 80%, 100% 0%, 100% 100%, 0 100%)'
        }}
      >
        <div 
          className="absolute inset-0 opacity-30"
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter2)'/%3E%3C/svg%3E")`
          }}
        />
       
      </div>

      {/* Gold border frame */}
    <div className="absolute inset-2 pointer-events-none z-10  rounded-xl" />

      <div className="relative z-0 max-w-7xl mx-auto px-8 py-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-50">
          {/* Text Content */}
          <div className=" rounded-none shadow-lg px-6 py-8" style={{ clipPath: 'polygon(0 0, 100% 0, 88% 100%, 0 100%)' }}>
            <h3 className="text-[#D4A017] text-2xl md:text-3xl font-bold mb-2">Welcome to</h3>
            <h2 className="text-black text-2xl md:text-2xl font-bold mb-4">Moor Hall Restaurant</h2>
            
            <p className="text-black text-sm md:text-sm mb-4 leading-relaxed font-medium">
              Since 2019, Moor Hall has been serving bold, honest food made from fresh local ingredients. 
              Whether it's a quick lunch or a special occasion we make every meal memorable.
            </p>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <p className="text-black text-xl md:text-2xl font-bold">Customer reviews</p>
               
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-7 h-7 text-[#D4A017]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                
              </div>
              <p className="text-black text-sm md:text-sm mt-4 font-medium">1000+ Happy Customers</p>
             
            </div>
          </div>




            {/* Image Column - welcome.jpg on right side */}
            <div className="flex justify-end">
              <div className="rounded-3xl border-8 border-[#D4A017] w-full max-w-[60rem] h-[38rem] overflow-hidden shadow-xl max-w-lg aspect-square sm:h-[32rem] xs:h-[26rem]">
                <img 
                  src={yoga} 
                  alt="Restaurant welcome" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
        </div>
      </div>
    </section>
    <div>
      {/* Menu & Services Section with chief.jpg background */}
      <section className="relative  overflow-hidden">
        {/* chief.jpg background cover */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${chief})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        <div className="relative mb-20 mt-5 z-40 max-w-7xl mx-auto px-8">
          {/* Featured Meals */}
          <div className="">
            <div className="w-full bg-gray-800 py-4 mb-2" style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundBlendMode: 'soft-light'
            }}>
              <h2 className="text-2xl md:text-2xl font-bold text-white text-center">Featured Meals</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {/* Pizza Card */}
            <div className="bg-gray-200 border-4 border-[#D4A017] rounded-t-lg mt-2 md:mt-0 flex flex-col h-full">
              <div className="h-40 overflow-hidden">
                <img src={pizza} alt="Crispy crust Pizza" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Crispy crust Pizza</h3>
                  <p className="text-sm mb-4">Caramelized onion and feta cheese on a delicious thin crust.</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">20k Rwf</span>
                  <button onClick={() => navigate('/product', { state: { title: 'Crispy crust Pizza', description: 'Caramelized onion and feta cheese on a delicious thin crust.', price: '20k Rwf', image: pizza } })} className="bg-red-600 text-white px-6 py-2 rounded-md font-bold">Order Now</button>
                </div>
              </div>
            </div>

            {/* Burger Card */}
              <div className="bg-gray-200 border-4 border-[#D4A017] rounded-t-lg  md:mt-10 flex flex-col h-full">
              <div className="h-40 overflow-hidden">
                <img src={burger} alt="Classic cheese Burger" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Classic cheese Burger</h3>
                  <p className="text-sm mb-4">Double beef patty, aged cheddar, caramelized onions, house sauce on toasted brioche bun.</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">30k Rwf</span>
                  <button onClick={() => navigate('/product', { state: { title: 'Classic cheese Burger', description: 'Double beef patty, aged cheddar, caramelized onions, house sauce on toasted brioche bun.', price: '30k Rwf', image: burger } })} className="bg-red-600 text-white py-2 px-6 rounded-md font-bold">Order Now</button>
                </div>
              </div>
            </div>

            {/* Grilled Chicken Card */}
              <div className="bg-gray-200 border-4 border-[#D4A017] rounded-t-lg mt-6 md:mt-0 flex flex-col h-full">
              <div className="h-40 overflow-hidden">
                <img src={menu} alt="Spiced Grilled Chicken" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Spiced Grilled Chicken</h3>
                  <p className="text-sm mb-4">Marinated half chicken, slow-grilled to perfection. Served with crispy fries and garlic dip.</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">40k Rwf</span>
                  <button onClick={() => navigate('/product', { state: { title: 'Spiced Grilled Chicken', description: 'Marinated half chicken, slow-grilled to perfection. Served with crispy fries and garlic dip.', price: '40k Rwf', image: menu } })} className="bg-red-600 text-white px-6 py-2 rounded-md font-bold">Order Now</button>
                </div>
              </div>
            </div>

            {/* Stone Pizza Card */}
              <div className="bg-gray-200 border-4 border-[#D4A017] rounded-t-lg mt-4 md:mt-10 flex flex-col h-full">
              <div className="h-40 overflow-hidden">
                <img src={pizza} alt="Stone-Baked Pizza" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Stone-Baked Pizza</h3>
                  <p className="text-sm mb-4">Thin crust, house tomato base, fresh mozzarella baked in stone oven, ready in minutes.</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">50k Rwf</span>
                  <button onClick={() => navigate('/product', { state: { title: 'Stone-Baked Pizza', description: 'Thin crust, house tomato base, fresh mozzarella baked in stone oven, ready in minutes.', price: '50k Rwf', image: pizza } })} className="bg-red-600 text-white px-6 py-2 rounded-md font-bold">Order Now</button>
                </div>
              </div>
            </div>
            </div>
          </div>

          {/* Featured Service (smaller top margin than meals) */}
          <div className="">
            <div className="w-full bg-gray-800 py-4 mb-2" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundBlendMode: 'soft-light'
          }}>
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Featured Service</h2>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Dining In */}
              <div className="bg-gray-200 border-4 border-[#D4A017] rounded-t-lg mt-0 md:mt-0 flex flex-col h-full">
              <div className="h-40 overflow-hidden">
                <img src={resto} alt="Dining In" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between text-center">
                <div>
                  <h3 className="text-xl font-bold mb-2">Dining In</h3>
                  <p className="text-sm mb-4">Double beef patty, aged cheddar, caramelized onions, house sauce on toasted brioche bun.</p>
                </div>
                <button className="bg-red-600 text-white w-full py-2 rounded-md font-bold">Visit Us</button>
              </div>
            </div>

            {/* Table Reservations */}
              <div className="bg-gray-200 border-4 border-[#D4A017] rounded-t-lg md:mt-10 flex flex-col h-full">
              <div className="h-40 overflow-hidden">
                <img src={menu} alt="Table Reservations" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between text-center">
                <div>
                  <h3 className="text-xl font-bold mb-2">Table Reservations</h3>
                  <p className="text-sm mb-4">Double beef patty, aged cheddar, caramelized onions, house sauce on toasted brioche bun.</p>
                </div>
                <button className="bg-red-600 text-white w-full py-2 rounded-md font-bold">Book Tables</button>
              </div>
            </div>

            {/* Event Catering */}
              <div className="bg-gray-200 border-4 border-[#D4A017] rounded-t-lg mt-6 md:mt-0 flex flex-col h-full">
              <div className="h-40 overflow-hidden">
                <img src={chief} alt="Event Catering" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between text-center">
                <div>
                  <h3 className="text-xl font-bold mb-2">Event Catering</h3>
                  <p className="text-sm mb-4">Double beef patty, aged cheddar, caramelized onions, house sauce on toasted brioche bun.</p>
                </div>
                <button className="bg-red-600 text-white w-full py-2 rounded-md font-bold">Request catering</button>
              </div>
            </div>

            {/* Private Dining */}
              <div className="bg-gray-200 border-4 border-[#D4A017] rounded-t-lg mt-4 md:mt-10 flex flex-col h-full">
              <div className="h-40 overflow-hidden">
                <img src={yoga} alt="Private Dining" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between text-center">
                <div>
                  <h3 className="text-xl font-bold mb-2">Private Dining</h3>
                  <p className="text-sm mb-4">Double beef patty, aged cheddar, caramelized onions, house sauce on toasted brioche bun.</p>
                </div>
                <button className="bg-red-600 text-white w-full py-2 rounded-md font-bold">Contact Us</button>
              </div>
            </div>
            </div>

          </div>

          {/* Promotional Offers Header */}
          <div className="w-full bg-gray-800 py-4 mb-5" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundBlendMode: 'soft-light'
          }}>
            <h2 className="text-4xl font-bold text-white text-center">Promotional Offers</h2>
          </div>

          {/* Offer Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 45% Offer */}
            <div className="bg-gray-200 border-4 border-[#D4A017] rounded-t-lg relative">
              <div className="absolute right-4 top-4 w-20 h-20 bg-white rounded-full flex items-center justify-center z-10">
                <span className="text-3xl font-bold text-red-600">45%</span>
              </div>
              <div className="h-40 overflow-hidden">
                <img src={burger} alt="Burger offer" className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <p className="text-sm mb-4">Our Best-selling classic burger at a special one day price. Add fries for just 5K Extra. Limit quantities available</p>
                <div className="flex justify-between items-center">
                   <div className="bg-white px-6 py-2 rounded-md">
                     <span className="text-xl font-bold text-gray-400 line-through mr-2">70k</span>
                     <span className="text-xl font-bold">50k</span>
                    </div>
                   <button onClick={() => navigate('/product', { state: { title: 'Burger Offer', description: 'Our Best-selling classic burger at a special one day price. Add fries for just 5K Extra. Limit quantities available', price: '50k Rwf', image: burger } })} className="bg-red-600 text-white px-6 py-2 rounded-md font-bold">Order Now</button>
                </div>
              </div>
            </div>

            {/* 30% Offer */}
            <div className="bg-gray-200 border-4 border-[#D4A017] rounded-t-lg relative">
              <div className="absolute right-4 top-4 w-20 h-20 bg-white rounded-full flex items-center justify-center z-10">
                <span className="text-3xl font-bold text-red-600">30%</span>
                </div>
                <div className="h-40 overflow-hidden">
                <img src={menu} alt="Family meal offer" className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                <p className="text-sm mb-4">Feeds 4-6 people. mixed grills 4 sides, soft drinks and a shared dessert- all at one great price.</p>
                <div className="flex justify-between items-center">
                <div className="bg-white px-6 py-2 rounded-md">
                    <span className="text-xl font-bold text-gray-400 line-through mr-2">30k</span>
                    <span className="text-xl font-bold">20k</span>
                  </div>
                  <button onClick={() => navigate('/product', { state: { title: 'Family Meal Offer', description: 'Feeds 4-6 people. mixed grills 4 sides, soft drinks and a shared dessert- all at one great price.', price: '20k Rwf', image: menu } })} className="bg-red-600 text-white px-6 py-2 rounded-md font-bold">Order Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}


export default Home
