import Link from "next/link";

export default function PostList({ posts }) {
  return (
    <div className="news-grid">
      {posts.map((post) => (
        <article className="news-card" key={post.slug}>
          <p className="eyebrow">
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric"
            })}
          </p>
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
          <Link href={`/news/${post.slug}/`}>Read update</Link>
        </article>
      ))}
    </div>
  );
}
