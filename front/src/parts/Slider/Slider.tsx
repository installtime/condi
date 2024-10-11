"use client";
import "swiper/css";
import styles from "./slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
const Slider = () => {
  return (
    <section>
      <Swiper spaceBetween={0} slidesPerView={1}>
        <SwiperSlide>
          <div className={styles.sliderContent}>
            <div className={styles.sliderFilter}></div>
            <Image
              width={1280}
              height={748}
              alt={"test"}
              className={styles.sliderBgImage}
              src={
                "http://localhost:1337/uploads/67a8bb133446615_1_372b986e9e.png"
              }
            />
            <div className={`${styles.sliderInfoContent}`}>
              <div
                className={`container`}
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div style={{ width: "50vw" }}>
                  <span className={`${styles.sliderSubtitle}`}></span>
                  <h1 className={`title-big ${styles.sliderTitle}`}>
                    ШИРОКИЙ АССОРТИМЕНТ СПЛИТ-СИСТЕМ ПО ДОСТУПНЫМ ЦЕНАМ
                  </h1>
                  <p className={`${styles.sliderDescription}`}>
                    Высокое качество, выгодные условия и быстрая доставка по
                    всей России. Откройте выгодное сотрудничество с ведущим
                    дистрибьютором Haier!
                  </p>
                  <Link
                    href={"/catalog"}
                    className={`button-blue ${styles.sliderButton}`}
                  >
                    КАТАЛОГ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;
