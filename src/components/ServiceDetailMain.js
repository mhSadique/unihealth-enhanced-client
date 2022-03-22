/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../styles/ServiceDetailMain.css';
import SingleServiceDetail from './SingleServiceDetail';
import UsefulLinks from './UsefulLinks';

const ServiceDetailMain = ({service}) => {
    return (
        <section className="single-topic">
            <div className="single-topic-detail-container">
                <SingleServiceDetail service={service}/>
                <UsefulLinks />
            </div>
        </section>
    );
};

export default ServiceDetailMain;