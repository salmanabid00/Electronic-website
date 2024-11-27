import React from 'react'
import Button from './Button'

const CategorySection = () => {
  return (
    <section className="bg-secondary py-16">
      <div className="container mx-auto px-4 flex flex-wrap items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-h1 font-bold mb-4">Can we help you pick a headphone</h1>
          <p className="text-lg mb-6">These have large ear cups that encompass the ears, providing good sound isolation and often better sound quality.</p>
          <Button>Shop now</Button>
        </div>
        <div className="w-full md:w-1/2">
          <img src="https://source.unsplash.com/random/600x400/?headphones" alt="Headphones" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  )
}

export default CategorySection

