import React, { useState } from 'react';

const AddressForm = ({ nextStep, prevStep, setData }) => {
  // Local state to store the form data
  const [formData, setFormData] = useState({
    primaryAddress: '',
    secondaryAddress: '',
    state: '',
    city: '',
    pincode: '',
  });

  // Handler to update formData and call the setData prop
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Address Information</h2>
      <form>
        <input
          type="text"
          name="primaryAddress"
          placeholder="Primary Address"
          value={formData.primaryAddress}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="text"
          name="secondaryAddress"
          placeholder="Secondary Address"
          value={formData.secondaryAddress}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <div className="flex justify-between mb-4">
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            className="w-1/3 px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="w-1/3 px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={formData.pincode}
            onChange={handleChange}
            className="w-1/3 px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
        <div className="flex justify-between">
          <button
            className="w-1/3 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
            onClick={(e) => {
              e.preventDefault(); // Prevent default form submission
              prevStep();
            }}
          >
            Back
          </button>
          <button
            className="w-1/3 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
            onClick={(e) => {
              e.preventDefault(); // Prevent default form submission
              nextStep();
            }}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
