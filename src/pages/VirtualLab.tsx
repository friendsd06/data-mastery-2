import React from 'react'
import { Cpu, Server, Cloud, Database, Network } from 'lucide-react'

const VirtualLab: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Virtual Data Engineering Lab</h1>
      <p className="text-xl text-gray-600">Experience enterprise-grade infrastructure in a risk-free, cloud-based environment.</p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Cpu className="text-blue-600 w-12 h-12 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Distributed Computing Cluster</h3>
          <p className="text-gray-600">Access a Hadoop cluster with Spark for big data processing tasks.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Server className="text-green-600 w-12 h-12 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">High-Performance Databases</h3>
          <p className="text-gray-600">Experiment with various database systems like Cassandra, MongoDB, and PostgreSQL.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Cloud className="text-purple-600 w-12 h-12 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Cloud Services Sandbox</h3>
          <p className="text-gray-600">Practice with AWS, Google Cloud, and Azure services in a controlled environment.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Database className="text-red-600 w-12 h-12 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Data Pipeline Workbench</h3>
          <p className="text-gray-600">Build and test complex data pipelines using tools like Apache Kafka and Airflow.</p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mt-8">
        <h3 className="text-2xl font-semibold mb-4 flex items-center">
          <Network className="text-blue-600 w-8 h-8 mr-2" />
          Real-time Collaboration
        </h3>
        <p className="text-gray-700">
          Work together with peers on complex projects in real-time. Our virtual lab supports multi-user access,
          allowing you to collaborate on system designs, troubleshoot issues, and learn from each other's approaches.
        </p>
      </div>

      <div className="text-center mt-8">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300">
          Launch Virtual Lab
        </button>
      </div>
    </div>
  )
}

export default VirtualLab