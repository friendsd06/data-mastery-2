import React from 'react'
import { ArrowRight, Database, BookOpen, Video, PenTool } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div className="space-y-16">
      <section className="text-center">
        <h1 className="text-5xl font-bold mb-4">Master Data Engineering & System Design</h1>
        <p className="text-xl text-gray-600 mb-8">Embark on a transformative journey through expert projects, cutting-edge research, and immersive learning experiences</p>
        <div className="flex justify-center space-x-4">
          <Link to="/expert-projects" className="bg-indigo-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-indigo-700 transition duration-300">
            Start Your Journey <ArrowRight className="inline ml-2" />
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Database className="text-indigo-600 w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Expert-Level Projects</h3>
          <p className="text-gray-600">Tackle industry-grade challenges with real-world complexity and scale</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <BookOpen className="text-green-600 w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Research Hub</h3>
          <p className="text-gray-600">Dive into cutting-edge research and contribute to groundbreaking papers</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Video className="text-purple-600 w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Masterclass Series</h3>
          <p className="text-gray-600">Learn from world-renowned experts through interactive sessions</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <PenTool className="text-pink-600 w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Brainstorming Studio</h3>
          <p className="text-gray-600">Collaborate, sketch, and plan your ideas with powerful tools</p>
        </div>
      </section>

      <section className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Why DataArchMastery Stands Apart</h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <ArrowRight className="text-green-500 mr-2 mt-1 flex-shrink-0" />
            <span>Immersive, project-based learning with real-world complexity</span>
          </li>
          <li className="flex items-start">
            <ArrowRight className="text-green-500 mr-2 mt-1 flex-shrink-0" />
            <span>Contribute to and publish research papers alongside industry experts</span>
          </li>
          <li className="flex items-start">
            <ArrowRight className="text-green-500 mr-2 mt-1 flex-shrink-0" />
            <span>Interactive masterclasses led by renowned professionals</span>
          </li>
          <li className="flex items-start">
            <ArrowRight className="text-green-500 mr-2 mt-1 flex-shrink-0" />
            <span>Powerful brainstorming tools for collaborative ideation and planning</span>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Home