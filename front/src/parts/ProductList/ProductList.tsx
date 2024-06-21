"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import ProductCard from "@/app/components/ProductCard/ProductCard";
import styles from "./productlist.module.css";

const ProductList = () => {
  return (
    <>
      <h2 className={`title-medium blue`}>Сплит системы</h2>
      <Swiper
        className={styles.productList}
        spaceBetween={20}
        slidesPerView={4}
      >
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ProductList;
