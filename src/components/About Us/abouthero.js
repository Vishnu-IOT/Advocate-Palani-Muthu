import React from 'react'
import { useLanguage } from "../../LanguageContext.js";

function Abouthero() {
    const { t } = useLanguage();
    return (
        <section className="about-hero">
            <div className="about-container">
                <h1 className="about-hero-title">{t("abouthero")}</h1>
                <p className="about-hero-subtitle">
                    {t("aboutsubtitle")}
                </p>
            </div>
        </section>
    )
}

export default Abouthero
