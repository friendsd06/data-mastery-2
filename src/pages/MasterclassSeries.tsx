import React, { useState } from 'react'
import { Video, Clock, Calendar, ArrowRight, X } from 'lucide-react'

interface Masterclass {
  id: number
  title: string
  instructor: string
  description: string
  duration: string
  date: string
  videoId: string
}

const masterclasses: Masterclass[] = [
  {
    id: 1,
    title: 'Advanced Distributed Systems Design',
    instructor: 'Dr. Emily Chen',
    description: 'Dive deep into the principles and practices of designing highly scalable and resilient distributed systems.',
    duration: '4 hours',
    date: 'June 15, 2024',
    videoId: 'ggSyF1SVFr4'
  },
  {
    id: 2,
    title: 'Optimizing Big Data Pipelines',
    instructor: 'Prof. Michael Rodriguez',
    description: 'Learn cutting-edge techniques for designing and optimizing big data pipelines for performance and cost-efficiency.',
    duration: '3 hours',
    date: 'July 22, 2024',
    videoId: 'bD8JnFKJgtU'
  },
  {
    id: 3,
    title: 'Machine Learning Systems at Scale',
    instructor: 'Dr. Sarah Johnson',
    description: 'Explore the challenges and solutions for deploying and managing machine learning systems in large-scale production environments.',
    duration: '5 hours',
    date: 'August 10, 2024',
    videoId: 'pxMyIqWLE0A'
  },
]

const MasterclassSeries: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const openVideo = (videoId: string) => {
    setSelectedVideo(videoId)
  }

  const closeVideo = () => {
    setSelectedVideo(null)
  }

  return (
    <div className="space-y-8 relative">
      <h1 className="text-4xl font-bold">Masterclass Series</h1>
      <p className="text-xl text-gray-600">Exclusive video series featuring industry leaders and academic experts in data engineering and system design.</p>
      
      <div className="grid md:grid-cols-2 gap-8">
        {masterclasses.map(masterclass => (
          <div key={masterclass.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <Video className="text-purple-600 w-12 h-12 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">{masterclass.title}</h3>
            <p className="text-gray-700 mb-2">Instructor: {masterclass.instructor}</p>
            <p className="text-gray-600 mb-4">{masterclass.description}</p>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center text-gray-500">
                <Clock className="w-4 h-4 mr-1" />
                {masterclass.duration}
              </div>
              <div className="flex items-center text-gray-500">
                <Calendar className="w-4 h-4 mr-1" />
                {masterclass.date}
              </div>
            </div>
            <button
              onClick={() => openVideo(masterclass.videoId)}
              className="text-purple-600 hover:text-purple-800 font-semibold flex items-center"
            >
              Watch Preview <ArrowRight className="ml-2" />
            </button>
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg w-full max-w-3xl">
            <div className="flex justify-end mb-2">
              <button onClick={closeVideo} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MasterclassSeries