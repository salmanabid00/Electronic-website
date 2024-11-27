import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import PopupMessage from './components/PopupMessage'
import HomePage from './pages/HomePage'
import ElectronicsPage from './pages/ElectronicsPage'
import ContactsPage from './pages/ContactsPage'
import AboutPage from './pages/AboutPage'
import LoginPage from './pages/LoginPage'
import { CartProvider } from './contexts/CartContext'

const App = () => {
  return (
    <Router>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/electronics" element={<ElectronicsPage />} />
              <Route path="/contacts" element={<ContactsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </main>
          <Footer />
          <PopupMessage />
        </div>
      </CartProvider>
    </Router>
  )
}

export default App

