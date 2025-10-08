import Timeline from "../components/Timeline";
import timeline from "../../data/timeline.json";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-semibold text-white mb-4">About</h1>
      <p className="text-gray-300 mb-8">Postgraduate passionate about optimization & machine learning.</p>
      <h2 className="text-xl text-white mb-3">Timeline</h2>
      <Timeline items={timeline} />
      <div className="mt-8">
        <a className="inline-block bg-white/10 hover:bg-white/20 text-cyan-300 rounded-xl px-4 py-2" href="/resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
      </div>
    </main>
  );
}


