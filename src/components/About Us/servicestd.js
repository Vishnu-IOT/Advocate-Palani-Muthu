import React from 'react'
import profile1 from '../../assets/ad1.jpeg'
import profile2 from '../../assets/ad2.jpeg'
import profile3 from '../../assets/ad3.jpeg'
import profile4 from '../../assets/ad4.jpeg'
import { useLanguage } from "../../LanguageContext.js";

function Servicestd() {
    const { t } = useLanguage();
    const standards = [
        {
            icon: profile1,
            title: "profile1"
        },
        {
            icon: profile3,
            title: "profile3"
        },
        {
            icon: profile2,
            title: "profile2"
        },
        {
            icon: profile4,
            title: "profile4"
        }
    ];
    return (
        <section className="service-standards-section">
            <div className="about-container">
                <h2 className="about-section-title">{t("potraits")}</h2>
                <div className="standards-grid">
                    {standards.map((standard, index) => (
                        <div className="standard-card" key={index}>
                            <div className="standard-icon">
                                <img src={standard.icon} alt={standard.title} />
                            </div>
                            {/* <div className="standard-content">
                                <h3>{standard.title}</h3>
                                <p>{standard.description}</p>
                            </div> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Servicestd
