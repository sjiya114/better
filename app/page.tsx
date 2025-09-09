import Banner from "./components/home/Banner";
import Bottom from "./components/about/Bottom";
import Footer from "./components/about/Footer";
import Navbar from "./components/home/Navbar";
import Stories from "./components/home/Stories";
import Cards from "./components/home/Cards";

export default function Home() {
  return (
  <>
   <Navbar/>
   <Banner/>
   <Stories/>
   <Cards/>
   <Bottom/>
   <Footer/>
  </>
  );
}
