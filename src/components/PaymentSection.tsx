import React, { useState } from 'react';
import { CreditCard, CircleDollarSign } from 'lucide-react';

const PaymentSection = () => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card');
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      alert('Payment successful!');
    }, 2000);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-center text-[#2C3E50] mb-6">Payment Method</h2>
      
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => setPaymentMethod('card')}
          className={`flex items-center px-4 py-2 rounded-lg ${
            paymentMethod === 'card' 
              ? 'bg-[#1abc9c] text-white' 
              : 'bg-gray-100 text-gray-700'
          }`}
        >
          <CreditCard className="h-5 w-5 mr-2" />
          Credit Card
        </button>
        <button
          onClick={() => setPaymentMethod('paypal')}
          className={`flex items-center px-4 py-2 rounded-lg ${
            paymentMethod === 'paypal' 
              ? 'bg-[#1abc9c] text-white' 
              : 'bg-gray-100 text-gray-700'
          }`}
        >
          <CircleDollarSign className="h-5 w-5 mr-2" />
          PayPal
        </button>
      </div>

      {paymentMethod === 'card' ? (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#1abc9c] focus:border-[#1abc9c]"
              placeholder="1234 5678 9012 3456"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#1abc9c] focus:border-[#1abc9c]"
                placeholder="MM/YY"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">CVC</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#1abc9c] focus:border-[#1abc9c]"
                placeholder="123"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-4">
          <p className="text-gray-600 mb-4">You will be redirected to PayPal to complete your payment.</p>
          <div className="h-12 flex items-center justify-center text-[#1abc9c]">
            <CircleDollarSign className="h-8 w-8" />
          </div>
        </div>
      )}

      <button
        onClick={handlePayment}
        disabled={isProcessing}
        className="w-full mt-6 bg-[#1abc9c] text-white py-3 rounded-lg hover:bg-[#2C3E50] transition-colors disabled:opacity-50"
      >
        {isProcessing ? 'Processing...' : `Pay Now`}
      </button>
    </div>
  );
};

export default PaymentSection;