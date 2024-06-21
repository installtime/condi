import Logo from "@/app/Images/Logo";
import styles from "./Footer.module.css";
import FooterLogo from "@/app/Images/Footer";

const Footer = () => {
  return (
    <footer className={`${styles.footerBack} mt`}>
      <div className={`container`}>
        <div>
          <div>
            <FooterLogo />
          </div>
        </div>
        <div>
          <ul>
            <li>Оплата и доставка</li>
            <li>Гарантия</li>
            <li>Каталог</li>
            <li>Вопрос-ответ</li>
            <li>Юридическим лицам</li>
            <li>Партнеры</li>
            <li>Сотрудничество</li>
            <li>Вакансии</li>
          </ul>
        </div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
