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

import SelectPrice from "@/app/components/SelectPrice/SelectPrice";

const Product = ({ conditioner }: any) => {
  const [openedSlide, setOpenedSlide] = useState(1 || undefined);
  const [value, setValue] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <div className={`${styles.productContainer}`}>
        <div className={styles.productImagesSlider}>
          <Popup
            elem={
              <div className={styles.previewGallery}>
                {conditioner.images.map((el: any, index: any) => (
                  <Image
                    key={el.id}
                    src={`http://localhost:1337${el.formats.thumbnail.url}`}
                    width={500}
                    height={500}
                    className={styles.previewImage}
                    alt=""
                    onClick={() => setOpenedSlide(index)}
                  />
                ))}
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
              {conditioner.images.map((el: any) => (
                <SwiperSlide key={el.id}>
                  <Image
                    className={styles.swiperImage}
                    src={`http://localhost:1337${el.formats.thumbnail.url}`}
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
            <h1 className={styles.productTitle}>{conditioner.title}</h1>
            {conditioner.description.map((el: any, index: any) => (
              <p key={index} className={styles.descText}>
                {el.children[0].text}
              </p>
            ))}
          </div>
          <div>
            <SelectPrice powers={conditioner.power} />
            <button className={`button-blue ${styles.productButton}`}>
              Запросить цену
            </button>
          </div>
        </div>
      </div>
      <div>
        <Accordion accordionItems={conditioner.tabs} />
      </div>
    </>
  );
};

export default Product;
