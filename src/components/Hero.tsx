import React, { useEffect, useState, useRef } from 'react'
import { AlertTriangle, Play, CheckCircle, ShoppingCart, ArrowRight, Shield, Clock, Users, Award, Zap, Flame } from 'lucide-react'

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  
  const [isVisible, setIsVisible] = useState(false)
  const [activeBuyer, setActiveBuyer] = useState(0)
  const heroRef = useRef(null)

  useEffect(() => {
    // Set launch date to May 8th
    const launchDate = new Date('2023-05-08T00:00:00').getTime()
    
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = launchDate - now
      
      if (distance < 0) {
        clearInterval(timer)
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        })
        return
      }
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      })
    }, 1000)
    
    // Animation on scroll
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )
    
    if (heroRef.current) {
      observer.observe(heroRef.current)
    }
    
    // Recent buyers animation
    const buyerInterval = setInterval(() => {
      setActiveBuyer(prev => (prev + 1) % recentBuyers.length)
    }, 4000)
    
    return () => {
      clearInterval(timer)
      clearInterval(buyerInterval)
      if (heroRef.current) {
        observer.unobserve(heroRef.current)
      }
    }
  }, [])

  const features = [
    "Build CRMs, Funnels, Membership Sites, Tools — Just By Typing",
    "Output Looks Like a $10K Dev Team Built It (Without the Ghosting)",
    "50+ Templates: Dashboards, Quizzes, Onboarding Flows Included",
    "Monetizable From Minute One — Stripe's Already Waiting",
    "Stripe, Auth, File Uploads, Bookings — Already Plugged In",
    "MeMoe Agent Plans, Codes, Connects — While You Chill",
    "No-Code Needed. No Logic Mapping. No YouTube Tutorials",
    "One-Time Payment. No Subscriptions. Yours Forever",
    "From 'idea' to live product in 30–60 minutes — really",
    "Built for Marketers, Coaches, Freelancers, and Creators — Not Coders"
  ]
  
  const recentBuyers = [
    { name: "Michael S.", location: "New York", time: "2 minutes ago" },
    { name: "Sarah L.", location: "London", time: "5 minutes ago" },
    { name: "David K.", location: "Toronto", time: "7 minutes ago" },
    { name: "Emma R.", location: "Sydney", time: "12 minutes ago" },
    { name: "James T.", location: "Berlin", time: "15 minutes ago" }
  ]

  return (
    <section ref={heroRef} className="pt-24 pb-16 md:pt-28 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Social proof bar */}
        <div className={`max-w-4xl mx-auto mb-8 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          <div className="flex flex-col md:flex-row items-center justify-between glass bg-gray-800/30 rounded-lg px-6 py-3">
            <div className="flex items-center mb-3 md:mb-0">
              <Award className="h-5 w-5 text-yellow-400 mr-2" />
              <span className="text-sm font-medium text-gray-300">Trusted by 10,000+ developers worldwide</span>
            </div>
            <div className="h-6 border-l border-gray-700 hidden md:block"></div>
            <div className="flex items-center mb-3 md:mb-0">
              <Shield className="h-5 w-5 text-green-400 mr-2" />
              <span className="text-sm font-medium text-gray-300">30-day money-back guarantee</span>
            </div>
            <div className="h-6 border-l border-gray-700 hidden md:block"></div>
            <div className="flex items-center">
              <Zap className="h-5 w-5 text-blue-400 mr-2" />
              <span className="text-sm font-medium text-gray-300">Instant access after purchase</span>
            </div>
          </div>
        </div>
        
        {/* Recent buyers notification */}
        <div className="fixed bottom-4 left-4 z-40 max-w-xs">
          {recentBuyers.map((buyer, index) => (
            <div 
              key={index}
              className={`glass bg-gray-800/70 backdrop-blur-md rounded-lg p-3 shadow-lg border border-purple-500/20 transition-all duration-500 transform ${
                activeBuyer === index ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 absolute'
              }`}
            >
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mr-3">
                  <span className="text-white text-xs font-bold">{buyer.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{buyer.name} from {buyer.location}</p>
                  <p className="text-gray-400 text-xs">Purchased {buyer.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Alert banner */}
        <div className={`max-w-4xl mx-auto mb-10 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          <div className="glass bg-gradient-to-r from-indigo-900/40 to-purple-900/40 rounded-lg px-4 py-3 flex items-center justify-center text-center shadow-lg">
            <AlertTriangle className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0" />
            <p className="text-sm md:text-base font-medium text-white">
              Your Google Docs Full of "Someday" Ideas Are Bleeding You Dry. Execution.
            </p>
          </div>
        </div>
        
        {/* Main headline */}
        <div className={`text-center mb-12 transform transition-all duration-700 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 font-cal">
            <span className="gradient-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 animate-gradient-shift">
              Launch 3 Apps Before Most People
            </span>
            <br />
            <span className="gradient-text bg-gradient-to-r from-red-400 via-pink-500 to-red-400 animate-gradient-shift">
              Finish Drafting
            </span>
            <span className="text-white"> One Pitch Deck.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            xBesh is your AI Dev Assassin — crushes the tech bottleneck, ships your app, hooks Stripe, and gets you live — in under an hour. Execution wins. Excuses lose.
          </p>
        </div>
        
        {/* Video section */}
        <div className={`max-w-5xl mx-auto mb-16 relative transform transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden border border-gray-700 shadow-2xl">
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              {/* Video thumbnail with play button */}
              <div className="relative w-full h-full">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80" 
                  alt="Developer working on code" 
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Limited offer badge */}
          <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-bold px-4 py-1 rounded-full shadow-lg transform rotate-12 animate-pulse-glow">
            50% OFF Launch Special
          </div>
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`bg-gray-800/70 border border-gray-700 rounded-lg p-4 flex items-start hover:border-purple-500/30 transition-all transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${300 + index * 50}ms` }}
            >
              <CheckCircle className="h-5 w-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
              <p className="text-gray-200">{feature}</p>
            </div>
          ))}
        </div>
        
        {/* CTA section */}
        <div className={`max-w-4xl mx-auto text-center transform transition-all duration-700 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Done Waiting To Grab The Key of Your Success Vault?
          </h2>
          
          <div className="mb-8 relative">
            <a 
              href="#" 
              className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-xl font-bold px-8 py-4 rounded-lg shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 transition-all"
            >
              <ShoppingCart className="h-6 w-6 mr-3" />
              CLICK HERE TO GET INSTANT ACCESS
              <ArrowRight className="h-5 w-5 ml-3" />
            </a>
            
            {/* Scarcity indicator */}
            <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
              Only 17 left!
            </div>
          </div>
          
          {/* Payment methods and guarantee */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
            <div className="flex items-center space-x-2">
              {['PayPal', 'Visa', 'Amex', 'Discover', 'Mastercard'].map((card) => (
                <div key={card} className="w-10 h-6 bg-white rounded flex items-center justify-center text-xs text-gray-800 font-bold">
                  {card.charAt(0)}
                </div>
              ))}
            </div>
            
            <div className="h-8 border-l border-gray-700 hidden md:block"></div>
            
            <div className="flex items-center text-white">
              <Shield className="h-5 w-5 text-green-400 mr-2" />
              <span>30-Day Money Back Guarantee</span>
            </div>
          </div>
          
          {/* Countdown timer */}
          <div className="max-w-md mx-auto mb-8">
            <p className="text-gray-400 mb-3">Launch Offer Ends In:</p>
            <div className="grid grid-cols-4 gap-2">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds }
              ].map((item, index) => (
                <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg p-3">
                  <div className="text-2xl font-bold text-white">{item.value}</div>
                  <div className="text-xs text-gray-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Final pitch */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-800/70 border border-gray-700 rounded-lg p-6 md:p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4 text-pink-500">
              xBesh doesn't assist — it executes.
            </h3>
            <p className="text-gray-300 text-lg">
              You're not here to build. You're here to ship. And xBesh? It's the silent beast in your corner, doing the dirty work while you steal the spotlight.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
