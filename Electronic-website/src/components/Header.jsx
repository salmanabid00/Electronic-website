import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">Your logo</Link>
        <nav className="space-x-6">
          <Link to="/" className="text-text hover:text-primary">Home</Link>
          <Link to="/electronics" className="text-text hover:text-primary">Electronics</Link>
          <Link to="/contacts" className="text-text hover:text-primary">Contacts</Link>
          <Link to="/about" className="text-text hover:text-primary">About</Link>
        </nav>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      </div>
    </header>
  )
}

export default Header

