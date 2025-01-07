
import Gorostiaga from "./components/Gorostiaga";
import LocationMap from "./components/LocationMap";
import MenuHome from "./components/MenuHome";
import Testimonials from "./components/Testimonials";
import ReserveGuide from "./components/ReserveGuide";
import RestaurantHero from "./components/RestaurantHero";
import TextBanner from "./components/TextBanner";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";


export default function Home() {
  return ( 
    <div>
      <RestaurantHero />
      <TextBanner />
      <Gorostiaga />
      <MenuHome />
      <ReserveGuide />
      <Gallery />
      <Testimonials />
      <LocationMap />
      <Footer />
    </div>
  );
}
