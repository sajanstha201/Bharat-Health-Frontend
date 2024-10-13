import React, { useState } from 'react';

const ContactInfoForm = ({ prevStep, handleSubmit, setData,data }) => {
  // Local state to manage form data
  const [formData, setFormData] = useState(data);

  // Handler to update form data and setData
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Information</h2>
      <form>
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <div className="flex justify-between">
          <button
            className="w-1/3 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
            onClick={(e) => {
              e.preventDefault(); // Prevent form submission
              prevStep();
            }}
          >
            Back
          </button>
          <button
            className="w-1/3 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
            onClick={(e) => {
              e.preventDefault(); // Prevent form submission
              handleSubmit();
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactInfoForm;
