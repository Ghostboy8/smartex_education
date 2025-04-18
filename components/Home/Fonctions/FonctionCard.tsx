import React from 'react'
import { FaCheck } from 'react-icons/fa'

type Props = {
  plan: string,
  features: string[]
}

const FonctionCard = ({ plan, features }: Props) => {
  return (
    <div className='bg-white p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-blue-600'>
      <p className='text-xl font-semibold text-blue-600 text-center'>{plan}</p>
      <div className='mt-6 space-y-4'>
        {features.map((feature, index) => (
          <div key={index} className='flex items-start space-x-3'>
            <div className='w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center'>
              <FaCheck className='text-blue-600 text-sm' />
            </div>
            <p className='text-sm font-medium text-gray-700'>{feature}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FonctionCard
