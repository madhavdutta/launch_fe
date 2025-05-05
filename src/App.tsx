import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden relative">
      {/* Background elements - customized gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(at_top_right,rgba(79,70,229,0.2),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(at_bottom_left,rgba(219,39,119,0.2),transparent_50%)] pointer-events-none"></div>
      
      {/* Animated background dots with increased opacity */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.2] pointer-events-none"></div>
      
      {/* Noise texture */}
      <div className="noise"></div>
      
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App
