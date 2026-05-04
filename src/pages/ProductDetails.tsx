import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

type Addon = {
  name: string;
  price: number;
}

type Size = {
  name: string;
  price: number;
}

const ProductDetails: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const product = location.state

  const [quantity, setQuantity] = useState(1)
  const [selectedAddons, setSelectedAddons] = useState<string[]>([])
  const [selectedSize, setSelectedSize] = useState('Medium')

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">Product not found</div>
  }

  const sizes: Size[] = [
    { name: 'Small', price: 30000 },
    { name: 'Medium', price: 40000 },
    { name: 'Large', price: 50000 }
  ]

  const addons: Addon[] = [
    { name: 'Extra cheese', price: 5000 },
    { name: 'Mushrooms', price: 3000 },
    { name: 'Olives', price: 2000 },
    { name: 'Grilled chicken', price: 4000 }
  ]

  const basePrice = sizes.find(s => s.name === selectedSize)?.price || 0
  const addonPrice = selectedAddons.reduce((sum, addonName) => {
    const addon = addons.find(a => a.name === addonName)
    return sum + (addon ? addon.price : 0)
  }, 0)
  const totalPrice = (basePrice + addonPrice) * quantity

  const handleAddonChange = (addonName: string) => {
    setSelectedAddons(prev =>
      prev.includes(addonName)
        ? prev.filter(name => name !== addonName)
        : [...prev, addonName]
    )
  }

  const handleQuantityChange = (delta: number) => {
    setQuantity(prev => Math.max(1, prev + delta))
  }

  const handleConfirmOrder = () => {
    alert(`Order confirmed!\n${product.title}\nSize: ${selectedSize}\nQuantity: ${quantity}\nAddons: ${selectedAddons.join(', ') || 'None'}\nTotal: ${totalPrice} Rwf`)
  }

  return (
    <div className=" mt-10">
      <div className="h-full mt- max-w-7xl mx-auto px-4 flex flex-col">
        <button onClick={() => navigate(-1)} className="mt-4 mb-4  text-white px-4 py-2 rounded-lg hover:bg-gray-700 text-base">Back</button>
        <div className="flex-1 overflow-hidden">
          <div className="h-full md:flex">
            <div className="md:w-1/2 h-full flex flex-col">
              <img src={product.image} alt={product.title} className="w-full h-64 md:h-1/2 object-cover md:mt-10" />
              <div className="flex space-x-2 mt-4 px-">
                <img src={product.image} alt="thumbnail 1" className="w-24 h-16 md:w-60 md:h-20 object-cover rounded-lg cursor-pointer hover:opacity-80" />
                <img src={product.image} alt="thumbnail 2" className="w-24 h-16 md:w-60 md:h-20 object-cover rounded-lg cursor-pointer hover:opacity-80" />
                <img src={product.image} alt="thumbnail 3" className="w-24 h-16 md:w-60 md:h-20 object-cover rounded-lg cursor-pointer hover:opacity-80" />
              </div>
              <div className="mt-4 px-4">
                <h2 className="text-xl font-bold mb-2">About product</h2>
                <p className="text-gray-700 text-base leading-relaxed">{product.description}</p>
              </div>
            </div>
            <div className="md:w-1/2 p-6 flex flex-col">
              <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
              <div className="text-2xl font-bold text-red-600 mb-6">{totalPrice} Rwf</div>

              <div className="mb-6">
                <label className="block text-base font-medium mb-2">Size:</label>
                <div className="flex space-x-3">
                  {sizes.map(size => (
                    <button
                      key={size.name}
                      onClick={() => setSelectedSize(size.name)}
                      className={`px-4 py-2 rounded-lg border-2 text-base font-medium hover:bg-gray-50 transition ${selectedSize === size.name ? 'border-red-500 bg-red-50 text-red-700' : 'border-gray-300'}`}
                    >
                      {size.name} ({size.price} Rwf)
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-base font-medium mb-2">Quantity:</label>
                <div className="flex items-center">
                  <button onClick={() => handleQuantityChange(-1)} className="px-3 py-1 border-2 rounded-lg hover:bg-gray-50 text-lg font-bold">-</button>
                  <span className="mx-4 text-xl font-bold">{quantity}</span>
                  <button onClick={() => handleQuantityChange(1)} className="px-3 py-1 border-2 rounded-lg hover:bg-gray-50 text-lg font-bold">+</button>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-base font-medium mb-2">Add Extras:</label>
                {addons.map(addon => (
                  <div key={addon.name} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id={addon.name}
                      checked={selectedAddons.includes(addon.name)}
                      onChange={() => handleAddonChange(addon.name)}
                      className="mr-2 w-4 h-4"
                    />
                    <label htmlFor={addon.name} className="text-base">
                      {addon.name} (+{addon.price} Rwf)
                    </label>
                  </div>
                ))}
              </div>

              <div className="text-xl font-bold mb-4">Total: {totalPrice} Rwf</div>
               <div>
                <button onClick={handleConfirmOrder} className="bg-green-600 flex flex-col text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 text-base transition">Pay Now</button>

               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails