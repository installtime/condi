"use client";
import ProductCard from "@/app/components/ProductCard/ProductCard";
import styles from "./catalog.module.css";
import Image from "next/image";
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
        <div className={styles.catalogList}>
          <div className={styles.catalogListContainer}>
            <ul className={styles.categoryList}>
              <li>
                <span className={styles.parentCategory}>
                  Сплит-системы Haier
                </span>
                <ul className={`border-bottom ${styles.categoryList}`}>
                  <li className={styles.categoryListItem}>
                    Настенные кондиционеры
                  </li>
                  <li className={styles.categoryListItem}>
                    Напольные сплит-системы
                  </li>
                  <li className={styles.categoryListItem}>
                    Сплит-системы для промышленных зданий
                  </li>
                  <li className={styles.categoryListItem}>
                    Универсальные сплит-системы
                  </li>
                </ul>
              </li>
            </ul>
            <ul className={styles.categoryList}>
              <li>
                <span className={styles.parentCategory}>
                  Сплит-системы Haier
                </span>
                <ul className={`border-bottom ${styles.categoryList}`}>
                  <li className={styles.categoryListItem}>
                    Настенные кондиционеры
                  </li>
                  <li className={styles.categoryListItem}>
                    Напольные сплит-системы
                  </li>
                  <li className={styles.categoryListItem}>
                    Сплит-системы для промышленных зданий
                  </li>
                  <li className={styles.categoryListItem}>
                    Универсальные сплит-системы
                  </li>
                </ul>
              </li>
            </ul>
            <ul className={styles.categoryList}>
              <li>
                <span className={styles.parentCategory}>
                  Сплит-системы Haier
                </span>
                <ul className={`border-bottom ${styles.categoryList}`}>
                  <li className={styles.categoryListItem}>
                    Настенные кондиционеры
                  </li>
                  <li className={styles.categoryListItem}>
                    Напольные сплит-системы
                  </li>
                  <li className={styles.categoryListItem}>
                    Сплит-системы для промышленных зданий
                  </li>
                  <li className={styles.categoryListItem}>
                    Универсальные сплит-системы
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
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
