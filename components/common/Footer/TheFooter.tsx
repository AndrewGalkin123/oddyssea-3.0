import Link from "next/link";
import "./Footer.css"


const TheFooter: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>История проекта</h4>
            <ul>
              <li>
                <Link href=""> О нас</Link>
              </li>
              <li>
                <Link href=""> Наша Команда</Link>
              </li>
              <li>
                <Link href=""> История Проекта</Link>
              </li>
              <li>
                <Link href=""> Контакты</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>История Города</h4>
            <ul>
              <li>
                <Link href=""> О нас</Link>
              </li>
              <li>
                <Link href=""> Наша Команда</Link>
              </li>
              <li>
                <Link href=""> История Проекта</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Полезная информация</h4>
            <ul>
              <li>
                <Link href=""> Наша Команда</Link>
              </li>
              <li>
                <Link href=""> История Проекта</Link>
              </li>
              <li>
                <Link href=""> История Проекта</Link>
              </li>
              <li>
                <Link href=""> FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Наши ссылки</h4>
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
