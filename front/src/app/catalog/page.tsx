import Image from "next/image";
import styles from "./page.module.css";
import CatalogPage from "../pages/Catalog/CatalogPage";

async function getProducts() {
  const res = await fetch(
    `http://localhost:1337/api/products?populate=preview`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Catalog() {
  const { data } = await getProducts();

  console.log(data);

  return <CatalogPage products={data} />;
}
