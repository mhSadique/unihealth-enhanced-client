import React from 'react';

const ReviewSingleInProfile = ({ review }) => {
    return (
        <div className='review'>
            <h2>
                <i>
                    <span style={{ fontSize: '30px' }}>"</span>
                    {review.reviewText}
                    <span style={{ fontSize: '30px' }}>"</span>
                </i>
            </h2>
            <p>Reviewed by: {review.reviewedBy}</p>
        </div>
    );
};

export default ReviewSingleInProfile;