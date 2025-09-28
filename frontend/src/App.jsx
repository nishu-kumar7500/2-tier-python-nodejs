import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="max-w-7xl mx-auto px-4">
          <Dashboard />
        </div>
      </main>
      <Footer />
    </div>
  )
}
