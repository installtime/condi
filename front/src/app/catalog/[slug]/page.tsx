import Product from "@/app/pages/Products/Product";
import styles from "./singleProduct.module.css";
import CategoryList from "@/app/components/CategoryList/CategoryList";
import ProductList from "@/parts/ProductList/ProductList";

async function getData({ params }: { params: { slug: string } }) {
  const res = await fetch(`http://localhost:1337/api/products/${params.slug}`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const SingleProduct: React.FC<any> = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const { data } = await getData({ params });

  return (
    <div>
      <div className={styles.productContainerDetails}>
        <Product conditioner={data} />
      </div>
      {/* <ProductList /> */}
    </div>
  );
};

export default SingleProduct;
