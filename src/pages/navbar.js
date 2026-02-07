import React, { useState } from "react";
import logo from "../assets/logo.png";
import call from "../assets/call.png";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaLongArrowAltUp } from "react-icons/fa";
import { useLanguage } from "../LanguageContext.js";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { t, toggleLanguage, lang } = useLanguage();

    const handleMenuClick = () => {
        setMenuOpen(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <nav className="navbar">
            <div className="container">
                {/* Brand */}
                <NavLink to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    <div className="nav-brand">
                        <img className="logo-icon" src={logo} alt="Logo" />
                        <div className="main-brand-name">
                            <span className="brand-name">{t("advocate")} {t("advocate_name")}</span>
                            <span className="sub-brand-name">
                                {t("court")}
                            </span>
                        </div>
                    </div>
                </NavLink>

                {/* Desktop Menu */}
                <ul className="nav-menu">
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>
                            {t("home")}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>
                            {t("about")}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>
                            {t("contact")}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/services" className={({ isActive }) => isActive ? "active-link" : ""}>
                            {t("services")}
                        </NavLink>
                    </li>
                    <li className="nav-list">
                        <NavLink to="/contact">
                            <button className="btn-primary">
                                <img className="call-icon" src={call} alt="Call" />
                                {t("consult_now")}
                            </button>
                        </NavLink>
                    </li>
                    <li>
                        <button onClick={toggleLanguage}>
                            {lang === "en" ? "தமிழ்" : "English"}
                        </button>
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
                                    {t("home")}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""} onClick={handleMenuClick}>
                                    {t("about")}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""} onClick={handleMenuClick}>
                                    {t("contact")}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/services" className={({ isActive }) => isActive ? "active-link" : ""} onClick={handleMenuClick}>
                                    {t("services")}
                                </NavLink>
                            </li>
                            <li className="nav-list">
                                <NavLink to="/contact" onClick={handleMenuClick}>
                                    <button className="btn-primary">
                                        <img className="call-icon" src={call} alt="Call" />
                                        {t("consult_now")}
                                    </button>
                                </NavLink>
                            </li>
                            <li>
                                <button onClick={toggleLanguage}>
                                    {lang === "en" ? "தமிழ்" : "English"}
                                </button>
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
