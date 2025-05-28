
import Header from "../../header"
import Footer from "../../footer"
import SeoFAQ from "./seofaqs"
import SEOExpertise from "./seoexperties"
import HeroSEOBanner from "./seoherobanner"

export default function SEO(){
      return(
        <>
     
        <Header/>
        <HeroSEOBanner/>
        <SEOExpertise/>
        <SeoFAQ/>
        <Footer/>
        </>
      )
}