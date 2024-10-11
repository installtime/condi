"use client";
import ProductCard from "@/app/components/ProductCard/ProductCard";
import styles from "./catalog.module.css";
import Image from "next/image";
import CategoryList from "@/app/components/CategoryList/CategoryList";
import Dropdown from "@/app/components/Dropdown/Dropdown";
const CatalogPage: React.FC<any> = ({ products }) => {
  return (
    <>
      <section>
        <h1>Каталог</h1>
        <p className={styles.catalogDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aut
          sequi blanditiis? Natus quasi quod aliquid quaerat totam neque quam,
          fugit unde inventore, voluptatum quo corporis, eius dolorem. Odit,
          esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          aut sequi blanditiis? Natus quasi quod aliquid quaerat totam neque
          quam, fugit unde inventore, voluptatum quo corporis, eius dolorem.
          Odit, esse. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quaerat aut sequi blanditiis? Natus quasi quod aliquid quaerat totam
          neque quam, fugit unde inventore, voluptatum quo corporis, eius
          dolorem. Odit, esse.
        </p>
      </section>

      <section>
        <div className={styles.catalogProducts}>
          <h2 className={`title-medium blue`}>СПЛИТ-СИСТЕМЫ HAIER</h2>
          <div className={styles.productList}>
            {products.map((el: any) => (
              <ProductCard product={el} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CatalogPage;
