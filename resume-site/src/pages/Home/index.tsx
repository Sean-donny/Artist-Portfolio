import Marquee from '../../components/Marquee';
import Works from './Works';
import Hero from './Hero';
import SEO from '../../components/SEO/SEO';

// Image imports
import SeanPortrait from '/optimised/sean_donny_portrait.jpg';

const Home = () => {
  return (
    <main>
      <SEO
        title="Home"
        description="Discover the captivating art of Sean Donny, a contemporary artist in England, UK. Explore his portfolio of personal & client projects, and gallery."
        type="website"
        url="https://www.seandonny.com/"
        image={SeanPortrait}
      />
      <article>
        <Hero />
      </article>
      <section>
        <Marquee />
      </section>
      <article>
        <Works />
      </article>
    </main>
  );
};

export default Home;
