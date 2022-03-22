import React from 'react';
import useDoctors from '../hooks/useDoctors';
import DoctorSingle from './DoctorSingle';
import '../styles/Doctors.css';

const Doctors = () => {
    const doctors = useDoctors();
    console.log(doctors);
    return (
        <>
            {doctors.length &&
                <>
                    <h2 className='doctors-heading'>Book an appointment</h2>
                    <div className='doctors-container'>
                        {doctors.map(doctor => <DoctorSingle key={doctor._id} doctor={doctor} />)}
                    </div>
                </>
            }
        </>
    );
};

export default Doctors;