"use client";
import styles from "./headermenu.module.css";
import Image from "next/image";
import Logo from "@/app/Images/Logo";
import { useEffect, useState, useRef } from "react";
import { useScroll, motion, useMotionValueEvent, easeIn } from "framer-motion";
import Link from "next/link";
import Popup from "@/app/components/Popup/Popup";
import { createPortal } from "react-dom";

const HeaderMenu = () => {
  const [visible, setVisible] = useState(true);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Устанавливаем флаг, что компонент смонтирован на клиенте
    setIsMounted(true);
  }, []);

  const [mobileOpen, setMobileOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && ref.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [mobileOpen]);

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

  const variantsSec = {
    open: { opacity: 1, x: 0 },
    closed: {
      opacity: 0,
      x: "-100%",
    },
  };

  return (
    <motion.header
      className={`container ${styles.headerContainer}`}
      animate={visible ? "open" : "closed"}
      variants={variants}
    >
      <nav className={`container ${styles.headerMenuContainer}`}>
        <Link href={`/`} className={styles.HeaderMenuLogo}>
          <Logo />
        </Link>
        <ul className={styles.HeaderMenuLinksContaiener}>
          <li className={styles.HeaderMenuLinkItem}>
            <Link href={"/about"}>О нас</Link>
          </li>
          <li className={styles.HeaderMenuLinkItem}>
            <Link href={"/catalog"}>Каталог</Link>
          </li>
          <li className={styles.HeaderMenuLinkItem}>
            <Link href={"/busines"}>Бизнесу</Link>
          </li>
          <li className={styles.HeaderMenuLinkItem}>
            <Link href={"/delivery"}>Доставка и оплата</Link>
          </li>
          <li className={styles.HeaderMenuLinkItem}>
            <Link href={"/posts"}>Новости</Link>
          </li>
          <li className={styles.HeaderMenuLinkItem}>
            <Link href={"/contacts"}>Контакты</Link>
          </li>
        </ul>
        <div
          className={styles.mobileMenuContainer}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          |||
        </div>

        {isMounted &&
          createPortal(
            <motion.div
              initial={false}
              animate={mobileOpen ? "open" : "closed"}
              variants={variantsSec}
              className={styles.mobileList}
            >
              <div onClick={() => setMobileOpen(false)}>Close Button</div>
              <Link ref={ref} href={"/catalog"}>
                Привет
              </Link>
            </motion.div>,
            document.body
          )}

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

          <div className={styles.contactsPhones}>
            <a href="tel:7999 999 999">+7 (999) 999-99-99</a>
            <a href="tel:7999 999 999">+7 (999) 999-99-99</a>
            <a href="mailto:test@yandex.ru">test@yandex.ru</a>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default HeaderMenu;
