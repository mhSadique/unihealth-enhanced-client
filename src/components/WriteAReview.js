import React, { useState, useContext } from 'react';
import { UserContext } from '../Context/Context';

const WriteAReview = ({ doctorId }) => {
    const { user } = useContext(UserContext)
    const [review, setReview] = useState("");
    const handleReview = () => {
        const reviewData = {
            doctorId,
            reviewText: review,
            reviewedBy: user.email,
            approved: false
        };
        fetch(`https://agile-garden-36261.herokuapp.com/admin/create-review`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.result) {
                    alert('Thanks for your review');
                    setReview("");
                }
            })
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <input type="text" placeholder='Write a review here' value={review} onChange={(e) => setReview(e.target.value)} />
            <button
                style={{ cursor: 'pointer' }}
                onClick={handleReview}
            >Review</button>
        </div>
    );
};

export default WriteAReview;