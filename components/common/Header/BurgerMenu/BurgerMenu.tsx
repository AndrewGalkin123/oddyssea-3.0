import "./BurgerMenu.css";
import { useTranslations } from "next-intl";

type MenuItem = {
  key: string;
  href: string;
};

const BurgerMenu: React.FC = () => {
  const t = useTranslations("BurgerMenu");

  const menuItems: MenuItem[] = [
    { key: "aboutUs", href: "/about" },
    { key: "projectHistory", href: "/about-us" },
    { key: "informationAboutOdessa", href: "/about-odessa" },
    { key: "ourTeam", href: "/about" },
    { key: "usefulLinks", href: "/useful-links" },
    { key: "feedback", href: "/contacts" },
    { key: "frequentlyAskedQuestions", href: "/faq" },
  ];

  return (
    <div className="burger-menu">
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-btn" htmlFor="menu-toggle">
        <span></span>
      </label>

      <ul className="menubox">
        {menuItems.map(({ key, href }) => (
          <li key={key}>
            <a className="menu-item" href={href}>
              {t(key)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { BurgerMenu };
