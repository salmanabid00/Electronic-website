import React from 'react'
import { useCart } from '../contexts/CartContext'
import Button from './Button'

const Cart = () => {
  const { cart, removeFromCart, clearCart, closeCart } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Your Cart</h2>
          <button onClick={closeCart} className="text-gray-500 hover:text-gray-700">
            &times;
          </button>
        </div>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.name} className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p>${item.price} x {item.quantity}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.name)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="mt-8">
              <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
              <Button onClick={clearCart} className="mt-4 w-full">
                Clear Cart
              </Button>
              <Button className="mt-4 w-full">
                Checkout
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Cart

