import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      {/* 页面宽度与留白控制 */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Projects />
      </div>
      <Footer />
    </>
  );
}