
import Header from "./header";
import HomeBanner from "./HomeBanner";
import WhoWeAre from "./whoWeAre";
import StatsSection from "./count";
import ServicesSection from "./serviceSection";
import ClientReviews from "./clientReview";
import CompanyIntro from "./compnay";
import Footer from "./footer";
// import AboutUs from "./Aboutcomponent";
function Home() {
  return (
      <div>
        <Header/>
        <HomeBanner/>
      <WhoWeAre/>
   <StatsSection/>
   <ServicesSection/>
   <CompanyIntro/>
   <ClientReviews/>
   <Footer/>
      </div>
  );
} 

export default Home;
