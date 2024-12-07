import Events from "./components/Events";
import LocationMap from "./components/LocationMap";
import MenuHome from "./components/MenuHome";
import Testimonials from "./components/Testimonials";
import ReserveGuide from "./components/ReserveGuide";
import RestaurantHero from "./components/RestaurantHero";
import TextBanner from "./components/TextBanner";
import Gallery from "./components/Gallery";


export default function Home() {
  return ( 
    <div>
      <RestaurantHero />
      <TextBanner />
      <Events />
      <MenuHome />
      <Gallery />
      <ReserveGuide />
      <Testimonials />
      <LocationMap />
    </div>
  );
}
