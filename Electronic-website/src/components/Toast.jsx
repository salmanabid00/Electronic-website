import React, { useState, useEffect } from 'react'

export const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 3000)

    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className="fixed top-4 right-4 bg-primary text-white px-4 py-2 rounded shadow-lg">
      {message}
    </div>
  )
}

Toast.show = (message) => {
  const toastRoot = document.getElementById('toast-root')
  if (!toastRoot) {
    const div = document.createElement('div')
    div.id = 'toast-root'
    document.body.appendChild(div)
  }

  const toastElement = document.createElement('div')
  document.getElementById('toast-root').appendChild(toastElement)

  const closeToast = () => {
    ReactDOM.unmountComponentAtNode(toastElement)
    toastElement.remove()
  }

  ReactDOM.render(<Toast message={message} onClose={closeToast} />, toastElement)
}

