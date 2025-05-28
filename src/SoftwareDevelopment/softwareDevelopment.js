
import Header from "../header"
import Footer from "../footer"
import SoftwareDevFAQ from "./softwaredevfaqs"

import SoftwareDevelopmentExpertise from "./softwaredevexperties"
import HeroSoftwareBanner from "./banner"
export default function SoftwareDevelopment(){

     return(
        <>
        <Header/>
       
            <HeroSoftwareBanner/>
         <SoftwareDevelopmentExpertise/>
        <SoftwareDevFAQ/>
        <Footer/>
        </>
     )
}