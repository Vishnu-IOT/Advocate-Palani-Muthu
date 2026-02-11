import React from 'react'
import trust from '../../assets/trusted.png';
import profile1 from '../../assets/ad1.jpeg';
import profile2 from '../../assets/ad2.jpeg';
import profile3 from '../../assets/ad3.jpeg';
import profile4 from '../../assets/ad4.jpeg';
import { useLanguage } from "../../LanguageContext.js";
import { NavLink } from 'react-router-dom';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";

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
                            <Swiper
                                modules={[Autoplay]}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                slidesPerView={1}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img src={profile1} alt="Advocate R. Palani Muthu" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={profile2} alt="Advocate R. Palani Muthu" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={profile3} alt="Advocate R. Palani Muthu" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={profile4} alt="Advocate R. Palani Muthu" />
                                </SwiperSlide>
                            </Swiper>
                            {/* <img src={profile1} alt="Advocate R. Palani Muthu" /> */}
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
