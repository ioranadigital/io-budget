import React from "react";
import BreadCumb from "../../../Components/Common/BreadCumb";
import HeroBannerPlanes from "../../../Components/HeroBanner/HeroBannerPlanes";
import FeaturesSection from "../../../Components/FeaturesSection/FeaturesSection";
import NuestroProcesoLocal from "../../../Components/NuestroProcesoLocal/NuestroProcesoLocal";
import ContactIno3 from "../../../Components/ContactInfo/ContactIno3";

const ReservasOnlinePage = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/bg/comon-hero-bg.jpg"
        Title="Reservas Online"
      ></BreadCumb>

      <div style={{ fontSize: "0.85em" }} className="ficha-hero">
        <HeroBannerPlanes
          subtitle="Nuestros Servicios"
          title="Reservas <span style='color: #4D32A5;'>Online</span>"
          content="Sistema de reservas integrado que facilita a tus clientes agendar tus servicios de forma rápida y sencilla."
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

export default ReservasOnlinePage;
