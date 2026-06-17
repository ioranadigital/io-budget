import React from "react";
import BreadCumb from "../../../Components/Common/BreadCumb";
import HeroBannerPlanes from "../../../Components/HeroBanner/HeroBannerPlanes";
import FeaturesSection from "../../../Components/FeaturesSection/FeaturesSection";
import NuestroProcesoLocal from "../../../Components/NuestroProcesoLocal/NuestroProcesoLocal";
import ContactIno3 from "../../../Components/ContactInfo/ContactIno3";

const FacebookAdsPage = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/bg/comon-hero-bg.jpg"
        Title="Facebook Ads"
      ></BreadCumb>

      <div style={{ fontSize: "0.85em" }} className="ficha-hero">
        <HeroBannerPlanes
          subtitle="Nuestros Servicios"
          title="Campañas de <span style='color: #4D32A5;'>Facebook Ads</span>"
          content="Llega a tu audiencia exacta con campañas en Facebook e Instagram altamente segmentadas y efectivas."
          img="/assets/img/hero/hero3-main-img.png"
          showImage={false}
        ></HeroBannerPlanes>
      </div>

      <FeaturesSection></FeaturesSection>

      <NuestroProcesoLocal></NuestroProcesoLocal>

      <ContactIno3></ContactIno3>
    </div>
  );
};

export default FacebookAdsPage;
