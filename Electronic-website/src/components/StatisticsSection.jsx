import React from 'react'

const stats = [
  { label: "Comment level", value: "4M+" },
  { label: "User's", value: "53k" },
  { label: "Gallery", value: "153k" },
  { label: "Purchaser", value: "2M+" }
]

const StatisticsSection = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-h2 font-bold text-center mb-12">Our Statistics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatisticsSection

