import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { useLanguage } from "../../LanguageContext.js";

function Bookappoinment() {
    const { t } = useLanguage();

    const [formData, setFormData] = useState({
        fullName: "",
        mobileNumber: "",
        caseType: "",
        preferredTime: "",
        caseDescription: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert(t("form_success_message"));
    };

    return (
        <div className="appointment-form-card">

            <h2 className="appointment-form-title">
                {t("appointment_title")}
            </h2>

            <p className="appointment-form-subtitle">
                {t("appointment_subtitle")}
            </p>

            <form className="appointment-form" onSubmit={handleSubmit}>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="fullName">
                            {t("form_full_name")}
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            placeholder={t("form_full_name_placeholder")}
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="mobileNumber">
                            {t("form_mobile")}
                        </label>
                        <input
                            type="tel"
                            id="mobileNumber"
                            name="mobileNumber"
                            placeholder={t("form_mobile_placeholder")}
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="caseType">
                            {t("form_case_type")}
                        </label>
                        <select
                            id="caseType"
                            name="caseType"
                            value={formData.caseType}
                            onChange={handleChange}
                            required
                        >
                            <option value="">
                                {t("form_case_select")}
                            </option>
                            <option value="criminal">{t("form_case_criminal")}</option>
                            <option value="civil">{t("form_case_civil")}</option>
                            <option value="family">{t("form_case_family")}</option>
                            <option value="property">{t("form_case_property")}</option>
                            <option value="corporate">{t("form_case_corporate")}</option>
                            <option value="other">{t("form_case_other")}</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="preferredTime">
                            {t("form_preferred_time")}
                        </label>
                        <input
                            type="text"
                            id="preferredTime"
                            name="preferredTime"
                            placeholder={t("form_preferred_time_placeholder")}
                            value={formData.preferredTime}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="caseDescription">
                        {t("form_case_description")}
                    </label>
                    <textarea
                        id="caseDescription"
                        name="caseDescription"
                        placeholder={t("form_case_description_placeholder")}
                        rows="5"
                        value={formData.caseDescription}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="submit-btn">
                    {t("form_submit")} &nbsp;&nbsp;
                    <FaLocationArrow />
                </button>

                <p className="form-disclaimer">
                    {t("form_disclaimer")}
                </p>

            </form>
        </div>
    );
}

export default Bookappoinment;
