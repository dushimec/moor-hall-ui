import React from 'react'
import foodBackground from '../assets/food.png'

const Bakery: React.FC = () => {
  const bakeryImages = [
    'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1585064224365-8824e58f787a?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1573513506436-4000000f2ff6?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1558961363-fa8dfd53bed4?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1606066889831-35faf6fa6ff6?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1574893256072-81b11e2e0e22?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1504387103978-e4ee71416c39?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1571653833397-002ea708c06e?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1527515545081-5db817172677?auto=format&fit=crop&q=80&w=600&h=450',
    'https://images.unsplash.com/photo-1558961363-fa8dfd53bed4?auto=format&fit=crop&q=80&w=600&h=450'
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
        <h1 className="text-4xl font-bold text-white text-center mb-12">Bakery Products Gallery</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bakeryImages.map((img, idx) => (
            <div 
              key={idx}
              className="rounded-xl border-4 border-yellow-500 overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 bg-white"
            >
              <img 
                src={img} 
                alt={`Bakery item ${idx + 1}`}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Bakery