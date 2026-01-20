import React from "react";
import scholar from "../../assets/scholar.png";
import { useLanguage } from "../../LanguageContext.js";

function Acheivementsection() {
    const { t } = useLanguage();

    const stats = [
        { number: "25+", key: "years" },
        { number: "1500+", key: "cases" },
        { number: "98%", key: "success" },
        { number: "Top", key: "rated" }
    ];

    const awards = [
        { img: scholar, key: "award1" },
        { img: scholar, key: "award2" }
    ];

    return (
        <section className="achievements-section">
            <div className="container">

                <h2 className="section-title">
                    {t("achievement_title")}
                </h2>

                <div className="section-border">
                    <p></p>
                </div>

                {/* STATS */}
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div className="stat-card" key={index}>
                            <h3 className="stat-number-large">
                                {stat.number}
                            </h3>
                            <p className="stat-label-large">
                                {t(`achievement_stats.${stat.key}`)}
                            </p>
                        </div>
                    ))}
                </div>

                {/* AWARDS */}
                <div className="awards-grid">
                    {awards.map((award, index) => (
                        <div className="award-card" key={index}>
                            <div className="award-year">
                                <img src={award.img} alt="Achievement" />
                            </div>
                            <div>
                                <h4>
                                    {t(`achievement_awards.${award.key}.title`)}
                                </h4>
                                <p>
                                    {t(`achievement_awards.${award.key}.description`)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Acheivementsection;
