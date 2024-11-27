import React, { useEffect } from 'react'

const PopupMessage = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose()
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose])

  return (
    <div 
      className={`fixed bottom-4 left-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
      }`}
      aria-live="assertive"
      role="alert"
    >
      {message}
    </div>
  )
}

export default PopupMessage

