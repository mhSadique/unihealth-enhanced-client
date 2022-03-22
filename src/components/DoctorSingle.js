import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/DoctorSingle.css'

const DoctorSingle = ({ doctor }) => {
    const history = useHistory()
    return (
        <div className='doctor-single-container'>
            <img src={doctor.imageUrl} alt={doctor.name} />
            <h3 className='doctor-name'>{doctor.name}</h3>
            <p className='doctor-fee'>Fee BDT {doctor.fee}</p>
            <button className='doctor-button'
                onClick={() => history.push(`/make-appointment/${doctor._id}/${doctor.fee}`)}
            >Book an appointment</button>
            <button className='doctor-button-know-more'
                onClick={() => history.push(`/know-more/${doctor._id}`)}
            >Know more about him</button>
        </div>
    );
};

export default DoctorSingle;