import React from 'react'
import { useCart } from '../contexts/CartContext'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { Toast } from '../components/Toast'

const HomePage = () => {
  const { addToCart } = useCart()

  const newArrivals = [
    { name: "John lara", price: 55, rating: 5.0, image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=300&h=300&q=80" },
    { name: "James smith", price: 49, rating: 5.0, image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&q=80" },
    { name: "Miss zara", price: 39, rating: 4.3, image: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=300&h=300&q=80" },
    { name: "Lauren", price: 69, rating: 4.5, image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=300&h=300&q=80" }
  ]

  const topRatedProducts = [
    { name: "LED 4k smart TV expo", price: 799, image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=300&h=300&q=80", rating: 4.5 },
    { name: "Wireless Headphones", price: 199, image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&q=80", rating: 4.8 },
    { name: "Smartphone", price: 599, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&q=80", rating: 4.7 },
    { name: "Laptop", price: 999, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&q=80", rating: 4.9 }
  ]

  const handleAddToCart = (product) => {
    addToCart(product)
    Toast.show(`${product.name} added to cart!`)
  }

  return (
    <div className="bg-background text-text">
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 flex flex-wrap items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-h1 font-bold mb-4">Can we help you pick a headphone</h1>
            <p className="text-lg mb-6">These have large ear cups that encompass the ears, providing good sound isolation and often better sound quality.</p>
            <Button to="/electronics">Shop now</Button>
          </div>
          <div className="w-full md:w-1/2">
            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&q=80" alt="Headphones" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-h2 font-bold text-center mb-12">Amazing features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Touch Controls", description: "Some headphones have touch-sensitive surfaces for controlling playback.", icon: "🎧" },
              { title: "Sound Quality", description: "This includes considerations like bass response, clarity, and overall audio fidelity.", icon: "🔊" },
              { title: "Microphone", description: "Built-in microphones enable hands-free calling and voice commands.", icon: "🎤" }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-h3 font-bold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-h2 font-bold text-center mb-12">Our Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Comment level", value: "4M+" },
              { label: "User's", value: "53k" },
              { label: "Gallery", value: "153k" },
              { label: "Purchaser", value: "2M+" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-h2 font-bold mb-4">A new style in your Ear</h2>
              <p className="mb-6">These have large ear cups that encompass the ears, providing good sound isolation and often better sound quality.</p>
              <Button to="/electronics">Shop now</Button>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&h=400&q=80" alt="Stylish Headphones" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-h2 font-bold text-center mb-12">Shop product by</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { category: 'Speaker', image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=100&h=100&q=80&fit=crop' },
              { category: 'Iphone', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=100&h=100&q=80&fit=crop' },
              { category: 'Tablet', image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=100&h=100&q=80&fit=crop' },
              { category: 'Laptop', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=100&h=100&q=80&fit=crop' },
              { category: 'Headphone', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&q=80&fit=crop' }
            ].map((item, index) => (
              <Link to="/electronics" key={index} className="bg-white p-4 rounded-lg text-center shadow-md">
                <img src={item.image} alt={item.category} className="w-16 h-16 mx-auto mb-2 rounded-full object-cover" />
                <p className="font-semibold">{item.category}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-h2 font-bold text-center mb-12">Top rated product</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {topRatedProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-h3 font-bold mb-2">{product.name}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xl font-bold">${product.price}</span>
                    <span className="text-yellow-500">{product.rating} ★</span>
                  </div>
                  <Button onClick={() => handleAddToCart(product)} className="w-full">Add to cart</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-h2 font-bold text-center mb-12">New Arrival</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {newArrivals.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-h3 font-bold mb-2">{product.name}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xl font-bold">${product.price}</span>
                    <span className="text-yellow-500">{product.rating} ★</span>
                  </div>
                  <Button onClick={() => handleAddToCart(product)} className="w-full">Add to cart</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

