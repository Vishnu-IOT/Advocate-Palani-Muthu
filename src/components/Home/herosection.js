import React from 'react'
import trust from '../../assets/trusted.png';
import profile from '../../assets/profile.jpg';
import { useLanguage } from "../../LanguageContext.js";
import { NavLink } from 'react-router-dom';

function Herosection() {
    const { t } = useLanguage();
    return (
        <section className="hero" id="home">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <p className="hero-subtitle"><img className='hero-trusted' src={trust} alt='Trusted' />{t("trusted")}</p>
                        <h1 className="hero-title">
                            {t("advocate")} <div className="highlight">   {t("advocate_name")} <span className="hero-degree">
                                M.A.,M.L
                            </span>  </div>
                        </h1>

                        <p className="hero-council">
                            {t("reg")} 989/1997 | 25+ {t("exp")}
                        </p>
                        <p className="hero-description">
                            {/* Dedicated to providing strategic legal solutions with <br />integrity. Specializing in High Court and District Court<br />litigations with a proven track record of success. */}
                            {t("desc")}
                        </p>
                        <div className="hero-buttons">
                            <NavLink
                                to="/contact"
                                onClick={() =>
                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth"
                                    })
                                }
                            >
                                <button className="btn-primarys">{t("bookconsult")}</button>
                            </NavLink>
                            <div className='mobile-btn'>
                                <NavLink
                                    to="/contact"
                                    onClick={() =>
                                        window.scrollTo({
                                            top: 0,
                                            behavior: "smooth"
                                        })
                                    }
                                ><button className="btn-secondary">{t("advocatecontact")}</button></NavLink>
                                <a
                                    href="#services"
                                    onClick={() =>
                                        window.scrollTo({
                                            top: 0,
                                            behavior: "smooth"
                                        })
                                    }
                                ><button className="btn-secondary" >{t("practice_area")}</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="hero-image">
                        <div className="image-container">
                            <img src={profile} alt="Advocate R. Sharma" />
                            <div className="video-badge">
                                <span>"{t("all")}"</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Herosection
