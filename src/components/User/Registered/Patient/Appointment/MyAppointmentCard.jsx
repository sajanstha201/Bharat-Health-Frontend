import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const MyAppointmentCard = ({ appointmentDetail,fetchAppointment }) => {
    const navigate=useNavigate()
    const baseUrl = useSelector(state => state.baseUrl).backend;
    const userInfo = useSelector(state => state.userInfo); // Ensure userInfo is defined
    const {
        appointment_id,
        appointment_date,
        appointment_time,
        appointment_type,
        appointment_status,
        doctor
    } = appointmentDetail;

    const {
        doctor_id,
        profile_image,
        first_name,
        last_name,
        specialization
    } = doctor;

    // Handling rescheduling
    const handleReschedule = () => {
        navigate(`/patient/appointments/book?doctor=${JSON.stringify({doctor_id:doctor_id,specialization:specialization,image:baseUrl+profile_image,name:first_name+last_name})}`)
    };

    const handleCancel = async () => {
        try {
            const deleteUrl = `${baseUrl}api/patient/appointments/${appointment_id}/`;
            const response = await axios.delete(deleteUrl, {
                headers: { 'Authorization': `${userInfo.token}` } // Include the token properly
            });
            toast.success('Appointment cancelled successfully');
            fetchAppointment()
        } catch (error) {
            if (error.response) {
                toast.error(`Error: ${error.response.data.detail || 'An error occurred'}`);
            } else {
                toast.error('Failed to cancel appointment: Network error');
            }
        }
    };

    return (
        <div className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden my-4 flex items-center justify-center p-4">
            <div className='h-full flex items-center justify-center overflow-hidden rounded-md'>
                <img 
                    className="max-w-48 h-48 object-cover" 
                    src={baseUrl + profile_image} 
                    alt={`${first_name} ${last_name}'s profile`} 
                />
            </div>

            <div className="p-4">
                <h2 className="text-lg font-bold">{first_name} {last_name}</h2>
                <p className="text-gray-600">{specialization}</p>
                <p className="text-gray-700 mt-2"><strong>Date:</strong> {appointment_date}</p>
                <p className="text-gray-700"><strong>Time:</strong> {appointment_time}</p>
                <p className="text-gray-700"><strong>Appointment Type:</strong> {appointment_type}</p>
                <p className="text-gray-700"><strong>Status:</strong> {appointment_status}</p>
                {appointment_status !== 'Completed' && (
                    <div className="mt-4 flex justify-between gap-2">
                        <button
                            onClick={handleReschedule}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                        >
                            Reschedule
                        </button>
                        <button
                            onClick={handleCancel}
                            className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
                        >
                            Cancel
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyAppointmentCard;
