import React from "react";
import BreadCumb from "@/app/Components/Common/BreadCumb";
import HeroBannerPlanes from "@/app/Components/HeroBanner/HeroBannerPlanes";
import FeaturesSection from "@/app/Components/FeaturesSection/FeaturesSection";
import NuestroProcesoLocal from "@/app/Components/NuestroProcesoLocal/NuestroProcesoLocal";
import ContactIno3 from "@/app/Components/ContactInfo/ContactIno3";

const SeoLocalPruebaPage = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/bg/comon-hero-bg.jpg"
        Title="Servicio SEO Local"
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Servicios", href: "/servicios" },
          { label: "Servicio SEO Local" },
        ]}
      ></BreadCumb>

      <div style={{ fontSize: "0.85em" }} className="ficha-hero">
        <HeroBannerPlanes
          subtitle="Planes y Precios"
          title="Servicio <span style='color: #4D32A5;'>SEO Local</span>"
          content="Nuestros planes están diseñados para adaptarse a las necesidades de tu empresa, desde startups hasta grandes corporaciones."
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

export default SeoLocalPruebaPage;
