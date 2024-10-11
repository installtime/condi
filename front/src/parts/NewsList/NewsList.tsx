"use client";
import "swiper/css";

import { SwiperSlide, Swiper } from "swiper/react";
import styles from "./NewsList.module.css";
import Link from "next/link";
const NewsList = () => {
  return (
    <section>
      <div className={`container`}>
        <h2 className={`title-medium blue ${styles.newsListTitle}`}>Новости</h2>

        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          grabCursor={true}
          breakpoints={{
            480: {
              spaceBetween: 20,
              slidesPerView: 2,
            },
            1000: {
              spaceBetween: 20,
              slidesPerView: 3,
            },
            1200: {
              spaceBetween: 20,
              slidesPerView: 4,
            },
          }}
        >
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
