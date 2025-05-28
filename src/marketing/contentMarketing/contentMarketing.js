
import Header from "../../header"
import Footer from "../../footer"
import ContentMarketingFAQ from "./contentmarketingfaqs"
import ContentMarketingExpertise from "./contentmaketingexperties"
import HeroContentMarketingBanner from "./contentmarketingbanner"
export default function ContentMarketing(){
      return(
        <>
            <Header/>
            <HeroContentMarketingBanner/>
            <ContentMarketingExpertise/>
            <ContentMarketingFAQ/>
            <Footer/>
        </>
      )
}