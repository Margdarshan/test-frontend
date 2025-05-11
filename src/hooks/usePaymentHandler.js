import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAuthStore from '../store/authStore';
import httpClient from '../core/api/httpClient';

const usePaymentHandler = () => {
  const { isAuthenticated, aut } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const loadScript = () =>
    new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

  const handlePaymentSuccess = async (response) => {
    const email = localStorage.getItem('email');
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      response;
    const amountRetrieved = localStorage.getItem('amount');
    const amount = Number(amountRetrieved);

    try {
      const res = await httpClient.post('/payment/details', {
        email,
        amount,
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
      });
      if (res.status === 200) {
        navigate('/frontend/payment-success');
      } else {
        navigate('/frontend/payment-unsuccess');
      }
    } catch (error) {
      console.error('Error during payment success handling: ', error);
      navigate('/frontend/payment-unsuccess');
    }
  };

  const showRazorPay = async (response) => {
    const scriptLoaded = await loadScript();

    if (!scriptLoaded) {
      alert('Failed to load Razorpay SDK. Are you online?');
      return;
    }

    const options = {
      key: process.env.REACT_APP_PUBLIC_KEY,
      amount: response.amount,
      currency: 'INR',
      name: 'Margdarshan',
      description: 'Test transaction',
      order_id: response.id,
      handler: handlePaymentSuccess,
      prefill: {
        name: localStorage.getItem('name') || "User's Name",
        email: localStorage.getItem('email') || 'user@example.com',
        contact: localStorage.getItem('contact') || '9999999999', // Ensure contact is set properly
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const rzpWindow = new window.Razorpay(options);
    rzpWindow.open();
    rzpWindow.on('payment.failed', (response) => {
      console.error('Payment failed: ', response.error);
    });
  };

  const checkAuth = async (price) => {
    if (isAuthenticated) {
      await paymentHandler(price);
    } else {
      navigate('/frontend/login');
    }
  };

  const paymentHandler = async (price) => {
    setIsLoading(true);
    setError(null);

    const modifiedPrice = price.substring(1);
    const amount = Number(modifiedPrice);
    localStorage.setItem('amount', amount);
    const email = localStorage.getItem('email') || null;

    if (!email) {
      setError('Email is required for payment.');
      setIsLoading(false);
      return;
    }

    try {
      const res = await httpClient.post('/payment', { email, amount });
      if (res.status === 200 && res.data.id) {
        await showRazorPay(res.data); // Ensure that the `order_id` is correctly passed
      } else {
        setError('Failed to initiate payment. Invalid response from server.');
      }
    } catch (error) {
      setError('Error initiating payment. Please try again.');
      console.error('Payment initiation error: ', error);
    } finally {
      setIsLoading(false);
    }
  };

  return { checkAuth, isAuthenticated, isLoading, error };
};

export default usePaymentHandler;
