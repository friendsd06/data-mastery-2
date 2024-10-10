import React from 'react'
import { Briefcase, Users, Award, Zap } from 'lucide-react'

const IndustryCollaboration: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Industry Collaboration Program</h1>
      <p className="text-xl text-gray-600">Work on real-world projects with leading tech companies and build your professional network.</p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Briefcase className="text-blue-600 w-12 h-12 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Real-World Projects</h3>
          <p className="text-gray-600">Collaborate with industry partners on cutting-edge data engineering and system design projects.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Users className="text-green-600 w-12 h-12 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Mentorship</h3>
          <p className="text-gray-600">Receive guidance from experienced professionals in leading tech companies.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Award className="text-purple-600 w-12 h-12 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Certifications</h3>
          <p className="text-gray-600">Earn industry-recognized certifications upon project completion.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Zap className="text-yellow-600 w-12 h-12 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Career Opportunities</h3>
          <p className="text-gray-600">Get fast-tracked for internships and job opportunities with partner companies.</p>
        </div>
      </div>

      <div className="bg-indigo-50 p-6 rounded-lg mt-8">
        <h3 className="text-2xl font-semibold mb-4">Featured Industry Partners</h3>
        <div className="flex flex-wrap justify-around items-center">
          {/* Replace with actual company logos */}
          <div className="w-32 h-32 bg-gray-200 rounded-full m-2"></div>
          <div className="w-32 h-32 bg-gray-200 rounded-full m-2"></div>
          <div className="w-32 h-32 bg-gray-200 rounded-full m-2"></div>
          <div className="w-32 h-32 bg-gray-200 rounded-full m-2"></div>
        </div>
      </div>

      <div className="text-center mt-8">
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-indigo-700 transition duration-300">
          Apply for Industry Collaboration
        </button>
      </div>
    </div>
  )
}

export default IndustryCollaboration