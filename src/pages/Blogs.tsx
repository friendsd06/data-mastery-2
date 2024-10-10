import React from 'react'
import { Calendar } from 'lucide-react'

interface BlogPost {
  date: string
  title: string
  link: string
}

const blogPosts: BlogPost[] = [
  { date: 'Oct 02, 2024', title: 'Leverage the equilibrium', link: '#' },
  { date: 'Sep 10, 2024', title: 'Not everything needs to be dumbed down', link: '#' },
  { date: 'Aug 26, 2024', title: 'The best resource is mythical', link: '#' },
  { date: 'Aug 19, 2024', title: "It's not about what you know, but about how you think", link: '#' },
  { date: 'Aug 13, 2024', title: 'Know a lot, a lot', link: '#' },
  { date: 'Aug 12, 2024', title: 'Going out of syllabus is okay', link: '#' },
  { date: 'Aug 06, 2024', title: 'Always negotiate the offer', link: '#' },
  { date: 'Jul 31, 2024', title: 'Never bad-mouth your ex-employer', link: '#' },
  { date: 'Jul 29, 2024', title: 'Prove you are a culture-fit', link: '#' },
  { date: 'Jul 23, 2024', title: 'Quantify your resume, through and through', link: '#' },
  // Add more blog posts here
]

const Blogs: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Blogs</h1>
      <p className="text-xl text-gray-600">
        Every week, I document and articulate my acquired knowledge and personal perspectives on
        topics that captivate my interest. Here are all blogs I wrote to date.
      </p>
      
      <ul className="space-y-4">
        {blogPosts.map((post, index) => (
          <li key={index} className="flex items-start">
            <Calendar className="text-indigo-600 mr-2 mt-1 flex-shrink-0" />
            <div>
              <span className="text-gray-500 mr-2">{post.date} :</span>
              <a href={post.link} className="text-indigo-600 hover:text-indigo-800 font-semibold">
                {post.title}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Blogs