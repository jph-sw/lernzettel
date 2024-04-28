import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Lernzettel",
  description: "Ein paar lernzettel.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Lernzettel
      </h1>
      <BlogPosts />
    </section>
  );
}
