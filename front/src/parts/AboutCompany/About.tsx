"use client";
import styles from "./About.module.css";
import Image from "next/image";
import Logo from "@/app/Images/Logo";
const About = () => {
  return (
    <section className={`container mt`}>
      <div className={styles.sectionContainer}>
        <div className={styles.bigCard}>
          <div className={styles.cardImageContainer}>
            <Image
              width={692}
              height={388}
              src={"http://localhost:1337/uploads/Rectangle_5_0064f1fab3.png"}
              alt=""
              className={styles.cardImage}
            />
          </div>
          <h2 className={`title-medium ${styles.sectionTitle}`}>О компании</h2>
          <p className={`${styles.aboutText}`}>
            Каждый хочет чувствовать себя уникальным. Именно поэтому Haier
            внимательно прислушивается к запросам клиентов, чтобы лучше понять,
            что происходит в их жизни и о чем они думают. Каждый может получить
            тот домашний комфорт, который нужен именно ему, — будь то простота,
            изысканность, строгая организованность или радость жизни.
          </p>
        </div>
        <div className={styles.smallCard}>
          <div className={styles.cardImageContainer}>
            <Image
              width={480}
              height={280}
              src={"http://localhost:1337/uploads/Rectangle_6_1cf9128d32.png"}
              alt=""
              className={styles.cardImage}
            />
          </div>
        </div>
        <div className={styles.smallCard}>
          <div className={styles.cardImageContainer}>
            <Image
              width={480}
              height={180}
              src={"http://localhost:1337/uploads/Rectangle_7_f958eac99b.png"}
              alt=""
              className={styles.cardImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
