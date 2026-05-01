import React from 'react'

const Terms: React.FC = () => {
  return (
     <div className="min-h-screen pt-24 sm:pt-36 pb-16 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12 text-red-700">Terms & Conditions</h1>
      
      <div className="rounded-2xl overflow-hidden mb-8 max-w-4xl mx-auto">
        <img 
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200&h=400"
          alt="Terms and conditions"
          className="w-full h-64 object-cover"
        />
      </div>

      <div className="text-xl leading-relaxed max-w-5xl mx-auto">
        <p className="mb-6">By dining at Moor Hall Restaurant, you agree to our terms of service including reservation policies, payment terms, and code of conduct.</p>
        <p className="mb-6">For more information about our policies, please contact our management team.</p>
      </div>
    </div>
  )
}

export default Terms