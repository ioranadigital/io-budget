import React from "react";
import BreadCumb from "@/app/Components/Common/BreadCumb";
import HeroBannerPlanes from "@/app/Components/HeroBanner/HeroBannerPlanes";
import FeaturesSection from "@/app/Components/FeaturesSection/FeaturesSection";
import NuestroProcesoLocal from "@/app/Components/NuestroProcesoLocal/NuestroProcesoLocal";
import ContactIno3 from "@/app/Components/ContactInfo/ContactIno3";

const posicionamientoGoogleBenefits = [
  "Tráfico Orgánico Gratuito",
  "Posicionamiento en Primera Página",
  "Ventaja sobre Competencia",
];

const posicionamientoGoogleWhyImportant = [
  "El 39% del tráfico web proviene de búsqueda orgánica en Google — es el canal de adquisición más relevante después de redes sociales pagadas",
  "El 91.5% de clics en búsquedas van a resultados en la primera página — si no estás en la página 1, prácticamente no existes",
  "El 28% de búsquedas de productos terminan en compra dentro de 1 mes — posicionarse en SEO es inversión a largo plazo con ROI comprobado",
];

const PosicionamientoGooglePage = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/bg/comon-hero-bg.jpg"
        Title="Presencia Digital en Google"
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Servicios", href: "/servicios" },
          { label: "Presencia Digital en Google" },
        ]}
      ></BreadCumb>

      <div style={{ fontSize: "0.85em" }} className="ficha-hero">
        <HeroBannerPlanes
          subtitle="Servicios Digitales"
          title="Presencia Digital en <span style='color: #4D32A5;'>Google</span>"
          content="Posiciona tu negocio en Google y atrae clientes que te están buscando. Estrategias SEO probadas que generan resultados reales."
          img="/assets/img/hero/hero3-main-img.png"
          showImage={false}
          benefits={posicionamientoGoogleBenefits}
          whyImportant={posicionamientoGoogleWhyImportant}
        ></HeroBannerPlanes>
      </div>

      <FeaturesSection
        title="¿Es importante tener"
        titleHighlight="visibilidad en Google?"
        description="Si tu negocio no aparece en los primeros resultados de Google, tus competidores te están llevando los clientes. Nosotros te posicionamos donde te merecen encontrar."
      ></FeaturesSection>

      <NuestroProcesoLocal
        title="Como trabajamos para lograr que tu negocio tenga"
        titleHighlight="visibilidad en google"
        description="Estrategia comprobada en más de 80 empresas. Posicionamiento real, resultados reales."
      ></NuestroProcesoLocal>

      <ContactIno3></ContactIno3>
    </div>
  );
};

export default PosicionamientoGooglePage;
