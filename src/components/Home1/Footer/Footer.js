import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'
const Footer = () => {
    return (
        <div class="footer-dark">
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                                <li><a href="#">Comfortable Journey</a></li>
                                <li><a href="#">Luxurious Hotel</a></li>
                                <li><a href="#">Travel Guide</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-6 col-md-3 item">
                            <h3>About</h3>
                            <ul>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>
                        <div class="col-md-6 item text">
                            <h3>Take A Trip</h3>
                            <p>This is a web application where you can
                            select a place for your next tour. There are several tour
                            packages. You can select a place then the packages that are
                            available. Select the set meal for your trip and transportation
                            system. You have to select all that and we will book it for you.
                            The payment system will be in credit card.</p>
                        </div>
                        <div class="col item social">
                            <a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a>
                            <a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a>
                            <a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a>
                        </div>
                    </div>
                    <p class="copyright">Take A Trip © {(new Date()).getFullYear()}</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;