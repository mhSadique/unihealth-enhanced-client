/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import useServices from '../hooks/useServices';
import '../styles/CancerServices.css';
import CancerServiceSingle from './CancerServiceSingle';

const CancerServices = () => {
    const {cancerServices} = useServices();
    return (
        <section className="cancer-services">
        <h3>Cancer Services</h3>
        <div className="cancer-services-container">
            {cancerServices.map(service => <CancerServiceSingle service={service} key={service} />)}
        </div>
    </section>
    );
};

export default CancerServices;