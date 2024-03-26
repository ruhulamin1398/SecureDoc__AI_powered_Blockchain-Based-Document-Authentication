import "./Home.css";
import Hero from "../../components/hero-section/Hero";
import YoutubeSection from "../../components/youtube-section/YoutubeSection";
import AppSection from "../../components/app-section/AppSection";

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
