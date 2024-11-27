import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ children, onClick, to, className = '', type = 'button' }) => {
  const baseClasses = 'bg-primary text-white px-4 py-2 rounded hover:bg-opacity-80 transition-colors'
  const combinedClasses = `${baseClasses} ${className}`

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button

