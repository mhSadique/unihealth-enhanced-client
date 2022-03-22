import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';

const GeneralServiceSingle = ({ service }) => {
    const history = useHistory();
    return (
        <div className="service">
            <img src={service.imgShort} alt="Doctor" />
            <h4>{service.serviceName}</h4>
            <p>{service.desShort}</p>
            <button onClick={() => history.push(`service/${service.id}`)}>Learn More <FontAwesomeIcon icon={faArrowRight}/> </button>
        </div>
    );
};

export default GeneralServiceSingle;