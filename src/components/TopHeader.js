/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../styles/TopHeader.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhoneAlt, faGlobe, faSearch} from '@fortawesome/free-solid-svg-icons';

const TopHeader = () => {
    return (
        // Top header
    <header>
        <div className="header-container">
            <div className="header-links">
                <a href="#">myUniHealth</a>
                <a href="#">School of Medicine</a>
                <a href="#">Departments</a>
                <a href="#">Community &amp; Equity</a>
                <a href="#">News</a>
            </div>
            <div className="header-right-info">
                <a href="tel:+8801712345678"><FontAwesomeIcon icon={faPhoneAlt} /> +88 01712345678</a>
                <a href="#"><FontAwesomeIcon icon={faGlobe} /> Translate</a>
                <a href="#"><FontAwesomeIcon icon={faSearch} /> Search</a>
            </div>
        </div>
    </header>
    );
};

export default TopHeader;