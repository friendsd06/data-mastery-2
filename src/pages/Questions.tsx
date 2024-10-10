import React, { useState } from 'react'
import { Search } from 'lucide-react'

const questionCategories = [
  'Algorithms', 'Data Structures', 'System Design', 'Database Design', 'Object-Oriented Design', 'Behavioral'
]

const sampleQuestions = [
  { id: 1, title: 'Implement a Binary Search Tree', category: 'Data Structures', difficulty: 'Medium' },
  { id: 2, title: 'Design a URL Shortener', category: 'System Design', difficulty: 'Hard' },
  { id: 3, title: 'Reverse a Linked List', category: 'Algorithms', difficulty: 'Easy' },
  { id: 4, title: 'Implement LRU Cache', category: 'Data Structures', difficulty: 'Medium' },
  { id: 5, title: 'Design Instagram', category: 'System Design', difficulty: 'Hard' },
]

const Questions: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const filteredQuestions = sampleQuestions.filter(question =>
    question.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === '' || question.category === selectedCategory)
  )

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Interview Questions</h1>
      
      <div className="flex flex-wrap gap-4">
        <div className="flex-grow">
          <div className="relative">
            <input
              type="text"
              placeholder="Search questions..."
              className="w-full pl-10 pr-4 py-2 border rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" />
          </div>
        </div>
        <select
          className="border rounded-md px-4 py-2"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {questionCategories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Difficulty</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredQuestions.map(question => (
              <tr key={question.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{question.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">{question.category}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    question.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                    question.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {question.difficulty}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Questions