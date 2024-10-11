import Image from "next/image";
import styles from "./page.module.css";
import CatalogPage from "@/app/pages/Catalog/CatalogPage";

async function getCategory({ params }: { params: { slug: string } }) {
  const res = await fetch(
    `http://localhost:1337/api/products?populate=*&filters[product_category][slug]=${params.slug}`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function CatalogCategory({
  params,
}: {
  params: { slug: string };
}) {
  const { data } = await getCategory({ params });

  return (
    <div>
      <CatalogPage products={data} />
    </div>
  );
}
