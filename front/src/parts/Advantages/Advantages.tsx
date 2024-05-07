import Link from "next/link";
import styles from "./Advantages.module.css";
import Image from "next/image";
const Advantages = () => {
  return (
    <section className={`container mt`}>
      <div className={styles.advantagesList}>
        <div className={styles.advantagesListBanner}>
          <div className={styles.bannerDescSection}>
            <h2>Поможем выбрать систему вентиляции</h2>
            <p>
              Чем больше площадь помещения, тем более мощный нужен кондиционер
            </p>
            <Link href={`/`}>узнать подробнее</Link>
          </div>
          <div className={styles.bannerGradient}></div>
          <div className={styles.bannerImageContainer}>
            <Image
              className={styles.bannerImage}
              src={`http://localhost:1337/uploads/Rectangle_13_dd8686b5f8.png`}
              height={1500}
              width={1500}
              alt="dsdsd"
            />
          </div>
        </div>
        <div className={styles.advantagesCard}>
          <Image
            src={`http://localhost:1337/uploads/wallet_money_svgrepo_com_1_005c4d76e9.svg`}
            width={80}
            height={80}
            alt=""
          />
          <span className={styles.advantagesCardTitle}>Выгода при покупке</span>
          <span className={styles.advantagesCardDescription}>
            Совершите первый заказ и получите скидку
          </span>
        </div>
        <div className={styles.advantagesCard}>
          <Image
            src={`http://localhost:1337/uploads/wallet_money_svgrepo_com_1_005c4d76e9.svg`}
            width={80}
            height={80}
            alt=""
          />
          <span className={styles.advantagesCardTitle}>Выгода при покупке</span>
          <span className={styles.advantagesCardDescription}>
            Совершите первый заказ и получите скидку
          </span>
        </div>
        <div className={styles.advantagesCard}>
          <Image
            src={`http://localhost:1337/uploads/wallet_money_svgrepo_com_1_005c4d76e9.svg`}
            width={80}
            height={80}
            alt=""
          />
          <span className={styles.advantagesCardTitle}>Выгода при покупке</span>
          <span className={styles.advantagesCardDescription}>
            Совершите первый заказ и получите скидку
          </span>
        </div>
        <div className={styles.advantagesCard}>
          <Image
            src={`http://localhost:1337/uploads/wallet_money_svgrepo_com_1_005c4d76e9.svg`}
            width={80}
            height={80}
            alt=""
          />
          <span className={styles.advantagesCardTitle}>Выгода при покупке</span>
          <span className={styles.advantagesCardDescription}>
            Совершите первый заказ и получите скидку
          </span>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
