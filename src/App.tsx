import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ExpertProjects from './pages/ExpertProjects'
import ResearchHub from './pages/ResearchHub'
import MasterclassSeries from './pages/MasterclassSeries'
import BrainstormingStudio from './pages/BrainstormingStudio'
import Membership from './pages/Membership'
import Login from './pages/Login'
import Blogs from './pages/Blogs'
import Courses from './pages/Courses'
import Cart from './pages/Cart'
import Payment from './pages/Payment'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/expert-projects" element={<ExpertProjects />} />
            <Route path="/research-hub" element={<ResearchHub />} />
            <Route path="/masterclass-series" element={<MasterclassSeries />} />
            <Route path="/brainstorming-studio" element={<BrainstormingStudio />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/login" element={<Login />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App