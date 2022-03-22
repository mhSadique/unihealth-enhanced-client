import '../styles/FindDoctor.css';
import image from '../assets/images/doctorss.PNG';
const FindDoctor = () => {
    return (
        <section className="find-doctor">
        <div className="find-doctor-container">
            <div className="image">
                <img src={image} alt="Doctors"/>
            </div>
            <div className="text">
                <h1>Find a Provider</h1>
                <p>Find a UniHealth doctor who’s the perfect fit</p>
                <input type="search" name="" id="" placeholder="Search by a specialty, location of name"/>
                <div className="card-container">
                    <div className="card">
                        <h3>Book an Appointment</h3>
                        <p>See a doctor, virtually or in-person, with our easy online booking options.</p>
                        <button>Schedule now</button>
                    </div>
                    <div className="card">
                        <h3>Find a Primary Care Doctor</h3>
                        <p>Looking for a primary physician for yourself or your family? Start here.</p>
                        <button>See our doctors</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default FindDoctor;