import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'; // Import solid icons
import { faTwitter, faFacebookF, faInstagram, faDribbble, faPinterest } from '@fortawesome/free-brands-svg-icons'; // Import brand icons
import '../styles/styles.css'; // Import your CSS
import '../styles/mediaQuery.css'; // Import media query CSS
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ContactSection() {
    return (
        <section className="Contact mt-5 shadowbox" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2>Join Us!</h2>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-6">
                        <h3>Contact Info</h3>
                        <p className="text-center mt-4">
                            Why you should hire me writeup Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                            commodo ligula eget dolor. Aenean massa. Cum sociis natoque nascetur ridiculus mus.
                        </p>
                        <div className="contact-info my-5">
                            <p>
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2 mt-3" /> {/* Updated icon */}
                                New Street 22545, Nexa Road, New York City, USA
                            </p>
                            <p className="text-danger">
                                <FontAwesomeIcon icon={faEnvelope} className="me-2 mt-3 text-black" /> {/* Updated icon */}
                                hello@uigrid.com
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faPhone} className="me-2 mt-3" /> {/* Updated icon */}
                                001-000-000-000
                            </p>
                            <div className="socials mt-4">
                                <FontAwesomeIcon icon={faTwitter} className="fa-fw" /> {/* Updated icon */}
                                <FontAwesomeIcon icon={faFacebookF} className="fa-fw" /> {/* Updated icon */}
                                <FontAwesomeIcon icon={faInstagram} className="fa-fw" /> {/* Updated icon */}
                                <FontAwesomeIcon icon={faDribbble} className="fa-fw" /> {/* Updated icon */}
                                <FontAwesomeIcon icon={faPinterest} className="fa-fw" /> {/* Updated icon */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="userName" placeholder="Enter Name" />
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" id="userEmail" placeholder="Enter E-mail" />
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control" id="message" placeholder="Message"></textarea>
                            </div>
                            <p id="charCount"><span className="text-danger">100</span> Characters remaining</p>
                            <button type="button" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
