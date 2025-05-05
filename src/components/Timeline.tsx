import React from 'react'
import { Code, Zap, Sparkles, Rocket } from 'lucide-react'

const Timeline = () => {
  const timelinePoints = [
    {
      icon: <Code className="w-5 h-5 text-white" />,
      position: 'top-32 md:top-36',
      pulse: true
    },
    {
      icon: <Zap className="w-5 h-5 text-white" />,
      position: 'top-96 md:top-[30rem]'
    },
    {
      icon: <Sparkles className="w-5 h-5 text-white" />,
      position: 'top-[45rem] md:top-[50rem]'
    },
    {
      icon: <Rocket className="w-5 h-5 text-white" />,
      position: 'top-[65rem] md:top-[70rem]'
    }
  ]

  return (
    <div className="fixed left-8 md:left-16 top-0 bottom-0 w-1 z-20 hidden md:block">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-pink-500 to-purple-600/30"></div>
      
      {/* Timeline points */}
      {timelinePoints.map((point, index) => (
        <div 
          key={index}
          className={`absolute ${point.position} -translate-x-1/2 z-30`}
        >
          <div className={`
            w-10 h-10 rounded-full flex items-center justify-center
            ${point.pulse 
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse-slow shadow-glow-strong' 
              : 'bg-gray-800 border border-purple-500/50'}
          `}>
            {point.icon}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Timeline
