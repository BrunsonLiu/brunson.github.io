import { listMarkdown } from "../lib/markdown";
import LearningList from "./LearningList";

export default function LearningIndex() {
  const notes = listMarkdown("study");
  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-semibold text-white mb-6">Learning</h1>
      <LearningList notes={notes} />
    </main>
  );
}


