import React, { useState } from 'react'
import { Cpu, Send, BookOpen, Code, Database } from 'lucide-react'

const AIAssistant: React.FC = () => {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle AI query submission
    console.log('Submitted query:', query)
    setQuery('')
  }

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">AI Research Assistant</h1>
      <p className="text-xl text-gray-600">Leverage cutting-edge AI to accelerate your learning and research in data engineering and system design.</p>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="flex items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask a question or request assistance..."
            className="flex-grow p-3 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button type="submit" className="bg-blue-600 text-white p-3 rounded-r-md hover:bg-blue-700 transition duration-300">
            <Send className="w-6 h-6" />
          </button>
        </form>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <BookOpen className="text-green-600 w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Literature Review</h3>
          <p className="text-gray-600">Get AI-powered summaries and insights from the latest research papers.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Code className="text-purple-600 w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Code Analysis</h3>
          <p className="text-gray-600">Receive suggestions for code optimization and best practices.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Database className="text-blue-600 w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">System Design Feedback</h3>
          <p className="text-gray-600">Get instant feedback on your system architecture designs.</p>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg mt-8">
        <h3 className="text-2xl font-semibold mb-4 flex items-center">
          <Cpu className="text-yellow-600 w-8 h-8 mr-2" />
          Continuous Learning
        </h3>
        <p className="text-gray-700">
          Our AI assistant evolves with you. It learns from your interactions, tailoring its responses to your skill level
          and interests. The more you use it, the more personalized and valuable its assistance becomes.
        </p>
      </div>
    </div>
  )
}

export default AIAssistant