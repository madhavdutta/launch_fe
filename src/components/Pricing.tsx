import React from 'react'
import { Check, X } from 'lucide-react'

const PricingCard = ({ 
  title, 
  price, 
  originalPrice,
  description, 
  features, 
  isPopular = false,
  buttonText = "Get Started"
}) => {
  return (
    <div className={`
      rounded-2xl overflow-hidden
      ${isPopular 
        ? 'border-2 border-purple-500 bg-gradient-to-b from-purple-900/40 to-gray-900 shadow-xl shadow-purple-500/20' 
        : 'border border-gray-700 bg-gray-800/80'}
    `}>
      {isPopular && (
        <div className="bg-purple-600 text-white text-center py-2 font-medium text-sm">
          MOST POPULAR
        </div>
      )}
      
      <div className="p-6 md:p-8">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        
        <div className="mb-6">
          <div className="flex items-end">
            <span className="text-4xl font-bold text-white">${price}</span>
            {originalPrice && (
              <span className="text-xl text-gray-400 line-through ml-2">${originalPrice}</span>
            )}
          </div>
          <p className="text-gray-400 text-sm mt-1">One-time payment</p>
        </div>
        
        <button className={`
          w-full py-3 rounded-lg font-bold mb-6 transition-all
          ${isPopular 
            ? 'bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50' 
            : 'bg-gray-700 text-white hover:bg-gray-600'}
        `}>
          {buttonText}
        </button>
        
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                {feature.included ? (
                  <Check className="h-5 w-5 text-green-400" />
                ) : (
                  <X className="h-5 w-5 text-gray-500" />
                )}
              </div>
              <p className={`ml-3 ${feature.included ? 'text-gray-300' : 'text-gray-500'}`}>
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Standard License",
      price: "47",
      originalPrice: "97",
      description: "Perfect for individual developers",
      features: [
        { text: "Full code generation capabilities", included: true },
        { text: "Debugging assistance", included: true },
        { text: "Single user license", included: true },
        { text: "6 months of updates", included: true },
        { text: "Standard support", included: true },
        { text: "Commercial use", included: true },
        { text: "API access", included: false },
        { text: "White-label option", included: false }
      ],
      isPopular: false,
      buttonText: "Pre-Order Now"
    },
    {
      title: "Professional License",
      price: "97",
      originalPrice: "197",
      description: "Ideal for professional developers",
      features: [
        { text: "Everything in Standard", included: true },
        { text: "Advanced code optimization", included: true },
        { text: "Priority support", included: true },
        { text: "12 months of updates", included: true },
        { text: "API access (1000 calls/day)", included: true },
        { text: "Team collaboration features", included: true },
        { text: "Custom templates", included: true },
        { text: "White-label option", included: false }
      ],
      isPopular: true,
      buttonText: "Pre-Order Now"
    },
    {
      title: "Agency License",
      price: "197",
      originalPrice: "397",
      description: "For teams and agencies",
      features: [
        { text: "Everything in Professional", included: true },
        { text: "Unlimited team members", included: true },
        { text: "White-label option", included: true },
        { text: "Lifetime updates", included: true },
        { text: "API access (unlimited)", included: true },
        { text: "Custom integration support", included: true },
        { text: "Dedicated account manager", included: true },
        { text: "Enterprise-grade security", included: true }
      ],
      isPopular: false,
      buttonText: "Pre-Order Now"
    }
  ]

  return (
    <section id="pricing" className="py-16 md:py-24 relative">
      <div className="absolute top-1/3 right-0 w-1/4 h-1/4 bg-purple-600/10 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-900/50 border border-purple-500/30 text-purple-300 mb-6">
            <span className="text-sm font-medium">Limited Time Launch Offer</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Invest in Your Development Superpowers</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the plan that's right for you. All plans include our core AI-powered development features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard 
              key={index}
              title={plan.title}
              price={plan.price}
              originalPrice={plan.originalPrice}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
              buttonText={plan.buttonText}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center bg-gray-800/80 border border-purple-500/30 rounded-xl p-6 md:p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">100% Money-Back Guarantee</h3>
          <p className="text-gray-300">
            Try xBesh AI risk-free for 30 days. If you're not completely satisfied with the results, we'll refund your purchase - no questions asked.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Pricing
