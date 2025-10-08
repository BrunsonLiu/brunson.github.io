import Card from "../components/Card";

export default function ResearchPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-semibold text-white mb-4">Research</h1>
      <p className="text-gray-300">Directions and paper ideas.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <Card title="L2O" href="/research/l2o" />
        <Card title="VRP" href="/research/vrp" />
        <Card title="Reading List" href="/research/reading-list" />
        <Card title="Ideas" href="/research/ideas" />
      </div>
    </main>
  );
}


