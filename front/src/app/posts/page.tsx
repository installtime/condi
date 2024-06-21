import Link from "next/link";

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
    <section className={`container`} style={{ marginTop: "220px" }}>
      <div>
        {data.map((post: any) => (
          <Link key={post.id} href={`/posts/${post.id}`}>
            {post.attributes.title}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PostPage;
