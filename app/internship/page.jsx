export default function InternshipPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-semibold text-white mb-4">Internship</h1>
      <p className="text-gray-300">Projects and reflections.</p>
      <ul className="list-disc list-inside mt-6 text-cyan-300/90">
        <li><a href="/internship/supply-chain-project" className="hover:underline">Supply Chain Project</a></li>
        <li><a href="/internship/ad-algorithm-notes" className="hover:underline">Ad Algorithm Notes</a></li>
        <li><a href="/internship/reflection" className="hover:underline">Reflection</a></li>
      </ul>
    </main>
  );
}


