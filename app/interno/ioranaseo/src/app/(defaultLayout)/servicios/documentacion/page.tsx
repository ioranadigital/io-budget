import React from "react";
import BreadCumb from "../../../Components/Common/BreadCumb";
import HeroBannerPlanes from "../../../Components/HeroBanner/HeroBannerPlanes";
import FeaturesSection from "../../../Components/FeaturesSection/FeaturesSection";
import NuestroProcesoLocal from "../../../Components/NuestroProcesoLocal/NuestroProcesoLocal";
import ContactIno3 from "../../../Components/ContactInfo/ContactIno3";

const DocumentacionPage = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/bg/comon-hero-bg.jpg"
        Title="Documentación"
      ></BreadCumb>

      <div style={{ fontSize: "0.85em" }} className="ficha-hero">
        <HeroBannerPlanes
          subtitle="Nuestros Servicios"
          title="Documentación <span style='color: #4D32A5;'>Controlada</span>"
          content="Gestiona tu documentación de forma eficiente, segura y cumpliendo con todas las regulaciones normativas."
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

export default DocumentacionPage;
