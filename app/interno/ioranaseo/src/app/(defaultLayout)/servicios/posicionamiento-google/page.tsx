import React from "react";
import BreadCumb from "@/app/Components/Common/BreadCumb";
import HeroBannerPlanes from "@/app/Components/HeroBanner/HeroBannerPlanes";
import PymesProcess from "@/app/Components/PymesProcess";
import ContactIno3 from "@/app/Components/ContactInfo/ContactIno3";

const PosicionamientoGooglePage = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/bg/comon-hero-bg.jpg"
        Title="Presencia Digital en Google"
      ></BreadCumb>

      <div style={{ fontSize: "0.85em" }} className="ficha-hero">
        <HeroBannerPlanes
          subtitle="Servicios Digitales"
          title="Presencia Digital en Google"
          content="Posiciona tu negocio en Google y atrae clientes que te están buscando. Estrategias SEO probadas que generan resultados reales."
          img="/assets/img/hero/hero3-main-img.png"
        ></HeroBannerPlanes>
      </div>

      <PymesProcess></PymesProcess>

      <ContactIno3></ContactIno3>
    </div>
  );
};

export default PosicionamientoGooglePage;
