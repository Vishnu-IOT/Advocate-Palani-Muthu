import React from "react";
import court from "../../assets/court.png";
import client from "../../assets/client.png";
import casehighlights from "../../assets/case.png";
import { useLanguage } from "../../LanguageContext.js";

function Experiencesection() {
    const { t } = useLanguage();

    const experiences = [
        { img: court, key: "court" },
        { img: client, key: "clients" },
        { img: casehighlights, key: "case_highlights" }
    ];

    const processes = [
        { step: "1", key: "step1" },
        { step: "2", key: "step2" },
        { step: "3", key: "step3" },
        { step: "4", key: "step4" }
    ];

    return (
        <section className="experience-section">
            <div className="container">
                <div className="experience-grid">

                    {/* LEFT SIDE */}
                    <div className="experience-left">
                        <h2 className="experience-title">
                            {t("experience_title")}
                        </h2>

                        <p className="experience-subtitle">
                            {t("experience_subtitle")}
                        </p>

                        <div className="timeline">
                            {experiences.map((exp, index) => (
                                <div className="timeline-item" key={index}>
                                    <img
                                        className="timeline-img"
                                        src={exp.img}
                                        alt={t(`experience_items.${exp.key}.title`)}
                                    />
                                    <div className="timeline-content">
                                        <h4>
                                            {t(`experience_items.${exp.key}.title`)}
                                        </h4>
                                        <p className="description">
                                            {t(`experience_items.${exp.key}.description`)}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="experience-right">
                        <h3>{t("process_title")}</h3>

                        <div className="process-steps">
                            {processes.map((process, index) => (
                                <div className="process-card" key={index}>
                                    <div className="process-step">
                                        {process.step}
                                    </div>
                                    <div className="process-content">
                                        <h4>
                                            {t(`process_steps.${process.key}.title`)}
                                        </h4>
                                        <p>
                                            {t(`process_steps.${process.key}.description`)}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Experiencesection;
