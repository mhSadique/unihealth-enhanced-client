import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewSingleInProfile from '../components/ReviewSingleInProfile';
import WriteAReview from '../components/WriteAReview';
import '../styles/DoctorsDetails.css';

const DoctorsDetails = () => {
    const { id } = useParams();
    const [doctor, setDoctor] = useState({});
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`https://agile-garden-36261.herokuapp.com/doctor/single/${id}`)
            .then(res => res.json())
            .then(data => {
                setDoctor(data.doctor[0]);
                console.log(data.doctor[0]);
            })
    }, [id]);
    useEffect(() => {
        fetch(`https://agile-garden-36261.herokuapp.com/admin/reviews-of-single-doctor/${id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data.reviews);
            })
    }, [id]);
    return (
        <div className='profile-container'>
            {doctor.name &&
                <div>
                    <img src={doctor.imageUrl} alt="Doctor" />
                    <h2>{doctor.name}</h2>
                    <p>{doctor.designation}</p>
                </div>
            }
            {reviews.length &&
                <div>
                    {reviews.map(review => {
                        if (review.approved) {
                            return <ReviewSingleInProfile review={review} key={review._id} />
                        }
                        else return;

                    })}
                </div>
            }
            <WriteAReview doctorId={id} />
        </div>
    );
};

export default DoctorsDetails;