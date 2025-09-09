import FirstPage from "../components/calculator/FirstPage"
import PaymentBreakdown from "../components/calculator/PaymentBreakdown"
import HistoricalRates from "../components/calculator/HistoricalRates"
import Navbar from "../components/About/Navbar"
import Template from "../components/calculator/Template"
import Articles from "../components/calculator/Articles"
import Rates from "../components/calculator/Rates"
import Cards from "../components/calculator/Cards"
import Description from "../components/calculator/Description"
import Opinions from "../components/calculator/Opinions"
import FAQS from "../components/calculator/FAQS"
import FAQ from "../components/calculator/FAQ"
import { Quote } from "lucide-react"
import Bottom from "../components/about/Bottom"
import Footer from "../components/about/Footer"
function page() {
  return (
    <div>
         <Navbar/>
        <FirstPage/>
        <PaymentBreakdown/>
        <Quote/>
        <Opinions/>
        <HistoricalRates/>
        <Cards/>
        <Description/>
        <FAQ/>
        <FAQS/>
        <Rates/>
        <Articles/>
        <Template/>
        <Bottom/>
        <Footer/>
    </div>
  )
}

export default page
