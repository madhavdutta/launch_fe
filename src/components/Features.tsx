import React from 'react'
import { Code, Zap, Sparkles, Cpu, Rocket, Brain, Layers, Shield } from 'lucide-react'

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-gray-800/80 border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-600/10">
      <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-purple-400" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

const Features = () => {
  const features = [
    {
      icon: Code,
      title: "Instant Code Generation",
      description: "Generate production-ready code in any language or framework with simple natural language prompts."
    },
    {
      icon: Zap,
      title: "Lightning-Fast Debugging",
      description: "Identify and fix bugs in seconds, not hours. xBesh AI analyzes your code and suggests optimal solutions."
    },
    {
      icon: Layers,
      title: "Full-Stack Capabilities",
      description: "From frontend to backend, databases to APIs - xBesh handles every aspect of your development stack."
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Get intelligent suggestions for code improvements, performance optimizations, and best practices."
    },
    {
      icon: Shield,
      title: "Security-First Approach",
      description: "All code generated follows security best practices and is checked for common vulnerabilities."
    },
    {
      icon: Rocket,
      title: "10x Development Speed",
      description: "Complete projects in days instead of weeks. xBesh AI dramatically accelerates your development workflow."
    }
  ]

  return (
    <section id="features" className="py-16 md:py-24 relative">
      <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-purple-600/10 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Supercharge Your Development</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            xBesh AI combines cutting-edge artificial intelligence with deep software development expertise to transform how you build applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg text-white font-bold text-lg shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 transition-all">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  )
}

export default Features
