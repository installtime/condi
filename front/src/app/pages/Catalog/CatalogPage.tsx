"use client";
import ProductCard from "@/app/components/ProductCard/ProductCard";
import styles from "./catalog.module.css";
import Image from "next/image";
import CategoryList from "@/app/components/CategoryList/CategoryList";
const CatalogPage = () => {
  return (
    <>
      <section className={`${styles.sliderContent}`}>
        <div className={`container ${styles.sliderInfoContent}`}>
          <h1 className={`title-big`}>Каталог</h1>
        </div>
        <div className={`${styles.sliderFilter}`}></div>
        <div className={styles.sliderBg}>
          <Image
            className={`${styles.sliderBgImage}`}
            src={`http://localhost:1337/uploads/Rectangle_6_1cf9128d32.png`}
            width={1280}
            height={443}
            alt=""
          />
        </div>
      </section>
      <section className={`container mt`}>
        <span>Главная - сплит ситемы</span>
      </section>
      <section className={`container mt ${styles.catalog}`}>
        <CategoryList />
        <div className={styles.catalogProducts}>
          <h2 className={`title-medium blue`}>СПЛИТ-СИСТЕМЫ HAIER</h2>
          <div className={styles.productList}>
            <ProductCard customClass={"mb20"} />
            <ProductCard customClass={"mb20"} />
            <ProductCard customClass={"mb20"} />
            <ProductCard customClass={"mb20"} />
            <ProductCard customClass={"mb20"} />
            <ProductCard customClass={"mb20"} />
          </div>
        </div>
      </section>
    </>
  );
};

export default CatalogPage;
