
import Header from "../header"
import Footer from "../footer"
import SoftwareDevFAQ from "./softwaredevfaqs"
// import ImageBanner from "../appDevelopment/banner"
import softwarebanner from  '../serviceImages/software/banner.jpg' 
import SoftwareDevelopmentExpertise from "./softwaredevexperties"
import HeroSoftwareBanner from "./banner"
export default function SoftwareDevelopment(){

     return(
        <>
        <Header/>
        {/* <ImageBanner 
            imageUrl={softwarebanner}
            /> */}
            <HeroSoftwareBanner/>
         <SoftwareDevelopmentExpertise/>
        <SoftwareDevFAQ/>
        <Footer/>
        </>
     )
}