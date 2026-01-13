import React, { useState } from "react";
import logo from "../assets/logo.png";
import call from "../assets/call.png";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaLongArrowAltUp } from "react-icons/fa";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <nav className="navbar">
            <div className="container">
                {/* Brand */}
                <div className="nav-brand">
                    <img className="logo-icon" src={logo} alt="Logo" />
                    <div className="main-brand-name">
                        <span className="brand-name">Advocate Palani Muthu</span>
                        <span className="sub-brand-name">
                            High Court & District Court
                        </span>
                    </div>
                </div>

                {/* Desktop Menu */}
                <ul className="nav-menu">
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>
                            Contact
                        </NavLink>
                    </li>
                    <li className="nav-list">
                        <NavLink to="/contact">
                            <button className="btn-primary">
                                <img className="call-icon" src={call} alt="Call" />
                                Consult Now
                            </button>
                        </NavLink>
                    </li>
                </ul>

                {/* Hamburger */}
                <div className="hamburger">
                    <span onClick={() => setMenuOpen(prev => !prev)}>
                        <GiHamburgerMenu />
                    </span>

                    {/* Mobile Menu */}
                    <div className={`ham-navbar ${menuOpen ? "open" : ""}`}>
                        <ul className="mobile-nav">
                            <li>
                                <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""} onClick={handleMenuClick}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""} onClick={handleMenuClick}>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""} onClick={handleMenuClick}>
                                    Contact
                                </NavLink>
                            </li>
                            <li className="nav-list">
                                <NavLink to="/contact" onClick={handleMenuClick}>
                                    <button className="btn-primary">
                                        <img className="call-icon" src={call} alt="Call" />
                                        Consult Now
                                    </button>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Scroll to Top */}
            <div className="scrollto" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <h2><FaLongArrowAltUp /></h2>
            </div>
        </nav>
    );
}

export default Navbar;
