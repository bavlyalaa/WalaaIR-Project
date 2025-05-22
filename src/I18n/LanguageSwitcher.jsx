import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  // the fuction to handle  the chage in  language
  const changeLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    const newPath = window.location.pathname.replace(
      `/${i18n.language}/`,
      `/${newLang}/`
    );

    i18n.changeLanguage(newLang).then(() => {
      navigate(newPath, {
        replace: true,
        state: { 
          ...location.state,  // Preserve existing location state to avoid losing it
          languageChanged: true  // Flag to indicate language change
        }
      });
      document.documentElement.lang = newLang;
      document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    }).catch(err => {
      console.error("Language change failed:", err);
    });
  };

  return (
    <button
      className="btn py-1 px-2 fw-bold btn-outline-dark"
      onClick={changeLanguage}
      aria-label={i18n.language === "en" ? "Switch to Arabic" : "Switch to English"}
    >
      {i18n.language === "en" ? "عربي" : "English"}
    </button>
  );
};

export default LanguageSwitcher;