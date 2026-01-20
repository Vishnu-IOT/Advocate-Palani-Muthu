import React from "react";
import civil from "../../assets/civil.png";
import criminal from "../../assets/criminal.png";
import corporate from "../../assets/corporate.png";
import family from "../../assets/family.png";
import property from "../../assets/property.png";
import labour from "../../assets/labour.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useLanguage } from "../../LanguageContext.js";

function Practiceareas() {
    const { t } = useLanguage();

    const areas = [
        {
            icon: civil,
            title: t("practice_areas.civil.title"),
            cases: t("practice_areas.civil.cases")
        },
        {
            icon: criminal,
            title: t("practice_areas.criminal.title"),
            cases: t("practice_areas.criminal.cases")
        },
        {
            icon: family,
            title: t("practice_areas.family.title"),
            cases: t("practice_areas.family.cases")
        },
        {
            icon: property,
            title: t("practice_areas.motor.title"),
            cases: t("practice_areas.motor.cases")
        },
        {
            icon: labour,
            title: t("practice_areas.labour.title"),
            cases: t("practice_areas.labour.cases")
        },
        {
            icon: corporate,
            title: t("practice_areas.corporate.title"),
            cases: t("practice_areas.corporate.cases")
        }
    ];

    return (
        <section className="practice-areas" id="services">
            <div className="container">
                <h2 className="section-title">
                    {t("practice_title")}
                </h2>

                <div className="section-border">
                    <p></p>
                </div>

                <p className="section-subtitles">
                    {t("practice_subtitle")}
                </p>

                <div className="areas-grid">
                    {areas.map((area, index) => (
                        <div className="area-card" key={index}>
                            <img
                                className="area-img"
                                src={area.icon}
                                alt={area.title}
                            />

                            <h3>{area.title}</h3>

                            <p className="area-cases">
                                {area.cases}
                            </p>

                            <Link
                                to="/contact"
                                onClick={() =>
                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth"
                                    })
                                }
                            >
                                <div className="area-rating">
                                    <p>{t("consult_now")}</p>
                                    <span className="area-arrow">
                                        <FaArrowRightLong />
                                    </span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Practiceareas;
