import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SliderAnimation from "./components/SliderAnimation";

function App() {
  return (
    <>
      {" "}
      <div className="min-h-screen bg-gradient-to-b from-purple-100 via-orange-100 to-transparent">
        <Navbar />
        <Hero />
        <SliderAnimation />
      </div>
    </>
  );
}

export default App;
