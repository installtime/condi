import styles from "./singleProduct.module.css";

async function getData({ params }: { params: { id: number } }) {
  const res = await fetch(`${process.env.STRAPI}/api/posts/${params.id}`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const SinglePost = async ({ params }: { params: { id: number } }) => {
  const { data } = await getData({ params });

  console.log(params.id);

  return (
    <div className={`container`} style={{ marginTop: "150px" }}>
      <div
        className={styles.postContainer}
        dangerouslySetInnerHTML={{ __html: data.attributes.news }}
      ></div>
    </div>
  );
};

export default SinglePost;
