import React, { useState, useEffect } from 'react';
import '../styles/ReviewSingle.css';

const ReviewSingle = ({ review }) => {
    const [doctor, setDoctor] = useState({});
    useEffect(() => {
        fetch(`https://agile-garden-36261.herokuapp.com/doctor/single/${review.doctorId}`)
            .then(res => res.json())
            .then(data => {
                setDoctor(data.doctor[0]);
                console.log(data.doctor[0]);
            })
    }, [review.doctorId]);

    const handleApprove = () => {
        fetch(`https://agile-garden-36261.herokuapp.com/admin/change-review-status/${review._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ approvedStatus: true })
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    alert('Approved')
                }
            })
    };
    const handleHide = () => {
        fetch(`https://agile-garden-36261.herokuapp.com/admin/change-review-status/${review._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ approvedStatus: false })
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    alert('Hidden')
                }
            })
    };
    return (
        <div className='review-single'>
            {doctor.name &&
                <>
                    <div className='patient'>
                        <h2>
                            <i>
                                <span style={{ fontSize: '30px' }}>"</span>
                                {review.reviewText}
                                <span style={{ fontSize: '30px' }}>"</span>
                            </i>
                        </h2>
                        <p>Reviewed by: {review.reviewedBy}</p>
                    </div>
                    <div className='doctor'>
                        <h3>Doctor's information</h3>
                        <p>Name: {doctor.name}</p>
                        <p>Designation: {doctor.designation}</p>
                    </div>
                    <button
                        onClick={handleApprove}
                        style={{
                            marginTop: '5px',
                            marginBottom: '5px',
                            fontSize: '15px',
                            padding: '7px 12px',
                            backgroundColor: 'green',
                            cursor: 'pointer'
                        }}>
                        Approve
                    </button>
                    <button
                        onClick={handleHide}
                        style={{
                            margin: '15px',
                            fontSize: '15px',
                            padding: '7px 12px',
                            backgroundColor: 'gray',
                            cursor: 'pointer'
                        }}>
                        Hide
                    </button>
                </>}
        </div>
    );
};

export default ReviewSingle;