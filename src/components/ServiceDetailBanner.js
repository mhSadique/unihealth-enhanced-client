import React from 'react';
import '../styles/ServiceDetailBanner.css';
const ServiceDetailBanner = ({service}) => {
    return (
        <section className="banner-single">
            <div className="banner-container">
                <div className="text-container">
                    <h2>{service.headingBanner}</h2>
                    <p>{service.paraBanner}</p>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetailBanner;