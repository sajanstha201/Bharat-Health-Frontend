import React from 'react';
import { useLocation } from 'react-router-dom';
const MedicalPrescriptionCard = () => {
    const loc=useLocation()
    const params=new URLSearchParams(loc.search)
    const prescription=JSON.parse(decodeURIComponent(params.get('prescription')))
  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Medical Prescription</h2>

      {/* Date */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Date:</label>
        <p className="text-gray-900">{prescription.date}</p>
      </div>

      {/* Blood Pressure */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Systolic BP (BP S):</label>
          <p className="text-gray-900">{prescription.bp_s}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Diastolic BP (BP D):</label>
          <p className="text-gray-900">{prescription.bp_d}</p>
        </div>
      </div>

      {/* Other Vitals */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Pulse Rate:</label>
          <p className="text-gray-900">{prescription.pulse_rate}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Saturation:</label>
          <p className="text-gray-900">{prescription.saturation}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Weight:</label>
          <p className="text-gray-900">{prescription.weight} kg</p>
        </div>
      </div>

      {/* MAP */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">MAP:</label>
        <p className="text-gray-900">{prescription.map}</p>
      </div>

      {/* Symptoms and PMH */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Symptoms:</label>
        <p className="text-gray-900">{prescription.symptoms}</p>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">PMH:</label>
        <p className="text-gray-900">{prescription.pmh}</p>
      </div>

      {/* Medication */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Medication:</label>
        <p className="text-gray-900">{prescription.medication}</p>
      </div>

      {/* Surgery Info */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Surgery Recommendation:</label>
        <p className="text-gray-900">{prescription.surgery_recommendation}</p>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Surgery Type:</label>
        <p className="text-gray-900">{prescription.surgery_type}</p>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Reason for Surgery:</label>
        <p className="text-gray-900">{prescription.reason_for_surgery}</p>
      </div>

      {/* Follow-up and Additional Info */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Follow-up:</label>
        <p className="text-gray-900">{prescription.followup}</p>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Additional Info:</label>
        <p className="text-gray-900">{prescription.additional_info}</p>
      </div>

      {/* Starred */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Starred:</label>
        <p className="text-gray-900">{prescription.starred ? "Yes" : "No"}</p>
      </div>
    </div>
  );
};

export default MedicalPrescriptionCard;
