import './BurgerMenu.css'
import { useTranslations } from "next-intl";

const BurgerMenu:React.FC = () => {
    const t = useTranslations("BurgerMenu");
    return (
        <div className="burger-menu">
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-btn" htmlFor="menu-toggle">
            <span></span>
        </label>

        <ul className="menubox">
            <li><a className="menu-item" href="/about">{t("aboutUs")}</a></li>
            <li><a className="menu-item" href="/about-us">{t("projectHistory")}</a></li>
            <li><a className="menu-item" href="/about-odessa">{t("informationAboutOdessa")}</a></li>
            <li><a className="menu-item" href="/about">{t("ourTeam")}</a></li>
            <li><a className="menu-item" href="/useful-links">{t("usefulLinks")}</a></li>
            <li><a className="menu-item" href="/contacts">{t("feedback")}</a></li>
            <li><a className="menu-item" href="/faq">{t("frequentlyAskedQuestions")}</a></li>
            
      
            
        </ul>
    </div>
    )
}

export {BurgerMenu}