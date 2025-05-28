
import Header from "../header"
import Footer from "../footer"
import WebDesignFAQ from "./webfaqs"
import WebDesignExpertise from "./webdesignexperties"
import HeroWebDesignBanner from "./heroWebdesign"
export default function WebDesign(){

     return(
        <>
           <Header/>
           <HeroWebDesignBanner/>
           <WebDesignExpertise/>
           <WebDesignFAQ/>
           <Footer/>
        </>
     )
}