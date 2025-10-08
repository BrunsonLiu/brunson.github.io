import { getMarkdownHtml } from "../../lib/markdown";

export default async function ResearchPost({ params }) {
  const { slug } = params;
  const { html, meta } = await getMarkdownHtml("research", slug);
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 prose prose-invert">
      <h1>{meta.title || slug}</h1>
      <article dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}


