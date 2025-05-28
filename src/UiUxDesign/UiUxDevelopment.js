import Footer from "../footer";

import Header from "../header";
import UiUxFAQ from "./uiusfaqs";
import UIUXExpertise from "./uiuxexperties";
import HeroUIUXBanner from "./heroUiUsbanner";
export default function UiUxdDevelopment(){

     return(
        <>
        <Header/>
        <HeroUIUXBanner/>
        <UIUXExpertise/>
            <UiUxFAQ/>
        <Footer/>
        </>
     )
}