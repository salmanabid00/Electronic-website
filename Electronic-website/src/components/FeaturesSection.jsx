import React from 'react'

const features = [
  {
    title: "Touch Controls",
    description: "Some headphones have touch-sensitive surfaces for controlling playback.",
    icon: "🎧"
  },
  {
    title: "Sound Quality",
    description: "This includes considerations like bass response, clarity, and overall audio fidelity.",
    icon: "🔊"
  },
  {
    title: "Microphone",
    description: "Built-in microphones enable hands-free calling and voice commands.",
    icon: "🎤"
  }
]

const FeaturesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-h2 font-bold text-center mb-12">Amazing features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-h3 font-bold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection

