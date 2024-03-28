import "./Home.css";
import YoutubeSection from "./../../components/home-components/youtube-section/YoutubeSection";
import AppSection from "./../../components/home-components/app-section/AppSection";
import Hero from "./../../components/home-components/hero-section/Hero";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-inner-wrapper ">
        <Hero />
        <YoutubeSection />
        <AppSection />
      </div>
    </div>
  );
};

export default Home;
