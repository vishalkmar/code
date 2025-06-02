
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./AboutComponents/About";
import WebDevelopment from "./webDevelopment/webDevelopment";
import AppDevelopment from "./appDevelopment/AppDevelopment";
import SoftwareDevelopment from "./SoftwareDevelopment/softwareDevelopment";
import WebDesign from "./WebDesign/webDesign";
import UiUxdDevelopment from "./UiUxDesign/UiUxDevelopment";
import Contact from "./contactComponents/contact";
import SEO from "./marketing/SEO/SEO";
import SocialMediaMarketing from "./marketing/socialMediaMarketing/socialMediaMarketing";
import ContentMarketing from "./marketing/contentMarketing/contentMarketing";
import LogoDesign from "./marketing/logoDesign/logoDesign";
import DigitalMarketing from "./marketing/digitalMarketing/digitalMarketing";
import FAQPage from "./pages/faqs";
import PrivacyPolicy from "./pages/privacypolacy";
import TermsAndConditions from "./pages/termsandconditions";
import NotFound from "./notfound";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
    console.log("api",process.env.REACT_APP_SITE_EMAIL)
    return (
        <BrowserRouter>
         <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/webdevelopment" element={<WebDevelopment/>} />
                <Route path="/appdevelopment" element={<AppDevelopment/>} />
                <Route path="/softwaredevelopment" element={<SoftwareDevelopment/>} />
                <Route path="/webdesign" element={<WebDesign />}/>
                <Route path="/uiuxdesign" element={<UiUxdDevelopment/>} />
                <Route path="/seo" element={<SEO />}/>
                <Route path="/socialmediamarketing" element={<SocialMediaMarketing/>} />
                <Route path="/contentmarketing" element={<ContentMarketing/>}/>
                <Route path="/logodesign" element={<LogoDesign />} />
                <Route path="/digitalmarketing" element={<DigitalMarketing/>}/>
                <Route path="/faqs" element={<FAQPage />}/>
                <Route path="/privacy" element={<PrivacyPolicy />}/>
                  <Route path="/termsandconditions" element={<TermsAndConditions/>}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
