export default function DiaryPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-semibold text-white mb-4">Diary</h1>
      <p className="text-gray-300">Life and thoughts.</p>
      <ul className="list-disc list-inside mt-6 text-cyan-300/90">
        <li><a href="/diary/hobbies" className="hover:underline">Hobbies</a></li>
        <li><a href="/diary/reflections" className="hover:underline">Reflections</a></li>
        <li><a href="/diary/philosophy" className="hover:underline">Philosophy</a></li>
      </ul>
    </main>
  );
}


