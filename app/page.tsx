import { BlogPosts } from "app/components/posts";
import { Gilda_Display } from "next/font/google";
import { cx } from "./utils/cx";

const gilda = Gilda_Display({ weight: "400", subsets: ["latin"] });

export default function Page() {
  return (
    <section>
      <h1
        className={cx(
          "mb-8 text-4xl font-semibold tracking-tighter",
          gilda.className
        )}
      >
        WIT-23-1 Lernzettel
      </h1>
      <p className={cx("text-xl", gilda.className)}>
        Diese Seite ist eine Sammlung von den Lernzetteln der Klasse WIT-23
      </p>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
