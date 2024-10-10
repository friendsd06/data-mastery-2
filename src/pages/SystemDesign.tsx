import React, { useState } from 'react'
import { Search, ArrowRight } from 'lucide-react'

const systemDesignQuestions = [
  { id: 1, title: 'Design a Distributed File Storage System', complexity: 'High' },
  { id: 2, title: 'Architect a Real-time Analytics Platform', complexity: 'High' },
  { id: 3, title: 'Design a Scalable Social Media Backend', complexity: 'Medium' },
  { id: 4, title: 'Build a Distributed Task Scheduler', complexity: 'Medium' },
  { id: 5, title: 'Create a High-Performance Caching System', complexity: 'High' },
  // Add more questions to reach 50
]

const SystemDesign: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredQuestions = systemDesignQuestions.filter(question =>
    question.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">System Design Challenges</h1>
      <p className="text-xl text-gray-600">Explore 50 in-depth system design questions with detailed, research-oriented answers.</p>
      
      <div className="relative">
        <input
          type="text"
          placeholder="Search system design questions..."
          className="w-full pl-10 pr-4 py-2 border rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="absolute left-3 top-2.5 text-gray-400" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filteredQuestions.map(question => (
          <div key={question.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-2">{question.title}</h3>
            <p className="text-gray-600 mb-4">Complexity: {question.complexity}</p>
            <a href={`#/system-design/${question.id}`} className="text-indigo-600 hover:text-indigo-800 font-semibold flex items-center">
              View Details <ArrowRight className="ml-2" />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SystemDesign