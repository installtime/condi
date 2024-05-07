import Logo from "@/app/Images/Logo";
import styles from "./Banner.module.css";
import Image from "next/image";
const Banner = () => {
  return (
    <section className={`container mt`}>
      <div className={styles.bannerCard}>
        <div className={styles.bannerImageContainer}>
          <Image
            className={styles.bannerImage}
            alt={``}
            width={1000}
            height={1000}
            src={`/banner.png`}
          />
        </div>
        <div className={styles.bannerInfo}>
          <Logo />

          <div className={styles.bannerTextContainer}>
            <span>СИСТЕМЫ КОНДИЦИОНИРОВАНИЯ</span>
            <h2 className={`title-medium ${styles.bannerTitle}`}>
              ПЕРЕДОВЫЕ ТЕХНОЛОГИИ
            </h2>
            <p>
              Haier постоянно совершенствует свою продукцию, инвестируя в том
              числе в исследование новых хладагентов и возможностей их
              применения для того, чтобы повысить энергоэффективность
            </p>
            <button className={styles.bannerButton}>Консультация</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
