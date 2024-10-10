import React from 'react'
import { BookOpen, ArrowRight, Tag } from 'lucide-react'

const researchPapers = [
  {
    id: 1,
    title: 'Advancements in Distributed Consensus Algorithms',
    authors: 'Dr. Emily Chen, Dr. Michael Rodriguez',
    abstract: 'This paper presents novel improvements to distributed consensus algorithms, focusing on reducing latency and increasing fault tolerance in large-scale systems.',
    tags: ['Distributed Systems', 'Consensus Algorithms', 'Fault Tolerance']
  },
  {
    id: 2,
    title: 'Efficient Query Optimization for Multi-model Databases',
    authors: 'Prof. Sarah Johnson, Dr. David Lee',
    abstract: 'We propose a new query optimization technique for multi-model databases that significantly improves query performance across different data models.',
    tags: ['Databases', 'Query Optimization', 'Multi-model Data']
  },
  {
    id: 3,
    title: 'Scalable Machine Learning on Streaming Data',
    authors: 'Dr. Alex Turner, Prof. Lisa Wang',
    abstract: 'This research introduces a novel approach to scaling machine learning algorithms for high-velocity streaming data, enabling real-time model updates and predictions.',
    tags: ['Machine Learning', 'Streaming Data', 'Scalability']
  },
]

const ResearchHub: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Research Hub</h1>
      <p className="text-xl text-gray-600">Access cutting-edge research papers and in-depth analyses of emerging technologies in data engineering and system design.</p>
      
      <div className="space-y-8">
        {researchPapers.map(paper => (
          <div key={paper.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <BookOpen className="text-green-600 w-12 h-12 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">{paper.title}</h3>
            <p className="text-gray-600 mb-2">by {paper.authors}</p>
            <p className="text-gray-700 mb-4">{paper.abstract}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {paper.tags.map((tag, index) => (
                <span key={index} className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  <Tag className="w-4 h-4 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
            <a href={`#/research-hub/${paper.id}`} className="text-green-600 hover:text-green-800 font-semibold flex items-center">
              Read Full Paper <ArrowRight className="ml-2" />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ResearchHub