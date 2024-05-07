"use client";
import styles from "./headermenu.module.css";
import Image from "next/image";
import Logo from "@/app/Images/Logo";
const HeaderMenu = () => {
  return (
    <nav className={`${styles.headerContainer}`}>
      <div className={`container ${styles.headerMenuContainer}`}>
        <div className={styles.HeaderMenuLogo}>
          <Logo />
        </div>
        <ul className={styles.HeaderMenuLinksContaiener}>
          <li className={styles.HeaderMenuLinkItem}>О НАС</li>
          <li className={styles.HeaderMenuLinkItem}>Каталог</li>
          <li className={styles.HeaderMenuLinkItem}>Бизнесу</li>
          <li className={styles.HeaderMenuLinkItem}>Новости</li>
          <li className={styles.HeaderMenuLinkItem}>Контакты</li>
        </ul>
        <div className={styles.headerContacts}>
          <button className={`button-white ${styles.headerContactsBtn}`}>
            Оставить заявку
          </button>
        </div>
      </div>
    </nav>
  );
};

export default HeaderMenu;
