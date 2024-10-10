import React from 'react'
import { Database, ArrowRight } from 'lucide-react'

const dataProjects = [
  {
    id: 1,
    title: 'Real-time Fraud Detection System',
    description: 'Build a scalable, real-time fraud detection system using Apache Kafka, Apache Flink, and machine learning models.',
    technologies: ['Apache Kafka', 'Apache Flink', 'Machine Learning', 'Python', 'Scala']
  },
  {
    id: 2,
    title: 'Distributed Log Analytics Platform',
    description: 'Design and implement a distributed log analytics platform capable of processing petabytes of log data using the ELK stack and custom components.',
    technologies: ['Elasticsearch', 'Logstash', 'Kibana', 'Apache Kafka', 'Apache Spark']
  },
  {
    id: 3,
    title: 'Multi-model Database for IoT Data',
    description: 'Develop a multi-model database solution to efficiently store and query diverse IoT data types, including time-series, graph, and document data.',
    technologies: ['ArangoDB', 'InfluxDB', 'Apache Cassandra', 'GraphQL', 'Node.js']
  },
  // Add more projects to reach 10
]

const DataProjects: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Complex Data Engineering Projects</h1>
      <p className="text-xl text-gray-600">Explore 10 professional-grade big data projects solving real-world complex problems.</p>
      
      <div className="grid md:grid-cols-2 gap-8">
        {dataProjects.map(project => (
          <div key={project.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <Database className="text-green-600 w-12 h-12 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md text-sm">{tech}</span>
                ))}
              </div>
            </div>
            <a href={`#/data-projects/${project.id}`} className="text-green-600 hover:text-green-800 font-semibold flex items-center">
              View Project Details <ArrowRight className="ml-2" />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DataProjects