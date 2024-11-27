import React, { useState } from 'react'
import { useCart } from '../contexts/CartContext'
import Button from '../components/Button'
import { Toast } from '../components/Toast'

const products = [
  { name: "LED 4k smart TV expo", price: 799, image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=300&h=300&q=80", rating: 4.5, discount: "25% off" },
  { name: "Mobile phone accessories", price: 99, image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&q=80", rating: 4.2 },
  { name: "GM-2345 closed back wireless Headphones", price: 199, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&q=80", rating: 4.8 },
  { name: "Accessories for mobile phone used USB", price: 99, image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=300&h=300&q=80", rating: 4.0 },
  { name: "GM-2345 closed back wireless Headphones", price: 149, image: "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?w=300&h=300&q=80", rating: 4.6 },
  { name: "GM-2345 closed back Camera", price: 299, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&h=300&q=80", rating: 4.7 },
  { name: "Laptop 4k smart TV expo", price: 599, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&q=80", rating: 4.9, discount: "10% off" },
  { name: "Mobile 4k smart TV expo", price: 399, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&q=80", rating: 4.4 }
]

const categories = [
  { name: 'Speaker', image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=100&h=100&q=80&fit=crop" },
  { name: 'Iphone', image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=100&h=100&q=80&fit=crop" },
  { name: 'Tablet', image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=100&h=100&q=80&fit=crop" },
  { name: 'Laptop', image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=100&h=100&q=80&fit=crop" },
  { name: 'Headphone', image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&q=80&fit=crop" }
]

const ElectronicsPage = () => {
  const [imageErrors, setImageErrors] = useState({})
  const { addToCart } = useCart()

  const handleImageError
= (categoryName) => {
    setImageErrors(prev => ({ ...prev, [categoryName]: true }))
  }

  const handleAddToCart = (product) => {
    addToCart(product)
    Toast.show(`${product.name} added to cart!`)
  }

  return (
    <div className="bg-background text-text">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-h1 font-bold mb-8 text-center">Electronics</h1>
        
        <div className="mb-12">
          <h2 className="text-h2 font-bold mb-4">Featured Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((category) => (
              <div key={category.name} className="bg-secondary p-4 rounded-lg text-center">
                {!imageErrors[category.name] ? (
                  <img 
                    src={category.image}
                    alt={category.name} 
                    className="w-16 h-16 mx-auto mb-2 rounded-full object-cover" 
                    onError={() => handleImageError(category.name)}
                  />
                ) : (
                  <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-600">{category.name[0]}</span>
                  </div>
                )}
                <p className="font-semibold">{category.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-h2 font-bold mb-4">Hot Deals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-secondary p-6 rounded-lg flex items-center">
              <div className="flex-1">
                <h3 className="text-h3 font-bold mb-2">Catch hottest Deals in Cameras category</h3>
                <Button to="/electronics">Shop now</Button>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=200&h=200&q=80&fit=crop" 
                alt="Camera" 
                className="w-32 h-32 rounded-lg object-cover" 
              />
            </div>
            <div className="bg-secondary p-6 rounded-lg flex items-center">
              <div className="flex-1">
                <h3 className="text-h3 font-bold mb-2">Tablets smartphone and more</h3>
                <Button to="/electronics">Shop now</Button>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&q=80&fit=crop" 
                alt="Smartphone" 
                className="w-32 h-32 rounded-lg object-cover" 
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-h2 font-bold mb-4">Top Rated Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 object-cover mb-4 rounded-lg" 
                />
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xl font-bold text-primary">${product.price}</span>
                  <span className="text-sm text-gray-600">★ {product.rating}</span>
                </div>
                {product.discount && (
                  <span className="bg-primary text-white text-sm py-1 px-2 rounded-full">{product.discount}</span>
                )}
                <Button onClick={() => handleAddToCart(product)} className="w-full mt-4">Add to cart</Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ElectronicsPage

