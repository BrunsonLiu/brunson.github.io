export default function StudyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-semibold text-white mb-4">Study</h1>
      <p className="text-gray-300">Learning notes across disciplines.</p>
      <ul className="list-disc list-inside mt-6 text-cyan-300/90">
        <li><a href="/study/math" className="hover:underline">Math</a></li>
        <li><a href="/study/optimization" className="hover:underline">Optimization</a></li>
        <li><a href="/study/ml-dl" className="hover:underline">ML & DL</a></li>
        <li><a href="/study/management" className="hover:underline">Management</a></li>
        <li><a href="/study/interdisciplinary" className="hover:underline">Interdisciplinary</a></li>
      </ul>
    </main>
  );
}


