import Benefits from "./components/Benefits";
import Cards from "./components/Cards";
import Events from "./components/Events";
import ImageListHome from "./components/ImageListHome";
import ReserveGuide from "./components/ReserveGuide";
import Slider from "./components/Slider";
import TextBanner from "./components/TextBanner";


export default function Home() {
  return ( 
    <div>
      <Slider />
      <TextBanner />
      <Benefits />
      <ImageListHome />
      < Events />
      <ReserveGuide />
    </div>
  );
}
