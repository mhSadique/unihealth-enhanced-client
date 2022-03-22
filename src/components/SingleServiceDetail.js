import React from 'react';

const SingleServiceDetail = ({service}) => {
    return (
        <div className="single-topic-detail">
            <div className="image">
                <img src={service.imgDetailed} alt="" />
            </div>
            <div className="text">
                <h3>{service.headingDetailed}</h3>
                <p>{service.desDetailed}</p>
            </div>
        </div>
    );
};

export default SingleServiceDetail;