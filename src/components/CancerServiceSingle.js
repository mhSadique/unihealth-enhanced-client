/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useHistory } from 'react-router-dom';

const CancerServiceSingle = ({ service }) => {
    const history = useHistory();
    return (
        <div className="service"
            style={{ cursor: 'pointer' }}
            onClick={() => history.push('/doctors')}
        >
            <a href="" className='service-link'>{service} </a>
            {/* <FontAwesomeIcon icon={faArrowRight} /> */}
        </div>
    );
};

export default CancerServiceSingle;