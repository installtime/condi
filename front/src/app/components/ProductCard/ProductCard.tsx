"use client";

import Image from "next/image";
import styles from "./ProductCard.module.css";
import Star from "@/app/Images/Star";
import Link from "next/link";

const ProductCard: React.FC<any> = ({ product }) => {
  return (
    <Link href={`/catalog/${product.slug}`} className={`${styles.productCard}`}>
      <div className={styles.productCardImage}>
        <Image
          className={styles.productImage}
          src={`http://localhost:1337${product.preview.url}`}
          alt=""
          width={1000}
          height={1000}
        />
      </div>

      {/* <div className={styles.productInfo}>
        <div className={styles.productRating}>
          <span className={styles.productRateIcon}>
            <Star />
          </span>
          <span>5.0</span>
        </div>
        <span className={styles.productReview}>320 отзывов</span>
      </div> */}
      <h3 className={styles.productTitle}>{product.title}</h3>
      <p className={styles.productPrice}>От: {product.price} руб.</p>
      <button className={`${styles.productMore} button-blue`}>Подробнее</button>
    </Link>
  );
};

export default ProductCard;
