import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/VideoVisit.css';

const VideoVisit = () => {
    const history = useHistory();
    return (
        <section className="video-visit">
            <div className="video-visit-container">
                <div className="image">
                    <img src="https://www.peacehealth.org/sites/default/files/styles/630_360/public/gettyimages-1215515956-video-visit-mom-baby.jpg?itok=zQsvvSAc"
                        alt="" />
                </div>
                <div className="text">
                    <h3>California's best care from the comfort of your home.</h3>
                    <button
                        style={{ cursor: 'pointer' }}
                        onClick={() => history.push('/doctors')}
                    >Book a Video Visit</button>
                </div>
            </div>
        </section>
    );
};

export default VideoVisit;