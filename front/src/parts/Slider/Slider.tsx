"use client";
import "swiper/css";
import styles from "./slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
const Slider = () => {
  return (
    <Swiper spaceBetween={0} slidesPerView={1}>
      <SwiperSlide>
        <div
          style={{
            backgroundImage: `url("/67a8bb133446615_1_372b986e9e.png")`,
            backgroundSize: "cover",
          }}
          className={styles.sliderContent}
        >
          <div className={styles.sliderFilter}></div>
          {/* <Image
            width={1280}
            height={748}
            alt={"test"}
            className={styles.sliderBgImage}
            src={
              "http://localhost:1337/uploads/67a8bb133446615_1_372b986e9e.png"
            }
          /> */}
          <div className={`${styles.sliderInfoContent}`}>
            <div className={`container`} style={{ height: "100%" }}>
              <span className={`${styles.sliderSubtitle}`}>
                ДЛЯ КОММЕРЧЕСКИХ ЦЕЛЕЙ
              </span>
              <h1 className={`title-big`}>СОВРЕМЕННЫЕ СИСТЕМЫ ВЕНТИЛЯЦИИ</h1>
              <p className={`${styles.sliderDescription}`}>
                СИСТЕМЫ ВЕНТИЛЯЦИИ HAIER ПО САМЫМ ВЫГОДНЫМ ЦЕЛЯМ ДЛЯ ВАШЕГО
                ОФИСА
              </p>
              <button className={`button-blue ${styles.sliderButton}`}>
                КАТАЛОГ
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
