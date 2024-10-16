import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
export default function MedicalPrescription(){
   const loc=useLocation()
   const params=new URLSearchParams(loc.search)
   const baseUrl=useSelector(state=>state.baseUrl).backend
   const userInfo=useSelector(state=>state.userInfo)
   const patientInfo=JSON.stringify(decodeURIComponent(params.get('patient-info')))
  const [formData, setFormData] = useState({
    additional_info: '',
    bp_d: '',
    bp_s: '',
    date: '',
    doctor:userInfo.id,
    followup: '',
    map: '',
    medication: '',
    patient:patientInfo.patient,
    pmh: '',
    prescription_id: '',
    pulse_rate: '',
    reason_for_surgery: '',
    saturation: '',
    surgery_recommendation: '',
    surgery_type: '',
    symptoms: '',
    test_lab: '',//there is foreign key for this key so please review this test_lab section
    weight: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      console.log(formData)
      const response=await axios.post(`${baseUrl}api/doctor/medical-report/${userInfo.id}/?patient_id=${formData.patient}`,
         formData,
         {
            headers:{'Authorization':userInfo.token}
         }
      )
      toast.success('Successfully sumbitted the medical prescription')
      console.log(response.data)
    }
    catch(error){
      console.log(error)
      toast.error('error while submitting the medical prescription')
    }

  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6">Medical Prescription Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Doctor ID:</label>
            <input
              type="text"
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Patient ID:</label>
            <input
              type="text"
              name="patient"
              value={formData.patient}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Date:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
        </div>

        <h3 className="text-lg font-semibold mt-6">Vitals</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">BP Systolic:</label>
            <input
              type="number"
              name="bp_s"
              value={formData.bp_s}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">BP Diastolic:</label>
            <input
              type="number"
              name="bp_d"
              value={formData.bp_d}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Saturation (O2):</label>
            <input
              type="number"
              name="saturation"
              value={formData.saturation}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Weight (kg):</label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Pulse Rate:</label>
            <input
              type="number"
              name="pulse_rate"
              value={formData.pulse_rate}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Mean Arterial Pressure (MAP):</label>
            <input
              type="number"
              name="map"
              value={formData.map}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
        </div>

        <h3 className="text-lg font-semibold mt-6">Medical History</h3>
        <div>
          <label className="block text-sm font-medium text-gray-700">Symptoms:</label>
          <textarea
            name="symptoms"
            value={formData.symptoms}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Parent Medical History (PMH):</label>
          <textarea
            name="pmh"
            value={formData.pmh}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          ></textarea>
        </div>

        <h3 className="text-lg font-semibold mt-6">Prescription</h3>
        <div>
          <label className="block text-sm font-medium text-gray-700">Medications:</label>
          <input
            type="text"
            name="medication"
            value={formData.medication}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Test Lab:</label>
          <input
            type="text"
            name="test_lab"
            value={formData.test_lab}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        <h3 className="text-lg font-semibold mt-6">Surgery Details</h3>
        <div>
          <label className="block text-sm font-medium text-gray-700">Surgery Type:</label>
          <input
            type="text"
            name="surgery_type"
            value={formData.surgery_type}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Reason for Surgery:</label>
          <input
            type="text"
            name="reason_for_surgery"
            value={formData.reason_for_surgery}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Surgery Recommendation:</label>
          <input
            type="text"
            name="surgery_recommendation"
            value={formData.surgery_recommendation}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        <h3 className="text-lg font-semibold mt-6">Follow Up</h3>
        <div>
          <label className="block text-sm font-medium text-gray-700">Follow Up:</label>
          <input
            type="text"
            name="followup"
            value={formData.followup}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Additional Info:</label>
          <input
            type="text"
            name="additional_info"
            value={formData.additional_info}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <button type="submit" className="mt-6 w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-200">
          Submit
        </button>
      </form>
    </div>
  );
};
