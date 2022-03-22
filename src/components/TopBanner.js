import React, { useEffect } from 'react';
import '../styles/TopBanner.css';
import { useHistory } from 'react-router-dom';

const TopBanner = () => {
    const history = useHistory();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section className="top-banner">
            <div className="top-banner-container">
                <h2 className="banner-heading">Your best care begins at UniHealth Protection.</h2>
                <div className="banner-btn">
                    <button
                        style={{ cursor: 'pointer' }}
                        onClick={() => history.push('/doctors')}
                    >Find a Doctor</button>
                    <button
                        style={{ cursor: 'pointer' }}
                    >Find Your Location</button>
                    <button
                        style={{ cursor: 'pointer' }}
                    >My UniHealth </button>
                    <button
                        style={{ cursor: 'pointer' }}
                        onClick={() => history.push('/doctors')}
                    >Make an Appoinment</button>
                </div>
                <div className="search">
                    <input type="search" name="" id="" placeholder="Search UniHealth Protection" />
                </div>
            </div>
        </section>
    );
};

export default TopBanner;