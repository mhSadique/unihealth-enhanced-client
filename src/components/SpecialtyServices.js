/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import useServices from '../hooks/useServices';
import '../styles/SpecialtyServices.css';
import SpecialtyServiceSingle from './SpecialtyServiceSingle';

const SpecialtyServices = () => {
    const {specialtyServices} = useServices();
    return (
        <section className="specialty-services">
            <h3>Specialty Services</h3>
            <div className="specialty-services-container">
                {specialtyServices.map(service => <SpecialtyServiceSingle service={service} key={service} />)}
            </div>
        </section>
    );
};

export default SpecialtyServices;