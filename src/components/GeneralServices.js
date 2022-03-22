import React from 'react';
import useServices from '../hooks/useServices';
import '../styles/GeneralServices.css';
import GeneralServiceSingle from './GeneralServiceSingle';

const GeneralServices = () => {
    const { generalServices } = useServices();

    return (
        <section className="general-services">
            <h3>General Services</h3>
            <div className="general-services-container">
                {generalServices.map(service => <GeneralServiceSingle service={service} key={service.id} />)}
            </div>
        </section>
    );
};

export default GeneralServices;