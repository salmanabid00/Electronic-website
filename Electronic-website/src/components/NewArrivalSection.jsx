import React from 'react'
import ProductCard from './ProductCard'

const products = [
  { name: "John lara", price: 55, rating: 5.0, image: "https://source.unsplash.com/random/300x300/?headphones" },
  { name: "James smith", price: 49, rating: 5.0, image: "https://source.unsplash.com/random/300x300/?earbuds" },
  { name: "Miss zara", price: 39, rating: 4.3, image: "https://source.unsplash.com/random/300x300/?wireless-headphones" },
  { name: "Lauren", price: 69, rating: 4.5, image: "https://source.unsplash.com/random/300x300/?over-ear-headphones" }
]

const NewArrivalSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-h2 font-bold text-center mb-12">New arrival</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewArrivalSection

