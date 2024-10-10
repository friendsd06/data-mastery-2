import React from 'react'
import { Database, ArrowRight, Clock, Users } from 'lucide-react'

const expertProjects = [
  {
    id: 1,
    title: 'Scalable Real-time Data Processing Pipeline',
    description: 'Design and implement a highly scalable, fault-tolerant data processing pipeline capable of handling millions of events per second.',
    duration: '12 weeks',
    teamSize: '4-6 members',
    technologies: ['Apache Kafka', 'Apache Flink', 'Apache Cassandra', 'Kubernetes', 'Prometheus', 'Grafana']
  },
  {
    id: 2,
    title: 'Distributed Machine Learning Platform',
    description: 'Build a distributed machine learning platform that can train and deploy models at scale, with support for online learning and model versioning.',
    duration: '16 weeks',
    teamSize: '5-7 members',
    technologies: ['TensorFlow', 'Kubernetes', 'Kubeflow', 'Apache Spark', 'MLflow', 'Docker']
  },
  {
    id: 3,
    title: 'Multi-model Polyglot Persistence Database System',
    description: 'Develop a custom database system that efficiently handles multiple data models (relational, document, graph) with a unified query language.',
    duration: '20 weeks',
    teamSize: '6-8 members',
    technologies: ['C++', 'Rust', 'LLVM', 'RocksDB', 'Protocol Buffers', 'gRPC']
  }
]

const ExpertProjects: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Expert-Level Data Engineering Projects</h1>
      <p className="text-xl text-gray-600">Dive deep into three comprehensive, industry-grade projects that will challenge your skills and expand your expertise.</p>
      
      <div className="space-y-12">
        {expertProjects.map(project => (
          <div key={project.id} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <Database className="text-indigo-600 w-16 h-16 mb-4" />
            <h3 className="text-3xl font-semibold mb-4">{project.title}</h3>
            <p className="text-gray-600 mb-6 text-lg">{project.description}</p>
            <div className="flex items-center space-x-8 mb-6">
              <div className="flex items-center">
                <Clock className="text-gray-400 mr-2" />
                <span>{project.duration}</span>
              </div>
              <div className="flex items-center">
                <Users className="text-gray-400 mr-2" />
                <span>{project.teamSize}</span>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="font-semibold mb-2 text-lg">Key Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">{tech}</span>
                ))}
              </div>
            </div>
            <a href={`#/expert-projects/${project.id}`} className="text-indigo-600 hover:text-indigo-800 font-semibold flex items-center text-lg">
              Explore Project Details <ArrowRight className="ml-2" />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExpertProjects