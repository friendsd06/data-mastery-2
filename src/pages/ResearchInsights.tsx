import React from 'react'
import { BookOpen, ArrowRight } from 'lucide-react'

const researchTopics = [
  {
    id: 1,
    title: 'Advancements in Distributed Database Systems',
    description: 'Explore cutting-edge research on improving consistency, availability, and partition tolerance in distributed databases.',
    category: 'Databases'
  },
  {
    id: 2,
    title: 'Machine Learning for Anomaly Detection in Big Data',
    description: 'Investigate novel machine learning techniques for identifying anomalies in large-scale data streams.',
    category: 'Machine Learning'
  },
  {
    id: 3,
    title: 'Optimizing Data Pipelines for Real-time Processing',
    description: 'Analyze strategies and technologies for building efficient, low-latency data pipelines for real-time analytics.',
    category: 'Data Engineering'
  },
  // Add more research topics
]

const ResearchInsights: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Research Insights</h1>
      <p className="text-xl text-gray-600">Discover cutting-edge research and best practices in data engineering and system architecture.</p>
      
      <div className="grid md:grid-cols-2 gap-8">
        {researchTopics.map(topic => (
          <div key={topic.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <BookOpen className="text-purple-600 w-12 h-12 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">{topic.title}</h3>
            <p className="text-gray-600 mb-4">{topic.description}</p>
            <div className="flex justify-between items-center">
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">{topic.category}</span>
              <a href={`#/research-insights/${topic.id}`} className="text-purple-600 hover:text-purple-800 font-semibold flex items-center">
                Read More <ArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ResearchInsights