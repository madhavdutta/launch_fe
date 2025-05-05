import React, { useState, useEffect } from 'react'
import { Code, Menu, X, Clock, Users, Flame, Gift } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activePromo, setActivePromo] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    
    // Rotate through promo messages
    const interval = setInterval(() => {
      setActivePromo(prev => (prev + 1) % 3)
    }, 5000)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearInterval(interval)
    }
  }, [])

  const promoMessages = [
    {
      icon: <Clock className="h-4 w-4 text-yellow-400" />,
      text: "⏰ Limited Time Launch Offer: 50% OFF Ends in 24 Hours!"
    },
    {
      icon: <Users className="h-4 w-4 text-blue-400" />,
      text: "🔥 Only 17 Licenses Remaining at This Price!"
    },
    {
      icon: <Gift className="h-4 w-4 text-green-400" />,
      text: "🎁 Early Bird Bonus: First 50 Buyers Get $997 Worth of Templates FREE!"
    }
  ]

  return (
    <>
      {/* Scarcity banner */}
      <div className="bg-gradient-to-r from-purple-900/90 via-indigo-900/90 to-purple-900/90 text-white py-1.5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.07]"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
        
        {/* Animated background shimmer */}
        <div className="absolute inset-0 animate-shimmer"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-center text-center">
            <div className="flex items-center space-x-2 transition-opacity duration-500">
              {promoMessages.map((promo, index) => (
                <div 
                  key={index} 
                  className={`flex items-center text-sm font-medium transition-all duration-500 ${
                    activePromo === index ? 'opacity-100 translate-y-0' : 'opacity-0 absolute'
                  }`}
                >
                  <span className="mr-2">{promo.icon}</span>
                  <span>{promo.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Main navbar */}
      <nav className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/80 backdrop-blur-xl shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="#" className="flex items-center group">
                  <div className="w-10 h-10 rounded-md bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-glow group-hover:animate-pulse-glow transition-all duration-300">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <span className="ml-3 text-xl font-bold text-white font-cal">xBesh</span>
                </a>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-6">
                  <a href="#features" className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-purple-500 after:transition-all after:duration-300">Features</a>
                  <a href="#testimonials" className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-purple-500 after:transition-all after:duration-300">Testimonials</a>
                  <a href="#pricing" className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-purple-500 after:transition-all after:duration-300">Pricing</a>
                  <a href="#faq" className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-purple-500 after:transition-all after:duration-300">FAQ</a>
                </div>
              </div>
            </div>
            
            {/* Sales hook badges */}
            <div className="hidden lg:flex items-center space-x-3 mr-4">
              <div className="flex items-center px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-medium">
                <Users className="h-3 w-3 mr-1" />
                <span>237 Sold</span>
              </div>
              <div className="flex items-center px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-medium animate-pulse">
                <Flame className="h-3 w-3 mr-1" />
                <span>High Demand</span>
              </div>
            </div>
            
            <div className="hidden md:block">
              <button className="btn-glow bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2.5 rounded-md text-sm font-medium transition-all shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50">
                Buy Now - 50% OFF
              </button>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800/90 backdrop-blur-xl">
              <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white">Features</a>
              <a href="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white">Testimonials</a>
              <a href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white">Pricing</a>
              <a href="#faq" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white">FAQ</a>
              
              {/* Mobile sales hooks */}
              <div className="mt-3 flex flex-col space-y-2 px-3">
                <div className="flex items-center py-1 text-green-400 text-xs font-medium">
                  <Users className="h-3 w-3 mr-1" />
                  <span>237 Sold</span>
                </div>
                <div className="flex items-center py-1 text-yellow-400 text-xs font-medium">
                  <Flame className="h-3 w-3 mr-1" />
                  <span>High Demand</span>
                </div>
              </div>
              
              <button className="mt-4 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-all">
                Buy Now - 50% OFF
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar
