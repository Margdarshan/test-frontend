import React from 'react';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import useAdminLogin from '../hooks/useAdminLogin';
import MargLogo from '../../../assest/Marg-Logo.svg';

const AdminLogin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { mutate, isLoading, error } = useAdminLogin();

  const onSubmit = (data) => {
    mutate({ username: data.username, password: data.password });
  };

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen items-center">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
        <div className="flex justify-center mb-6">
          <img src={MargLogo} alt="Logo" className="h-10" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="username">
              Username
            </label>
            <div className="flex items-center border-b border-gray-300 py-2">
              <FaEnvelope className="text-gray-500 mr-3" />
              <input
                id="username"
                type="email"
                className="w-full px-2 py-1 focus:outline-none"
                placeholder="Enter your email"
                {...register("username", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address"
                  }
                })}
              />
            </div>
            {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-gray-700" htmlFor="password">
              Password
            </label>
            <div className="flex items-center border-b border-gray-300 py-2">
              <FaLock className="text-gray-500 mr-3" />
              <input
                id="password"
                type="password"
                className="w-full px-2 py-1 focus:outline-none"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters"
                  },
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*\d).+$/,
                    message: "Password must include at least one uppercase letter and one number"
                  }
                })}
              />
            </div>
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          {error && <p className="text-red-500 text-sm mb-2">{error.message || 'Invalid credentials'}</p>}

          <button
            type="submit"
            className="w-full bg-[#17C1E8] text-white py-2 rounded-full hover:bg-[#06a1c4] focus:outline-none"
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
