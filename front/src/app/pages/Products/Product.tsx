"use client";
import styles from "./Product.module.css";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination, Navigation, Thumbs, Controller } from "swiper/modules";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Popup from "@/app/components/Popup/Popup";
import Image from "next/image";
import Accordion from "@/app/components/Accordion/Accordion";
const Product = ({ conditioner }: any) => {
  const [controlledSwiper, setControlledSwiper] = useState(null);

  const [openedSlide, setOpenedSlide] = useState(undefined || Number);

  useEffect(() => {
    console.log(openedSlide);
  }, [openedSlide]);
  return (
    <>
      <div className={`${styles.productContainer}`}>
        <div className={styles.productImagesSlider}>
          <Popup
            elem={
              <div className={styles.previewGallery}>
                {conditioner.attributes.images.data.map(
                  (el: any, index: any) => (
                    <Image
                      key={el.id}
                      src={`http://localhost:1337${el.attributes.url}`}
                      width={500}
                      height={500}
                      className={styles.previewImage}
                      alt=""
                      onClick={() => setOpenedSlide(index)}
                    />
                  )
                )}
              </div>
            }
          >
            <Swiper
              modules={[Navigation, Pagination]}
              className={styles.popSwiper}
              spaceBetween={50}
              slidesPerView={1}
              initialSlide={openedSlide}
              navigation
              pagination={{ clickable: true }}
            >
              {conditioner.attributes.images.data.map((el: any) => (
                <SwiperSlide key={el.id}>
                  <Image
                    className={styles.swiperImage}
                    src={`http://localhost:1337${el.attributes.url}`}
                    width={500}
                    height={500}
                    alt=""
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Popup>
        </div>
        <div className={`${styles.descriptContainer}`}>
          <div>
            <h1 className={`title-small`}>
              Настенный кондиционер Haier HSU-07HPL103/R3
            </h1>
            <span className={`${styles.productPrice}`}>40 000 ₽</span>
            <p className={styles.descText}>
              Кондиционер Haier серии Flexis SuperMatch AS25S2SF2FA-B /
              1U25S2SM3FA – это инверторная сплит-система с высокой
              энергоэффективностью и функциональностью. Она обеспечивает
              комфортный микроклимат в помещении до 25 м2, работая в режиме
              обогрева до -20°C. Кондиционер оснащен мощной УФ-лампой для
              стерилизации воздуха, эко-датчиком и Wi-Fi управлением через
              приложение EVO.
            </p>
          </div>

          <button className={`button-blue ${styles.productButton}`}>
            Запросить цену
          </button>
        </div>
      </div>
      <div>
        <Accordion />
        <div
          className={styles.productCharacteristics}
          dangerouslySetInnerHTML={{
            __html: conditioner.attributes.Characteristics,
          }}
        ></div>
      </div>
    </>
  );
};

export default Product;
