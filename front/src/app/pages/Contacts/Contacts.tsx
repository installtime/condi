import Banner from "@/parts/Banner/Banner";
import styles from "./Contacts.module.css";

const Contacts: React.FC<any> = () => {
  return (
    <main style={{ marginTop: "200px" }}>
      <h1 className="container title-medium blue">Контакты</h1>
      <section className={`container ${styles.contacsInfoContainer}`}>
        <ul className={styles.contactsList}>
          <li>ИП Харламова Марина Олеговна</li>
          <li>ИНН: 500102064751</li>
          <li>БИК: 044525411</li>
          <li>Банк: ФИЛИАЛ "ЦЕНТРАЛЬНЫЙ" БАНКА ВТБ (ПАО)</li>
          <li>Корреспондентский счёт: 30101810145250000411</li>
          <li>Расчётный счёт: 40802810202570000205</li>
        </ul>
        <ul className={styles.contactsList}>
          <li>
            Телефон:
            <span>
              <a href="tel:7999999999">+7 (999) 999-99-99</a>
            </span>
          </li>
          <li>
            Телефон: <span>+7 (999) 999-99-99</span>
          </li>
          <li>
            Email: <span>test@yandex.ru</span>
          </li>
        </ul>
      </section>
      <section className="container">
        <div
          style={{
            width: "100%",
            height: "400px",
            marginTop: "2rem",
            borderRadius: "1rem",
            overflow: "hidden",
          }}
        >
          <iframe
            style={{ border: "none" }}
            src="https://yandex.ru/map-widget/v1/-/CCU0-3A7tD"
            width="100%"
            height="100%"
            title="Яндекс Карты"
          />
        </div>
      </section>
    </main>
  );
};

export default Contacts;
