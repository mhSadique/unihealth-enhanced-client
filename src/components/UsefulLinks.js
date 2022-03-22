/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const UsefulLinks = () => {
    return (
        <div className="useful-links">
            <h4>Helpful Links</h4>
            <a href="#">Mother praises UCLA Health surgeons who mended teen son at Northridge hospital <FontAwesomeIcon icon={faArrowRight} /> </a>
            <a href="#">Read our children's health blog <FontAwesomeIcon icon={faArrowRight} /> </a>
            <a href="#">Meet our patients <FontAwesomeIcon icon={faArrowRight} />  </a>
            <a href="#">Will children 5 to 11 soon be able to get their COVID-19 vaccines?  <FontAwesomeIcon icon={faArrowRight} /> </a>
            <a href="#">Toys help children adjust to stressful health-care surroundings <FontAwesomeIcon icon={faArrowRight} />  </a>
        </div>
    );
};

export default UsefulLinks;