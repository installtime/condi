"use client";

import Image from "next/image";
import styles from "./ProductCard.module.css";
import Star from "@/app/Images/Star";

const ProductCard = ({ customClass }: any) => {
  return (
    <div className={`${customClass} ${styles.productCard}`}>
      <div className={styles.productCardImage}>
        <Image
          className={styles.productImage}
          src={`http://localhost:1337/uploads/d5dd985cbb42e6804f885ff4171d885d_1_230c0bce95.png`}
          alt=""
          width={1000}
          height={1000}
        />
      </div>

      <div className={styles.productInfo}>
        <div className={styles.productRating}>
          <span className={styles.productRateIcon}>
            <Star />
          </span>
          <span>5.0</span>
        </div>
        <span className={styles.productReview}>320 отзывов</span>
      </div>
      <h3 className={styles.productTitle}>
        Кондиционер Haier Tundra ON/OFF HSU-07HTT03/R2
      </h3>
      <p className={styles.productPrice}>20 100 руб.</p>
      <button className={`${styles.productMore} button-blue`}>Подробнее</button>
    </div>
  );
};

export default ProductCard;
