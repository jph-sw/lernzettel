import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        WIT-23-1 Lernzettel
      </h1>
      <p>Diese Seite ist eine Sammlung von den Lernzetteln der Klasse WIT-23</p>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
