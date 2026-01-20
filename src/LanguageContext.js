import { createContext, useContext, useState, useEffect } from "react";
import languageData from "../src/json/language.json";

const LanguageContext = createContext(null);

// 🔹 helper: get saved language or default
const getInitialLanguage = () => {
    const savedLang = localStorage.getItem("lang");
    return savedLang === "ta" || savedLang === "en" ? savedLang : "en";
};

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState(getInitialLanguage);

    // 🔹 save language whenever it changes
    useEffect(() => {
        localStorage.setItem("lang", lang);
    }, [lang]);

    const toggleLanguage = () => {
        setLang(prev => (prev === "en" ? "ta" : "en"));
    };

    // ✅ supports nested keys (dot notation)
    const t = (key) => {
        return (
            key
                .split(".")
                .reduce(
                    (obj, k) => (obj && obj[k] !== undefined ? obj[k] : null),
                    languageData[lang]
                ) || key
        );
    };

    return (
        <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used inside LanguageProvider");
    }
    return context;
};
