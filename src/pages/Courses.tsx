import React from 'react'
import { Video, Clock, Star, ShoppingCart } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface Course {
  id: number
  title: string
  instructor: string
  description: string
  duration: string
  rating: number
  price: number
}

const courses: Course[] = [
  {
    id: 1,
    title: 'Advanced Distributed Systems Design',
    instructor: 'Dr. Emily Chen',
    description: 'Master the art of designing scalable and resilient distributed systems.',
    duration: '12 weeks',
    rating: 4.8,
    price: 499.99
  },
  {
    id: 2,
    title: 'Big Data Processing with Apache Spark',
    instructor: 'Prof. Michael Rodriguez',
    description: 'Learn to process and analyze large-scale data using Apache Spark.',
    duration: '8 weeks',
    rating: 4.7,
    price: 399.99
  },
  {
    id: 3,
    title: 'Machine Learning for Data Engineers',
    instructor: 'Dr. Sarah Johnson',
    description: 'Apply machine learning techniques to solve complex data engineering problems.',
    duration: '10 weeks',
    rating: 4.9,
    price: 599.99
  },
]

const Courses: React.FC = () => {
  const navigate = useNavigate()

  const addToCart = (course: Course) => {
    // In a real application, you would update the cart state or send a request to the server
    console.log(`Added ${course.title} to cart`)
    // For now, we'll just navigate to the cart page
    navigate('/cart')
  }

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Data Engineering Courses</h1>
      <p className="text-xl text-gray-600">Enhance your skills with our expert-led courses in data engineering and system design.</p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map(course => (
          <div key={course.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col">
            <div className="flex-grow">
              <Video className="text-indigo-600 w-12 h-12 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <p className="text-gray-700 mb-2">Instructor: {course.instructor}</p>
              <div className="flex items-center mb-2">
                <Clock className="text-gray-400 w-4 h-4 mr-1" />
                <span className="text-gray-600">{course.duration}</span>
              </div>
              <div className="flex items-center mb-4">
                <Star className="text-yellow-400 w-4 h-4 mr-1" />
                <span className="text-gray-600">{course.rating.toFixed(1)}</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">${course.price.toFixed(2)}</span>
              <button
                onClick={() => addToCart(course)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300 flex items-center"
              >
                <ShoppingCart className="mr-2" /> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Courses