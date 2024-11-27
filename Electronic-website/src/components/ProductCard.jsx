import React from 'react'
import Button from './Button'

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-h3 font-bold mb-2">{product.name}</h3>
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-bold">${product.price}</span>
          <span className="text-yellow-500">{product.rating} ★</span>
        </div>
        <p className="mb-4">Headphones come with a variety of features.</p>
        <Button className="w-full">Add to cart</Button>
      </div>
    </div>
  )
}

export default ProductCard

