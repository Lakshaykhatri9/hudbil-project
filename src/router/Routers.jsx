import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "../pages/Home.jsx";
import AboutUs from "../pages/AboutUs.jsx";
import Services from "../pages/Services.jsx";
import Products from "../pages/Products.jsx";
import Work from "../pages/Work.jsx";
import Blog from "../pages/Blog.jsx";
import Contact from "../pages/Contact.jsx";
import Chatus from "../pages/Chatus.jsx";
import OurStory from "../pages/OurStory.jsx";
import Career from "../pages/Career.jsx";
import ClientSupport from "../pages/ClientSupport.jsx";
import OurCulture from "../pages/OurCulture.jsx";
import OurTeam from "../pages/OurTeam.jsx";
import OurAboutus from "../pages/OurAboutus.jsx";
import FAQ from "../pages/FAQ.jsx";
import TermsOFServices from "../pages/TermsOFServices.jsx";
import PrivacyPolice from "../pages/PrivacyPolice.jsx";
import OurIndustries from "../pages/OurIndustries.jsx";
import OurServices from "../pages/OurServices.jsx";
import CookiesPolicy from "../pages/CookiesPolicy.jsx";
import QuickLinks from "../pages/QuickLinks.jsx";
import OurPortfolio from "../pages/OurPortfolio.jsx";
import OurWork from "../pages/OurWork.jsx";
import OurProducts from "../pages/OurProducts.jsx";
import OurAwards from "../pages/OurAwards.jsx";
import OurCourses from "../pages/OurCourses.jsx";
import UxReseaech from "../pages/UxReseaech.jsx";
import Reseaech from "../pages/Reseaech.jsx";
import Strategy from "../pages/Strategy.jsx";
import UiUxDesign from "../pages/UiUxDesign.jsx";
import Development from "../pages/Developement.jsx";
import ResourcesForYou from "../pages/ResourcesForYou.jsx";
import PageTransition from "../components/PageTransition/PageTransition.jsx";
import { useCursor } from "../components/cursor-animation/CursorContext.jsx";

const Routers = () => {
  const location = useLocation();
  const { triggerCursorReset } = useCursor();

  const handleTransitionEnd = () => {
    triggerCursorReset();
  };

  return (
    <PageTransition onTransitionEnd={handleTransitionEnd} location={location}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/aboutmainmenu" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/work" element={<Work />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/chat" element={<Chatus />} />
        <Route path="/clientsupport" element={<ClientSupport />} />
        <Route path="/ourstory" element={<OurStory />} />
        <Route path="/ourculture" element={<OurCulture />} />
        <Route path="/career" element={<Career />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/aboutus" element={<OurAboutus />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/termsofservices" element={<TermsOFServices />} />
        <Route path="/privacypolice" element={<PrivacyPolice />} />
        <Route path="/ourindustries" element={<OurIndustries />} />
        <Route path="/ourservices" element={<OurServices />} />
        <Route path="/cookiespolicy" element={<CookiesPolicy />} />
        <Route path="/quicklinks" element={<QuickLinks />} />
        <Route path="/ourportfolio" element={<OurPortfolio />} />
        <Route path="/ourwork" element={<OurWork />} />
        <Route path="/ourproducts" element={<OurProducts />} />
        <Route path="/ourawards" element={<OurAwards />} />
        <Route path="/ourcourses" element={<OurCourses />} />
        <Route path="/uxreseaech" element={<UxReseaech />} />
        <Route path="/research" element={<Reseaech />} />
        <Route path="/strategy" element={<Strategy />} />
        <Route path="/uiuxdesign" element={<UiUxDesign />} />
        <Route path="/development" element={<Development />} />
        <Route path="/resourcesforyou" element={<ResourcesForYou />} />
      </Routes>
    </PageTransition>
  );
};

export default Routers;