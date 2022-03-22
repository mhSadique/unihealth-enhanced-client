/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer>
        <div className="container">
            <div className="upper-portion">
                <div className="international">
                    <div className="info">
                        <p>For International Patients</p>
                        <div className="languages">
                            <a href="#">العربية</a>
                            <a href="#">中文</a>
                            <a href="#">Français</a>
                            <a href="#">Italiano</a>
                            <a href="#">日本語</a>
                            <a href="#">한국어</a>
                            <a href="#">Русский</a>
                            <a href="#">فارس</a>
                            <a href="#">Español</a>
                        </div>
                    </div>
                </div>
                <div className="patients">
                    <p>Patients</p>
                    <a href="#">Find a Doctor</a>
                    <a href="#">myUCLAhealth</a>
                    <a href="#">Find a Hospital or Clinic Near You</a>
                    <a href="#">Immediate Care Locations</a>
                    <a href="#">Emergency Department Locations</a>
                    <a href="#">Check your Insurance</a>
                    <a href="#">International Patients</a>
                    <a href="#">Billing &amp; Insurance</a>
                </div>
                <div className="get-involved">
                    <p>Get Involved</p>
                    <a href="#">Work at UniHealth</a>
                    <a href="#">Donate to UniHealth</a>
                    <a href="#">Volunteer for UniHealth</a>
                    <a href="#">Share Your Experience</a>
                    <a href="#">Subscribe to our Newsletter</a>
                </div>
                <div className="uni-health">
                    <p>UniHealth</p>
                    <a href="#">Contact a Department</a>
                    <a href="#">Your Feedback</a>
                    <a href="#">Contact Media Team</a>
                    <a href="#">Browse FAQs</a>
                    <a href="#">Read Patient Stories</a>
                    <a href="#">Download Our Apps</a>
                </div>
            </div>
            <div className="lower-portion">
                <div className="left">
                    <a href="#">UniHealth Campus</a>
                    <a href="#">School of Medicine</a>
                </div>
                <div className="right">
                    <a href="#">&copy; 2021 UniHealth</a>
                    <a href="#">Privacy Practices</a>
                    <a href="#">Emergency</a>
                    <a href="#">Nondiscrimination</a>
                    <a href="#">Report Misconduct</a>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer;