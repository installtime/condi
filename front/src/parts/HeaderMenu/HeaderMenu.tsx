"use client";
import styles from "./headermenu.module.css";
import Image from "next/image";
import Logo from "@/app/Images/Logo";
import { useEffect, useState } from "react";
import { useScroll, motion, useMotionValueEvent, easeIn } from "framer-motion";
import Link from "next/link";
import Popup from "@/app/components/Popup/Popup";

const HeaderMenu = () => {
  const [visible, setVisible] = useState(true);

  const [position, setPosition] = useState(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setPosition(latest);
    if (latest === 0 || latest < position) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: {
      opacity: 0,
      y: "-100%",
    },
  };
  return (
    <motion.nav
      style={
        visible
          ? {
              display: "block",
            }
          : { display: "none" }
      }
      className={`${styles.headerContainer}`}
      animate={visible ? "open" : "closed"}
      variants={variants}
    >
      <div className={`container ${styles.headerMenuContainer}`}>
        <Link href={`/`} className={styles.HeaderMenuLogo}>
          <Logo />
        </Link>
        <ul className={styles.HeaderMenuLinksContaiener}>
          <li className={styles.HeaderMenuLinkItem}>О НАС</li>
          <li className={styles.HeaderMenuLinkItem}>Каталог</li>
          <li className={styles.HeaderMenuLinkItem}>Бизнесу</li>
          <li className={styles.HeaderMenuLinkItem}>Новости</li>
          <li className={styles.HeaderMenuLinkItem}>Контакты</li>
        </ul>
        <div className={styles.headerContacts}>
          <Popup
            isOpen={false}
            elem={
              <button className={`button-white ${styles.headerContactsBtn}`}>
                Оставить заявку
              </button>
            }
          >
            <div className={styles.testNest}>
              <h3>Оставьте заявку</h3>
              <div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Cupiditate rem optio illo nisi temporibus ipsam quas,
                  blanditiis exercitationem officiis nobis vero quos, at saepe
                  vitae. Soluta blanditiis illo molestiae exercitationem.
                </p>
              </div>
            </div>
          </Popup>
        </div>
      </div>
    </motion.nav>
  );
};

export default HeaderMenu;
