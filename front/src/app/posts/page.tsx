import Link from "next/link";
import Image from "next/image";
import styles from "./NewsList.module.css";

async function getAllPosts() {
  const res = await fetch(`${process.env.STRAPI}/api/posts`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const PostPage = async () => {
  const { data } = await getAllPosts();

  console.log(data);
  return (
    <section className={`container`} style={{ marginTop: "150px" }}>
      <h1>Новости</h1>
      <ul className={styles.newsList}>
        {data.map((post: any) => (
          <Link
            className={styles.newsCardLink}
            key={post.id}
            href={`/posts/${post.id}`}
          >
            <li className={styles.newsCard}>
              <div className={styles.newsImageContainer}>
                <Image
                  className={styles.newsImage}
                  src={`/67a8bb133446615_1_372b986e9e.png`}
                  width={500}
                  height={300}
                  alt=""
                />
              </div>
              <span className={styles.postDate}>12.05.2024</span>
              <h3>Lorem ipsum dolor sit amet</h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis deleniti voluptatum debitis nisi similique dolor,
                natus nostrum quibusdam non quas labore ipsam possimus illum in,
                sequi quo soluta dicta exercitationem.
              </p>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default PostPage;
