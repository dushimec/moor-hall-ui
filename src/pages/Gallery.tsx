import React from 'react'
import foodBackground from '../assets/food.png'

const Gallery: React.FC = () => {
  const foodImages = [
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1631452180508-3afb694efb6e?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&q=80&w=600&h=450'
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
        <h1 className="text-4xl font-bold text-white text-center mb-12">Food Gallery</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {foodImages.map((img, idx) => (
            <div 
              key={idx}
              className="rounded-xl border-4 border-yellow-500 overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 bg-white"
            >
              <img 
                src={img} 
                alt={`Food item ${idx + 1}`}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery