import React from 'react'
import { Link } from 'react-router-dom'
import { Database, BookOpen, Video, Users, PenTool, FileText, CreditCard, ShoppingCart } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-indigo-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <Database className="mr-2" />
          DataArchMastery
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/expert-projects" className="hover:text-indigo-200"><Database className="inline mr-1" />Projects</Link></li>
            <li><Link to="/research-hub" className="hover:text-indigo-200"><BookOpen className="inline mr-1" />Research</Link></li>
            <li><Link to="/masterclass-series" className="hover:text-indigo-200"><Video className="inline mr-1" />Masterclass</Link></li>
            <li><Link to="/brainstorming-studio" className="hover:text-indigo-200"><PenTool className="inline mr-1" />Brainstorm</Link></li>
            <li><Link to="/blogs" className="hover:text-indigo-200"><FileText className="inline mr-1" />Blogs</Link></li>
            <li><Link to="/membership" className="hover:text-indigo-200"><Users className="inline mr-1" />Membership</Link></li>
            <li><Link to="/courses" className="hover:text-indigo-200"><Video className="inline mr-1" />Courses</Link></li>
            <li><Link to="/cart" className="hover:text-indigo-200"><ShoppingCart className="inline mr-1" />Cart</Link></li>
            <li><Link to="/login" className="bg-white text-indigo-800 px-4 py-2 rounded-md hover:bg-indigo-100">Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header