import React from 'react'
import LoginForm from '../components/LoginForm'

const LoginPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-h1 font-bold text-center mb-8">Login</h1>
      <div className="max-w-md mx-auto">
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage

