import React from "react";
import appointment from "../../assets/appointment.png";
import consultation from "../../assets/consultation.png";
import { useLanguage } from "../../LanguageContext.js";

function Consultationinfo() {
    const { t } = useLanguage();

    return (
        <div className="consultation-info-card">

            <h2 className="consultation-info-title">
                {t("consultation_title")}
            </h2>

            <div className="consultation-items">

                <div className="consultation-item">
                    <div className="consultation-icon">
                        <img src={appointment} alt="appointment" />
                    </div>
                    <div className="consultation-content">
                        <h3>
                            {t("consultation_appointment")}: {t("consultation_yes")}
                        </h3>
                    </div>
                </div>

                <div className="consultation-item">
                    <div className="consultation-icon">
                        <img src={consultation} alt="consultation" />
                    </div>
                    <div className="consultation-content">
                        <h3>
                            {t("consultation_fee")}: {t("consultation_amount")}
                        </h3>
                    </div>
                </div>

            </div>

            <p className="consultation-note">
                {t("consultation_note")}
            </p>

        </div>
    );
}

export default Consultationinfo;
