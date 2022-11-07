import NavBar from "../components/NavigationBar/NavigationBar";
import IntroSection from "../components/IntroSection/IntroSection";
import Showcase from "../components/ShowcaseSection/Showcase";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <div>
      <NavBar />
      <main>
        <IntroSection />
        <Showcase type="Posts"/>
        <Showcase type="Projects"/>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
