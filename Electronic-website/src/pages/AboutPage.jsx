import React from 'react'
import Button from '../components/Button'

const AboutPage = () => {
  return (
    <div className="bg-background text-text">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-h1 font-bold mb-8 text-center">About Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-h2 font-bold mb-4">Why choose us</h2>
            <p className="mb-6">Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <Button>Learn More</Button>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=400&q=80&fit=crop" alt="About Us" className="rounded-lg shadow-lg w-full h-auto" />
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-h2 font-bold mb-8">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-h3 font-bold mb-4">Choose teaching</h3>
              <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
            </div>
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-h3 font-bold mb-4">24/7 available</h3>
              <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
            </div>
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-h3 font-bold mb-4">Affordable price</h3>
              <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-h2 font-bold mb-8">Our Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4">Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&q=80&fit=crop" alt="Testimonial" className="w-12 h-12 rounded-full mr-4 object-cover" />
                <div>
                  <h4 className="text-h4 font-bold">John Doe</h4>
                  <p className="text-sm">Customer</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4">Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&q=80&fit=crop" alt="Testimonial" className="w-12 h-12 rounded-full mr-4 object-cover" />
                <div>
                  <h4 className="text-h4 font-bold">Jane Smith</h4>
                  <p className="text-sm">Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-h2 font-bold mb-8">Our Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-h2 font-bold text-primary">870</h3>
              <p>Shops</p>
            </div>
            <div>
              <h3 className="text-h2 font-bold text-primary">20,000+</h3>
              <p>Users</p>
            </div>
            <div>
              <h3 className="text-h2 font-bold text-primary">260</h3>
              <p>Subscribers</p>
            </div>
            <div>
              <h3 className="text-h2 font-bold text-primary">73,990</h3>
              <p>Active</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage

