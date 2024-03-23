import Link from "next/link";
import "./Footer.css"
import { useTranslations } from "next-intl";

const TheFooter: React.FC = () => {
  const t = useTranslations("Footer")
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>{t("projectHistory")}</h4>
            <ul>
              <li>
                <Link href="">{t("aboutUs")}</Link>
              </li>
              <li>
                <Link href="">{t("ourTeam")}</Link>
              </li>
              <li>
                <Link href="">{t("projectHistory")}</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{t("cityHistory")}</h4>
            <ul>
              <li>
                <Link href="">{t("informationAboutOdessa")}</Link>
              </li>
              <li>
                <Link href="">{t("history")}</Link>
              </li>
              <li>
                <Link href="">{t("culture")}</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{t("helpfulInformation")}</h4>
            <ul>
              <li>
                <Link href="">{t("FAQ")}</Link>
              </li>
              <li>
                <Link href="">{t("usefulLinks")}</Link>
              </li>
              <li>
                <Link target="_blank" href={t("contactUsHref")}>{t("contactUs")}</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{t("ourLinks")}</h4>
            <div className="social-links">
              <a href="#"><i className="fab fa-telegram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-github"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { TheFooter };
