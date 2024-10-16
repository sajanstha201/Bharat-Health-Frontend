import React from 'react';
import { useLocation } from 'react-router-dom';
export default function MedicalPrescriptionCard(){
    const loc=useLocation()
    const params=new URLSearchParams(loc.search)
    const prescription=JSON.parse(decodeURIComponent(params.get('prescription')))
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Medical Prescription Details</h2>

      <div className="space-y-4">

        <div className="flex justify-between">
          <span className="font-semibold">Systolic Blood Pressure (BP S):</span>
          <span>{prescription.bp_s} mmHg</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">Diastolic Blood Pressure (BP D):</span>
          <span>{prescription.bp_d} mmHg</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">Oxygen Saturation:</span>
          <span>{prescription.saturation} %</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">Pulse Rate:</span>
          <span>{prescription.pulse_rate} bpm</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">Weight:</span>
          <span>{prescription.weight} kg</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">MAP:</span>
          <span>{prescription.MAP} mmHg</span>
        </div>

        <div className="flex flex-col">
          <span className="font-semibold">Symptoms:</span>
          <span>{prescription.symptoms || 'N/A'}</span>
        </div>

        <div className="flex flex-col">
          <span className="font-semibold">Past Medical History (PMH):</span>
          <span>{prescription.PMH || 'N/A'}</span>
        </div>

        <div className="flex flex-col">
          <span className="font-semibold">Medication:</span>
          <span>{prescription.medication || 'N/A'}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">Test Lab ID:</span>
          <span>{prescription.test_lab || 'N/A'}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">Surgery Recommendation:</span>
          <span>{prescription.surgery_recommendation || 'N/A'}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">Surgery Type:</span>
          <span>{prescription.surgery_type || 'N/A'}</span>
        </div>

        <div className="flex flex-col">
          <span className="font-semibold">Reason for Surgery:</span>
          <span>{prescription.reason_for_surgery || 'N/A'}</span>
        </div>

        <div className="flex flex-col">
          <span className="font-semibold">Follow-Up:</span>
          <span>{prescription.followup || 'N/A'}</span>
        </div>

        <div className="flex flex-col">
          <span className="font-semibold">Additional Information:</span>
          <span>{prescription.additional_info || 'N/A'}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">Date:</span>
          <span>{prescription.date}</span>
        </div>
      </div>
    </div>
  );
};
