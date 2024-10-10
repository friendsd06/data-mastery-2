import React, { useState } from 'react'
import { CreditCard, DollarSign, Gift } from 'lucide-react'

const Payment: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState('')

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Processing payment with method:', paymentMethod)
    // Implement payment processing logic here
  }

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Payment</h1>
      <p className="text-xl text-gray-600">Choose your preferred payment method to complete your subscription.</p>

      <form onSubmit={handlePayment} className="max-w-md mx-auto">
        <div className="space-y-4">
          <div>
            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="paymentMethod"
                value="creditCard"
                checked={paymentMethod === 'creditCard'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="form-radio"
              />
              <span className="flex items-center">
                <CreditCard className="mr-2" /> Credit Card
              </span>
            </label>
          </div>
          <div>
            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                checked={paymentMethod === 'paypal'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="form-radio"
              />
              <span className="flex items-center">
                <DollarSign className="mr-2" /> PayPal
              </span>
            </label>
          </div>
          <div>
            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="paymentMethod"
                value="giftCard"
                checked={paymentMethod === 'giftCard'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="form-radio"
              />
              <span className="flex items-center">
                <Gift className="mr-2" /> Gift Card
              </span>
            </label>
          </div>
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Proceed to Payment
          </button>
        </div>
      </form>

      <div className="bg-yellow-50 p-6 rounded-lg mt-8">
        <h3 className="text-2xl font-semibold mb-4">Secure Payments</h3>
        <p className="text-gray-700">
          All payments are processed securely. We do not store your payment information.
          For any issues or questions regarding payments, please contact our support team.
        </p>
      </div>
    </div>
  )
}

export default Payment