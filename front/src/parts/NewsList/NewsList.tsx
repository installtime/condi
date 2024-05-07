"use client";
import "swiper/css";

import { SwiperSlide, Swiper } from "swiper/react";
import styles from "./NewsList.module.css";
import Link from "next/link";
const NewsList = () => {
  return (
    <section className={`mt ${styles.sectionContainer}`}>
      <div className={`container`}>
        <h2 className={`title-medium white ${styles.newsListTitle}`}>
          Новости
        </h2>

        <Swiper spaceBetween={20} slidesPerView={4} grabCursor={true}>
          <SwiperSlide className={styles.newsCardSlide}>
            <div className={styles.newsCardContainer}>
              <h3>Последние события</h3>
              <p className={styles.newsMiniCardTest}>
                Таймер автоматического отключения конфорок по заданному времени
                с сенсорным управлением.
              </p>
              <Link href={`/`}>Последние события</Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.newsCardSlide}>
            <div className={styles.newsCardContainer}>
              <h3>Последние события</h3>
              <p className={styles.newsMiniCardTest}>
                Таймер автоматического отключения конфорок по заданному времени
                с сенсорным управлением.
              </p>
              <Link href={`/`}>Последние события</Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.newsCardSlide}>
            <div className={styles.newsCardContainer}>
              <h3>Последние события</h3>
              <p className={styles.newsMiniCardTest}>
                Таймер автоматического отключения конфорок по заданному времени
                с сенсорным управлением.
              </p>
              <Link href={`/`}>Последние события</Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.newsCardSlide}>
            <div className={styles.newsCardContainer}>
              <h3>Последние события</h3>
              <p className={styles.newsMiniCardTest}>
                Таймер автоматического отключения конфорок по заданному времени
                с сенсорным управлением.
              </p>
              <Link href={`/`}>Последние события</Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.newsCardSlide}>
            <div className={styles.newsCardContainer}>
              <h3>Последние события</h3>
              <p className={styles.newsMiniCardTest}>
                Таймер автоматического отключения конфорок по заданному времени
                с сенсорным управлением.
              </p>
              <Link href={`/`}>Последние события</Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default NewsList;
