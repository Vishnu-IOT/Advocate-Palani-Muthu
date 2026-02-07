import React from "react";
import logo from "../assets/footerlogo.png";
import { AiOutlineLinkedin } from "react-icons/ai";
import { SlSocialTwitter } from "react-icons/sl";
import { IoLogoYoutube } from "react-icons/io5";
import address from "../assets/address.png";
import phone from "../assets/phone.png";
import email from "../assets/email.png";
import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext.js";

function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footer-grid">

                    {/* BRAND */}
                    <div className="footer-col">
                        <div className="footer-brand">
                            <img className="footer-icon" src={logo} alt="Logo" />
                            <div className="main-brand-name">
                                <span className="brand-name">
                                    {t("footer_brand_name")}
                                </span>
                                <span className="sub-brand-name">
                                    {t("footer_brand_sub")}
                                </span>
                            </div>
                        </div>

                        <p className="footer-description">
                            {t("footer_desc")}
                        </p>

                        <div className="social-links">
                            <a href="/" className="social-icon" style={{ color: "#0077B5" }}>
                                <AiOutlineLinkedin />
                            </a>
                            <a href="/" className="social-icon" style={{ color: "#1DA1F2" }}>
                                <SlSocialTwitter />
                            </a>
                            <a href="/" className="social-icon" style={{ color: "#FF0000" }}>
                                <IoLogoYoutube />
                            </a>
                        </div>
                    </div>

                    {/* QUICK LINKS */}
                    <div className="footer-col">
                        <h4>{t("footer_quick_links")}</h4>
                        <ul>
                            <li>
                                <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                                    → {t("footer_home")}
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                                    → {t("footer_about")}
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                                    → {t("footer_contact")}
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                                    → {t("footer_services")}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div className="footer-col">
                        <h4>{t("footer_contact_title")}</h4>
                        <ul className="contact-info">
                            <li>
                                <img className="footer-contact" src={address} alt="Address" />
                                <p>{t("footer_address")}</p>
                            </li>
                            <li>
                                <img className="footer-contact" src={phone} alt="Phone" />
                                <p>{t("footer_phone")}</p>
                            </li>
                            <li>
                                <img className="footer-contact" src={email} alt="Email" />
                                <p>{t("footer_email")}</p>
                            </li>
                        </ul>
                    </div>

                    {/* LEGAL INFO */}
                    <div className="footer-col" id="footer-hide">
                        <h4>{t("footer_legal_info")}</h4>
                        <ul>
                            <li>{t("footer_bar_reg")}</li>
                            <li>{t("footer_experience")}</li>
                        </ul>
                    </div>

                </div>

                {/* FOOTER BOTTOM */}
                <div className="footer-bottom">
                    <p>© 2026 Advocate R. Palani Muthu. All rights reserved.</p>
                    <div className="footer-links">
                        <a href="/contact">{t("footer_privacy")}</a>
                        <a href="/">{t("footer_terms")}</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
