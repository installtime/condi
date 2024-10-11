"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import ProductCard from "@/app/components/ProductCard/ProductCard";
import styles from "./productlist.module.css";

const ProductList = ({ recommended }: any) => {
  return (
    <section className="container">
      <h2 className={`title-medium blue`}>Сплит системы</h2>
      <Swiper
        className={styles.productList}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          480: {
            slidesPerView: 2,
          },
          820: {
            slidesPerView: 4,
          },
        }}
      >
        {recommended.map((el: any) => (
          <SwiperSlide>
            <ProductCard product={el} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProductList;
