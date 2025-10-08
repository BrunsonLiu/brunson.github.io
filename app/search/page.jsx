import SearchClient from "./searchClient";
import { listAllContent } from "../lib/markdown";

export default function SearchPage() {
  const items = listAllContent();
  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-semibold text-white mb-6">Search</h1>
      <SearchClient items={items} />
    </main>
  );
}


