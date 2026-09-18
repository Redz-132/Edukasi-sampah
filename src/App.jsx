import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WasteTypes from "./components/WasteTypes";
import HowTo from "./components/HowTo";
import FunFacts from "./components/FunFacts";
import Comments from "./components/Comments";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--paper)]">
      <Navbar />
      <Hero />
      <About />
      <WasteTypes />
      <HowTo />
      <FunFacts />
      <Comments />
      <Contact />
      <Footer />
    </div>
  );
}
