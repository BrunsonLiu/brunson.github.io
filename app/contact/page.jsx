export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-semibold text-white mb-6">Contact</h1>
      <div className="space-y-2 text-gray-300">
        <p>Email: <a className="text-cyan-300 hover:underline" href="mailto:you@example.com">you@example.com</a></p>
        <p>GitHub: <a className="text-cyan-300 hover:underline" href="https://github.com/yourname" target="_blank" rel="noreferrer">github.com/yourname</a></p>
        <p>LinkedIn: <a className="text-cyan-300 hover:underline" href="https://www.linkedin.com/in/yourname" target="_blank" rel="noreferrer">linkedin.com/in/yourname</a></p>
      </div>
    </main>
  );
}


