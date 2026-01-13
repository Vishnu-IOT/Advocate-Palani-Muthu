import React from 'react'
import logo from '../assets/footerlogo.png';
import { AiOutlineLinkedin } from "react-icons/ai";
import { SlSocialTwitter } from "react-icons/sl";
import { IoLogoYoutube } from "react-icons/io5";
import address from '../assets/address.png'
import phone from '../assets/phone.png'
import email from '../assets/email.png'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <div className="footer-brand">
                            <img className="footer-icon" src={logo} alt='Logo' />
                            <div className='main-brand-name'>
                                <span className="brand-name">Advocate Palani Muthu</span>
                                <span className="sub-brand-name">Legal Services</span>
                            </div>
                        </div>
                        <p className="footer-description">
                            Providing expert legal representation with<br />integrity and dedication. Specializing in Civil,<br />Criminal, and Corporate Law.
                        </p>
                        <div className="social-links">
                            <a href="/" className="social-icon" style={{ color: "#0077B5" }}><AiOutlineLinkedin /></a>
                            <a href="/" className="social-icon" style={{ color: "#1DA1F2" }}><SlSocialTwitter /></a>
                            <a href="/" className="social-icon" style={{ color: "#FF0000" }}><IoLogoYoutube /></a>
                            {/* <a href="#" className="social-icon" style={{color:"#0077B5"}}>📧</a> */}
                        </div>
                    </div>
                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>→  Home</Link></li>
                            <li><Link to="/about" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>→  About Profile</Link></li>
                            <li><Link to="/contact" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>→  Contact</Link></li>
                            <li><a href="#services" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>→  Services</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Contact Office</h4>
                        <ul className="contact-info">
                            <li><img className="footer-contact" src={address} alt='Address' /><p>S.S.Complex, OPP. Indian Bank, Co-Optex Lane, Jayankondam, Udaiyarpalayam, Ariyalur Dt - 621 802.</p></li>
                            <li><img className="footer-contact" src={phone} alt='Phone' /><p>+91 94430 94377</p></li>
                            <li><img className="footer-contact" src={email} alt='Email' /><p>rpalani71@gmail.com</p></li>
                            {/* <li>🕐 Mon-Fri: 9AM - 6PM</li> */}
                        </ul>
                    </div>
                    <div className="footer-col" id='footer-hide'>
                        <h4>Legal Info</h4>
                        <ul>
                            <li><a href="/about">Bar Council Reg: 989/1997</a></li>
                            <li><a href="/">Experience: 25+ Years</a></li>
                            {/* <li><a href="/">Family Law</a></li> */}
                            {/* <li><a href="/">Property Law</a></li> */}
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2026 Advocate R. Palani Muthu. All rights reserved.</p>
                    <div className="footer-links">
                        <a href="/contact">Privacy Policy</a>
                        <a href="/">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

// R.PALANIMUTHU

// S / O V.RAJARATHINAM

// Dt.cell No: 94430 94377

// 9.Office Address for communication

// : R.PALANIMUTHU

// Advocate  cell No: 94430 94377 7397044377

// Email rpalani71 @gmail.com