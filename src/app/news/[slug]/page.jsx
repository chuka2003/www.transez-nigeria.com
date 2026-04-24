import Link from "next/link";
import PageHero from "@/components/PageHero";
import { buildMetadata, newsPosts } from "@/data/site";

export function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = newsPosts.find((entry) => entry.slug === params.slug);

  return buildMetadata(post.title, post.excerpt, `/news/${post.slug}/`);
}

export default function NewsPostPage({ params }) {
  const post = newsPosts.find((entry) => entry.slug === params.slug);

  return (
    <>
      <PageHero
        eyebrow="News"
        title={post.title}
        description={post.excerpt}
        image="/assets/gallery/engineering-team.jpg"
        compact
      />

      <section className="section section-light">
        <div className="shell narrow-flow">
          <p className="eyebrow">
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric"
            })}
          </p>
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <Link href="/news/" className="button button-secondary">
            View all updates
          </Link>
        </div>
      </section>
    </>
  );
}
