"use client";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Partners.module.css";
import Image from "next/image";
import { delay } from "framer-motion";

const Partners = () => {
  return (
    <section>
      <div className="container">
        <h2 style={{ paddingBottom: "80px" }} className={`title-medium blue`}>
          Партнеры
        </h2>
        <Swiper
          spaceBetween={3}
          slidesPerView={5}
          autoplay={{
            delay: 10,
          }}
        >
          <SwiperSlide className={styles.swiperCardPartners}>
            <a className={styles.PartnerLogoContainer}>
              <Image
                src={"/tbank.svg"}
                className={styles.PartnersImage}
                width={150}
                height={150}
                alt=""
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperCardPartners}>
            <a className={styles.PartnerLogoContainer}>
              <Image
                src={"/vercel.svg"}
                className={styles.PartnersImage}
                width={150}
                height={150}
                alt=""
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperCardPartners}>
            <a className={styles.PartnerLogoContainer}>
              <Image
                src={"/tbank.svg"}
                className={styles.PartnersImage}
                width={150}
                height={150}
                alt=""
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperCardPartners}>
            <a className={styles.PartnerLogoContainer}>
              <Image
                src={"/vercel.svg"}
                className={styles.PartnersImage}
                width={150}
                height={150}
                alt=""
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperCardPartners}>
            <a className={styles.PartnerLogoContainer}>
              <Image
                src={"/tbank.svg"}
                className={styles.PartnersImage}
                width={150}
                height={150}
                alt=""
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperCardPartners}>
            <a className={styles.PartnerLogoContainer}>
              <Image
                src={"/vercel.svg"}
                className={styles.PartnersImage}
                width={150}
                height={150}
                alt=""
              />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Partners;
