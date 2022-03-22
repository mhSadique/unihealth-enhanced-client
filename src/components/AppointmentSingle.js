import React, { useState, useEffect } from 'react';
import '../styles/AppointmentSingle.css';

const AppointmentSingle = ({ appointment }) => {
    const [doctor, setDoctor] = useState({});
    useEffect(() => {
        fetch(`https://agile-garden-36261.herokuapp.com/doctor/single/${appointment.doctorId}`)
            .then(res => res.json())
            .then(data => {
                setDoctor(data.doctor[0]);
                console.log(data.doctor[0]);
            })
    }, [appointment.doctorId]);

    console.log(doctor);
    return (
        <div className='appointment-single'>
            {doctor.name &&
                <>
                    <div className='patient'>
                        <h2>Patient's information</h2>
                        <p>Name: {appointment.name}</p>
                        <p>Phone: {appointment.phone}</p>
                        <p>Email: {appointment.email}</p>
                        <p>Prefered date: {appointment.preferedDate}</p>
                        <p>Prefered time: {appointment.preferedTime}</p>
                    </div>
                    <div className='doctor'>
                        <h2>Doctor's information</h2>
                        <p>Name: {doctor.name}</p>
                        <p>Phone: {doctor.phone}</p>
                        <p>Email: {doctor.email}</p>
                        <p>Designation: {doctor.designation}</p>
                    </div>
                </>}
        </div>
    );
};

export default AppointmentSingle;