import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../styles/MakeAppointment.css';

const initialState = {
    name: "",
    phone: "",
    email: "",
    preferedTime: "",
    preferedDate: ""
};

const MakeAppointment = () => {
    const history = useHistory();
    const { doctorId, feeAmount } = useParams();
    console.log(feeAmount);
    const [appointmentInfo, setAppointmentInfo] = useState({
        ...initialState,
        doctorId,
        payment: feeAmount >= 25000 ? (parseInt(feeAmount) * 80 / 100) : feeAmount
    });
    const onChangeHandler = (e) => {
        const newValue = e.target.value;
        const targetName = e.target.name;
        const newState = { ...appointmentInfo, [targetName]: newValue };
        setAppointmentInfo(newState);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (feeAmount >= 25000) alert('You have been given 20% discount.');
        fetch('https://agile-garden-36261.herokuapp.com/appointment/create-new', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointmentInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.result) {
                    alert('Appointment has been placed. We will call you soon.');
                    setAppointmentInfo(initialState);
                    history.push('/')
                }
            })
    };
    return (
        <section className="appointment">
            <div className="appointment-container">
                <form onSubmit={(e) => handleSubmit(e)} >
                    <h2>Book an Appointment</h2>
                    <p>Please fill out the form below to make an appointment</p>
                    <input type="text"
                        value={appointmentInfo.name}
                        onChange={(e) => onChangeHandler(e)}
                        name="name" id="" placeholder="First Name" /> <br />
                    <input type="tel"
                        value={appointmentInfo.phone}
                        onChange={(e) => onChangeHandler(e)}
                        name="phone" id="" placeholder="Phone Number" /> <br />
                    <input type="email"
                        value={appointmentInfo.email}
                        onChange={(e) => onChangeHandler(e)}
                        name="email" id="" placeholder="Email" /> <br />
                    <input type="time"
                        value={appointmentInfo.preferedTime}
                        onChange={(e) => onChangeHandler(e)}
                        name="preferedTime" id="" placeholder="Preferred Time" /> <br />
                    <input type="date"
                        value={appointmentInfo.preferedDate}
                        onChange={(e) => onChangeHandler(e)}
                        name="preferedDate" id="" placeholder="Preferred Date" /> <br />
                    <button style={{ cursor: 'pointer' }} type='submit'>Leave a Request</button>
                </form>
            </div>
        </section>
    );
};

export default MakeAppointment;