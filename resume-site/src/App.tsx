import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Slideshow from "./components/Slideshow";
import Images from "./HeroImages";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Slideshow images={Images} />
    </div>
  );
}

export default App;
