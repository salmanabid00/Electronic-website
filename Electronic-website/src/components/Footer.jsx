import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <Link to="/" className="text-2xl font-bold">Your logo</Link>
            <p className="mt-2">Your Gateway to Success Start Here!</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h5 className="text-h5 font-bold mb-4">Pages</h5>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <li><Link to="/electronics" className="hover:text-primary">Electronics</Link></li>
              <li><Link to="/contacts" className="hover:text-primary">Contacts</Link></li>
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h5 className="text-h5 font-bold mb-4">Contact</h5>
            <p>hello@helloflow.com</p>
            <p>+1 (123) 456-7890</p>
          </div>
          <div className="w-full md:w-1/4">
            <h5 className="text-h5 font-bold mb-4">Follow Us</h5>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary">Facebook</a>
              <a href="#" className="hover:text-primary">Twitter</a>
              <a href="#" className="hover:text-primary">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

