
import Header from "../../header"
import Footer from "../../footer"
import DigitalFAQ from "./digitalmarketingfaqs"
import DigitalMarketingExpertise from "./digitalmarketinexperties"
import HeroDigitalMarketingBanner from "./digitalmarketingbanner"
export default function DigitalMarketing(){
      return(
        <>
        <Header/>
        <HeroDigitalMarketingBanner/>
        <DigitalMarketingExpertise/>
        <DigitalFAQ/>
        <Footer/>
       
        </>
      )
}