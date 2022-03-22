import React from 'react';
import AppointmentSingle from '../../components/AppointmentSingle';
import useAppointments from '../../hooks/useAppointments';
import AdminDashboard from '../AdminDashboard';
import '../../styles/Appointment.css';

const Appointments = () => {
    const appointments = useAppointments();
    return (
        <div className='appointment-container'>
            <AdminDashboard />
            <div className='appointment-single-container'>
                {appointments.map(appointment => <AppointmentSingle key={appointment._id} appointment={appointment} />)}
            </div>
        </div>
    );
};

export default Appointments;