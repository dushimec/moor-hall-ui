import React from 'react'
import foodBackground from '../assets/food.png'

const CoffeeShop: React.FC = () => {
  const coffeeImages = [
    'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1497515114532-dd33f8f9360c?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&q=80&w=600&h=450'
  ]

  return (
    <div 
      className="min-h-screen pt-32 pb-16 px-4"
      style={{ 
        backgroundImage: `url(${foodBackground})`, 
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-red-900/70 -z-10" style={{ position: 'fixed', top: 0, left: 0 }} />
      
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-12">Coffee Shop Gallery</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {coffeeImages.map((img, idx) => (
            <div 
              key={idx}
              className="rounded-xl border-4 border-yellow-500 overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 bg-white"
            >
              <img 
                src={img} 
                alt={`Coffee item ${idx + 1}`}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CoffeeShop