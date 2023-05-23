import logo from "./logo.svg";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Wordpress from "./components/Wordpress";
import { Team } from "./components/Team";
import { Sucess } from "./components/Sucess";
import { HaveYou } from "./components/HaveYou";
import { Foot } from "./components/Foot";
import { MyNav } from "./components/MyNav";
import { Hero } from "./components/Hero";
import { Tell } from "./components/Tell";
import { Featured } from "./components/Featured";
import { TopScrool } from "./components/TopScrool";
import { Integer } from "./components/Integer";
import { Long } from "./components/Long";
import { Agile } from "./components/Agile";
import Loading from "./components/Loading";
function App() {
  AOS.init();
  return (
    <div className="App overflow-hidden">
      <MyNav />
      <Hero />
      <Tell />
      <Featured />
      <Integer />
      <Wordpress />
      <Long />
      <Agile />
      <Team />
      <Sucess />
      <HaveYou />
      <Foot />
      <TopScrool />
      <Loading/> 
    </div>
  );
}

export default App;
