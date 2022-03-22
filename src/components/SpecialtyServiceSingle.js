/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useHistory } from 'react-router-dom';

const SpecialtyServiceSingle = ({ service }) => {
    const history = useHistory();
    return (
        <div
            style={{ cursor: 'pointer' }}
            onClick={() => history.push('/doctors')}
            className="service">
            <a href="" className='service-link'>{service} </a>
            {/* <FontAwesomeIcon icon={faArrowRight} /> */}
        </div>
    );
};

export default SpecialtyServiceSingle;