import React from "react";
import addressIcon from "../../assets/address-about.png";
import timingsIcon from "../../assets/timings.png";
import { useLanguage } from "../../LanguageContext.js";

function Officeinfo() {
    const { t } = useLanguage();

    const officeData = [
        {
            icon: addressIcon,
            title: t("office_address_title"),
            details: [t("footer_address")],
            link: t("office_view_map")
        },
        {
            icon: timingsIcon,
            title: t("office_timings_title"),
            details: [
                t("office_timings.mon_fri"),
                t("office_timings.saturday"),
                t("office_timings.sunday")
            ]
        },
        {
            icon: addressIcon,
            title: t("office_proximity_title"),
            details: [
                t("office_proximity.high_court"),
                t("office_proximity.city_civil"),
                t("office_proximity.family_court"),
                t("office_proximity.egmore")
            ]
        }
    ];

    return (
        <section className="office-info-section">
            <div className="about-container">

                <h2 className="about-section-title">
                    {t("office_info_title")}
                </h2>

                <div className="office-grid">
                    {officeData.map((office, index) => (
                        <div className="office-card" key={index}>

                            <div className="office-icon">
                                <img src={office.icon} alt={office.title} />
                            </div>

                            <h3 className="office-title">
                                {office.title}
                            </h3>

                            <div className="office-details">
                                {office.details.map((detail, idx) => (
                                    <p key={idx}>{detail}</p>
                                ))}
                            </div>

                            {office.link && (
                                <a href="/" className="office-link">
                                    {office.link}
                                </a>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Officeinfo;

