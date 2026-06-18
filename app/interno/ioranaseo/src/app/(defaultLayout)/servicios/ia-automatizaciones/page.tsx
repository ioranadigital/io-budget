import React from "react";
import BreadCumb from "@/app/Components/Common/BreadCumb";
import HeroBannerPlanes from "@/app/Components/HeroBanner/HeroBannerPlanes";
import FeaturesSection from "@/app/Components/FeaturesSection/FeaturesSection";
import NuestroProcesoLocal from "@/app/Components/NuestroProcesoLocal/NuestroProcesoLocal";
import ContactIno3 from "@/app/Components/ContactInfo/ContactIno3";
import { Search, Settings, FileText, Star, BarChart3 } from "lucide-react";

const iaAutomatizacionesSteps = [
  {
    num: "01",
    title: "Auditoría de Procesos",
    body: "Mapeamos tus procesos actuales para identificar las tareas repetitivas y de bajo valor que pueden ser automatizadas.",
    detail: "Process mapping · Análisis de tiempo · ROI",
    duration: "Semana 1",
    color: "#ff8c00",
    icon: <Search size={32} />,
  },
  {
    num: "02",
    title: "Selección de Soluciones IA",
    body: "Elegimos las herramientas de IA más adecuadas para tu negocio: chatbots, procesamiento de datos, predicción de demanda.",
    detail: "Herramientas · Integración · Capacitación",
    duration: "Semana 2",
    color: "#818cf8",
    icon: <Settings size={32} />,
  },
  {
    num: "03",
    title: "Implementación y Integración",
    body: "Integramos las soluciones IA en tus sistemas existentes sin interrupciones y con capacitación para tu equipo.",
    detail: "Setup · Testing · Integración API",
    duration: "Semana 3-4",
    color: "#34d399",
    icon: <FileText size={32} />,
  },
  {
    num: "04",
    title: "Optimización y Mejora",
    body: "Monitoreamos el desempeño, ajustamos parámetros y mejoramos continuamente la precisión de tus soluciones IA.",
    detail: "Testing · Ajustes · Optimización",
    duration: "Mensual",
    color: "#fbbf24",
    icon: <Star size={32} />,
  },
  {
    num: "05",
    title: "Soporte y Escalado",
    body: "Proveemos soporte técnico continuo y escalamos la automatización a nuevos procesos según tus necesidades.",
    detail: "Soporte 24/7 · Escalado · Mantenimiento",
    duration: "Indefinido",
    color: "#f472b6",
    icon: <BarChart3 size={32} />,
  },
];

const IAAutomatizacionesPage = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/bg/comon-hero-bg.jpg"
        Title="IA y Automatizaciones"
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Servicios", href: "/servicios" },
          { label: "IA y Automatizaciones" },
        ]}
      ></BreadCumb>

      <div style={{ fontSize: "0.85em" }} className="ficha-hero">
        <HeroBannerPlanes
          subtitle="Servicios Digitales"
          title="Implementamos <span style='color: #4D32A5;'>IA y Automatizaciones</span>"
          content="Automatiza tus procesos con inteligencia artificial. Reduce tiempos, aumenta eficiencia y ahorra costos operacionales."
          img="/assets/img/hero/hero3-main-img.png"
          showImage={false}
        ></HeroBannerPlanes>
      </div>

      <FeaturesSection
        title="¿Cuáles son las ventajas de implementar"
        titleHighlight="IA y Automatizaciones?"
        description="La IA multiplica tu productividad sin aumentar costos. Automatiza tareas repetitivas, reduce errores humanos, mejora la experiencia del cliente y libera a tu equipo para trabajo estratégico de alto valor."
      ></FeaturesSection>

      <NuestroProcesoLocal
        title="¿Cómo Implementaremos"
        titleHighlight="IA y Automatizaciones?"
        description="Proceso probado en más de 80 proyectos. Soluciones inteligentes que transforman tu operación."
        steps={iaAutomatizacionesSteps}
      ></NuestroProcesoLocal>

      <ContactIno3></ContactIno3>
    </div>
  );
};

export default IAAutomatizacionesPage;
