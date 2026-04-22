import React from 'react'
import foodBackground from '../assets/food.png'

const CateringEvents: React.FC = () => {
  const cateringImages = [
    'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1485963631004-f2f006e6d22e?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1558961363-fa8dfd53bed4?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1526230427044-d092040d48dc?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1527515545081-5db817172677?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600&h=450'
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
        <h1 className="text-4xl font-bold text-white text-center mb-12">Catering & Events Gallery</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {cateringImages.map((img, idx) => (
            <div 
              key={idx}
              className="rounded-xl border-4 border-yellow-500 overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 bg-white"
            >
              <img 
                src={img} 
                alt={`Catering event ${idx + 1}`}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CateringEvents