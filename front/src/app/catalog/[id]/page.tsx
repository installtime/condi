import Product from "@/app/pages/Products/Product";
import styles from "./singleProduct.module.css";
import CategoryList from "@/app/components/CategoryList/CategoryList";
import ProductList from "@/parts/ProductList/ProductList";

async function getData() {
  const res = await fetch(
    "http://localhost:1337/api/conditioners/1?populate=*"
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const SingleProduct = async () => {
  const { data } = await getData();

  return (
    <div className={`container`} style={{ marginTop: "150px" }}>
      <div>
        <span>ГЛАВНАЯ -</span>
        <span>СИСТЕМЫ HAIER -</span>
        <span>HSU-07HPL103/R3</span>
      </div>
      <div className={`mt ${styles.productPageContainer}`}>
        <CategoryList />
        <div className={styles.productContainerDetails}>
          <Product conditioner={data} />
        </div>
      </div>
      <ProductList />
    </div>
  );
};

export default SingleProduct;
