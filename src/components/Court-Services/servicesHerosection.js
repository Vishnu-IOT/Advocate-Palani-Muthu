import React from 'react'
import { useLanguage } from "../../LanguageContext.js";

function ServicesHerosection() {
    const { t } = useLanguage();
    return (
        <section className="services-hero">
            <div className="services-container">
                <h1 className="services-hero-title">{t("services-us")}</h1>
                <p className="services-hero-subtitle">
                    {t("servicessub")}
                </p>
            </div>
        </section>
    )
}

export default ServicesHerosection
