import Backed from "../components/about/Backed"
import Navbar from "../components/about/Navbar"
import Hero from "../components/about/Hero"
import Changes from "../components/about/Changes"
import Timeline from "../components/about/TimeLine"
import Bottom from "../components/about/Bottom"
import Footer from "../components/about/Footer"
import Posts from "../components/about/Posts"
import Banner from "../components/about/Banner"

function page() {

  return (
   <>
   <Navbar/>
  <Banner/>
  <Hero/>
  <Changes/>
  <Backed/>
  {/* <Timeline/> */}
  <Posts/>
  <Bottom/>
  <Footer/>
    </>
  )
}

export default page
