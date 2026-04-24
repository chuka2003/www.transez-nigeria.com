import PageHero from "@/components/PageHero";
import PostList from "@/components/PostList";
import { buildMetadata, newsPosts } from "@/data/site";

export const metadata = buildMetadata(
  "News",
  "News and company updates from Transez Nigeria Limited.",
  "/news/"
);

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News"
        title="Company updates, announcements, and business news"
        description="Read company updates covering partnerships, products, and business activity across Transez."
        image="/assets/gallery/power-distribution.jpg"
        compact
      />

      <section className="section section-light">
        <div className="shell">
          <PostList posts={newsPosts} />
        </div>
      </section>
    </>
  );
}
