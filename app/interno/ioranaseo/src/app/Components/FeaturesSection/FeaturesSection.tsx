"use client";
import { CheckCircle, Zap, Award } from "lucide-react";
import { FC } from "react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeaturesSection: FC = () => {
  const features: Feature[] = [
    {
      icon: <CheckCircle size={32} />,
      title: "Estrategia Personalizada",
      description:
        "Diseñamos una estrategia SEO Local única para tu negocio, basada en tu sector, competencia y objetivos específicos.",
    },
    {
      icon: <Zap size={32} />,
      title: "Resultados Rápidos",
      description:
        "Implementamos técnicas probadas que generan visibilidad en Google Local dentro de las primeras semanas de trabajo.",
    },
    {
      icon: <Award size={32} />,
      title: "Garantía de Posicionamiento",
      description:
        "Te posicionamos en el Local Pack de Google o ajustamos nuestra estrategia sin costo adicional hasta lograrlo.",
    },
  ];

  return (
    <section
      style={{
        padding: "80px 20px",
        backgroundColor: "#ffffff",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "60px" }}>
          <h2
            style={{
              fontSize: "42px",
              fontWeight: "700",
              color: "#1a1a1a",
              marginBottom: "16px",
              lineHeight: "1.3",
              margin: "0 0 16px 0",
            }}
          >
            ¿Por qué elegir{" "}
            <span style={{ color: "#4D32A5" }}>Iorana SEO?</span>
          </h2>
          <div
            style={{
              height: "4px",
              width: "120px",
              backgroundColor: "#4D32A5",
              borderRadius: "2px",
              marginBottom: "24px",
            }}
          ></div>
          <p
            style={{
              maxWidth: "600px",
              color: "#666",
              fontSize: "16px",
              lineHeight: "1.6",
              margin: "0",
            }}
          >
            Somos especialistas en posicionar negocios locales en Google. Con
            más de 80 proyectos exitosos, sabemos exactamente qué funciona.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "40px",
          }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                gap: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "64px",
                  height: "64px",
                  minWidth: "64px",
                  borderRadius: "12px",
                  backgroundColor: "#EDE9FE",
                  color: "#4D32A5",
                  flexShrink: 0,
                }}
              >
                {feature.icon}
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#1a1a1a",
                    marginBottom: "8px",
                    margin: "0 0 8px 0",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    color: "#666",
                    fontSize: "15px",
                    lineHeight: "1.6",
                    margin: "0",
                  }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
