import React from 'react';
import AdminDashboard from '../AdminDashboard';
import '../../styles/Reviews.css'
import useReviews from '../../hooks/useReviews';
import ReviewSingle from '../../components/ReviewSingle';

const Reviews = () => {
    const reviews = useReviews();
    console.log(reviews);
    return (
        <div className='review-container'>
            <AdminDashboard />
            <div className='review-single-container'>
                {reviews.map(review => <ReviewSingle key={review._id} review={review} />)}
            </div>
        </div>
    );
};

export default Reviews;