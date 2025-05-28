
import Header from "../../header"
import Footer from "../../footer"
import SocialFAQ from "./socialfaqs"
import SocialMediaMarketingExpertise from "./socialmediamarketingexperties"
import HeroSocialMediaBanner from "./socialmediamarketingbanner"
export default function SocialMediaMarketing(){
      return(
        <>
        <Header/>
        <HeroSocialMediaBanner/>
        <SocialMediaMarketingExpertise/>
         <SocialFAQ/>
        <Footer/>
        </>
      )
}