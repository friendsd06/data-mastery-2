import React from 'react'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Expert',
    price: '$199.99',
    period: 'month',
    features: [
      'Access to all 3 Expert-Level Projects',
      'Detailed project guides and resources',
      'Weekly mentorship sessions',
      'Access to Research Hub',
      'Participation in live Q&A sessions'
    ]
  },
  {
    name: 'Master',
    price: '$299.99',
    period: 'month',
    features: [
      'All Expert features',
      'Unlimited access to Masterclass Series',
      'Personalized project feedback from industry experts',
      'Priority support and code reviews',
      'Exclusive networking events with industry leaders'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    features: [
      'All Master features',
      'Customized training programs for teams',
      'On-demand consulting with subject matter experts',
      'Tailored research papers and technology insights',
      'Dedicated account manager'
    ]
  }
]

const Membership: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center">Choose Your Mastery Path</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto">
        Unlock unparalleled expertise in Data Engineering and System Design with our comprehensive membership plans.
      </p>
      
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col">
            <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
            <div className="text-3xl font-bold mb-2">{plan.price}</div>
            {plan.period && <div className="text-gray-500 mb-6">per {plan.period}</div>}
            <ul className="space-y-3 mb-8 flex-grow">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center">
                  <Check className="text-green-500 mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300">
              {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Your Journey'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Membership