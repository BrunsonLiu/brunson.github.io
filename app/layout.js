import "./globals.css";
import Navbar from "./components/Navbar";
import ProgressBar from "./components/ProgressBar";
import ToneToggle from "./components/ToneToggle";

export const metadata = {
  title: "Brunson's World",
  description: "Algorithm engineer | Optimization + Machine Learning Explorer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white pt-16">
        <div className="fixed top-2 right-4 z-[70]"><ToneToggle /></div>
        <Navbar />
        <ProgressBar />
        {children}
      </body>
    </html>
  );
}