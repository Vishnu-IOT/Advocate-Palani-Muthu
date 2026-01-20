import React from 'react'
import { useLanguage } from "../../LanguageContext.js";

function ContactHerosection() {
    const { t } = useLanguage();
    return (
        <section className="contact-hero">
            <div className="contact-container">
                <h1 className="contact-hero-title">{t("contact-us")}</h1>
                <p className="contact-hero-subtitle">
                   {t("contactsub")}
                </p>
            </div>
        </section>
    )
}

export default ContactHerosection
