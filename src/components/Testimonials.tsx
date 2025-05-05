import React from 'react'
import { Star } from 'lucide-react'

const TestimonialCard = ({ quote, author, role, rating }) => {
  return (
    <div className="bg-gray-800/80 border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} 
          />
        ))}
      </div>
      <blockquote className="text-gray-300 mb-4">"{quote}"</blockquote>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
          {author.charAt(0)}
        </div>
        <div className="ml-3">
          <p className="text-white font-medium">{author}</p>
          <p className="text-gray-400 text-sm">{role}</p>
        </div>
      </div>
    </div>
  )
}

const Testimonials = () => {
  const testimonials = [
    {
      quote: "xBesh AI has completely transformed our development process. What used to take days now takes minutes. It's like having a senior developer on call 24/7.",
      author: "Sarah Johnson",
      role: "CTO, TechStart Inc.",
      rating: 5
    },
    {
      quote: "The code quality is impressive. Not just functional, but clean, well-documented, and following best practices. This tool pays for itself in time saved.",
      author: "Michael Chen",
      role: "Lead Developer, CodeCraft",
      rating: 5
    },
    {
      quote: "As a solo developer, xBesh AI feels like having an entire team at my fingertips. I can build and ship features faster than ever before.",
      author: "Alex Rodriguez",
      role: "Indie Developer",
      rating: 4
    },
    {
      quote: "We've cut our development time by 70% since implementing xBesh AI. The ROI is incredible, and our team loves using it.",
      author: "Jessica Williams",
      role: "Product Manager, EnterpriseApp",
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="py-16 md:py-24 relative">
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-600/10 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Loved by Developers</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See what developers and teams are saying about their experience with xBesh AI.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
