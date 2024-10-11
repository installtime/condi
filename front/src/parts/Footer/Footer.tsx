import Logo from "@/app/Images/Logo";
import styles from "./Footer.module.css";
import FooterLogo from "@/app/Images/Footer";
import Popup from "@/app/components/Popup/Popup";

const Footer = () => {
  return (
    <footer className={`${styles.footerBack}`}>
      <div className={`container ${styles.footerSe}`}>
        <div style={{ display: "flex", flexDirection: "column", flexGrow: 2 }}>
          <div className={`${styles.footerBlocks}`}>
            <div>
              <span className={styles.footerTitle}>Контакты</span>
              <ul className={styles.footerMenuItemList}>
                <li>test@yandex.ru</li>
                <li>+7 (999) 999-99-99</li>
                <li>+7 (999) 999-99-99</li>
                <li>г. Москва, ул. Тетсовая, д.45, к.1</li>
                <li>г. Москва, ул. Тетсовая, д.45, к.1</li>
              </ul>
            </div>
            <div>
              <span className={styles.footerTitle}>Информация</span>
              <ul className={styles.footerMenuItemList}>
                <li className={styles.foterItemUnderline}>Гарантия</li>
                <li className={styles.foterItemUnderline}>Каталог</li>
                <li className={styles.foterItemUnderline}>Вопрос-ответ</li>
                <li className={styles.foterItemUnderline}>Юридическим лицам</li>
                <li className={styles.foterItemUnderline}>Партнеры</li>
                <li className={styles.foterItemUnderline}>Сотрудничество</li>
                <li className={styles.foterItemUnderline}>Вакансии</li>
              </ul>
            </div>
          </div>

          <div>
            <div>
              <Logo />
            </div>
            <ul>
              <li>Политика обработки персональных данных</li>
              <li>Социальные сети</li>
              <li>Карта сайта</li>
            </ul>
          </div>
        </div>
        <div className={styles.footerForm}>
          <span className={styles.formTitle}>
            Интересуетесь конкретным товаром?
          </span>
          <Popup
            elem={
              <button className={styles.formButton}>Давайте свяжемся</button>
            }
          >
            <div></div>
          </Popup>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
