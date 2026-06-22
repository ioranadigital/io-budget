export const dynamic = "force-dynamic";
import InformeGratisForm from "@/app/Components/InformeGratisForm";

const styles = {
  main: {
    minHeight: "calc(100vh - 400px)",
    backgroundColor: "#F5F5FD",
    position: "relative" as const,
    overflow: "hidden" as const,
    paddingTop: "160px",
    paddingBottom: "80px",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 24px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
    gap: "80px",
    alignItems: "start",
  },
  leftBlock: { position: "sticky" as const, top: "96px" },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px 12px",
    borderRadius: "9999px",
    backgroundColor: "rgba(77, 50, 165, 0.1)",
    border: "1px solid rgba(77, 50, 165, 0.2)",
    color: "#4D32A5",
    fontSize: "10px",
    fontWeight: "bold",
    textTransform: "uppercase" as const,
    letterSpacing: "0.05em",
    marginBottom: "32px",
  },
  h1: {
    fontSize: "56px",
    fontWeight: "900",
    color: "#1a1a1a",
    lineHeight: "1.1",
    letterSpacing: "-0.02em",
    marginBottom: "32px",
  },
  h1Span: { color: "#4D32A5" },
  p: {
    fontSize: "18px",
    color: "#666",
    lineHeight: "1.6",
    marginBottom: "48px",
    maxWidth: "540px",
  },
  h3: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: "32px",
  },
  ul: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column" as const,
    gap: "20px",
  },
  li: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    color: "#333",
    fontSize: "18px",
  },
  icon: { width: "20px", height: "20px", color: "#4D32A5", flexShrink: 0 },
  footer: {
    marginTop: "64px",
    paddingTop: "32px",
    borderTop: "1px solid rgba(77, 50, 165, 0.1)",
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "32px 32px",
  },
  footerItem: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "10px",
    fontWeight: "bold",
    color: "#999",
    textTransform: "uppercase" as const,
    letterSpacing: "0.05em",
  },
};

export default function InformeGratisPage() {
  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <div style={styles.leftBlock}>
          <div style={styles.badge}>INFORME GRATUITO</div>
          <h1 style={styles.h1}>
            ¿Cómo está <br />
            <span style={styles.h1Span}>optimizada tu web?</span>
          </h1>
          <p style={styles.p}>
            Descubre el verdadero rendimiento de tu sitio web. Analizamos tu
            velocidad, SEO técnico, experiencia móvil y oportunidades de
            conversión — completamente gratis y sin compromiso.
          </p>
          <div>
            <h3 style={styles.h3}>
              ¿Qué incluye el <span style={styles.h1Span}>informe</span>?
            </h3>
            <ul style={styles.ul}>
              {[
                "Análisis de velocidad de carga y rendimiento",
                "Detección de errores técnicos SEO críticos",
                "Evaluación de experiencia móvil y usabilidad",
                "Oportunidades de mejora y quick wins",
                "Análisis básico de competencia digital",
              ].map((item, i) => (
                <li key={i} style={styles.li}>
                  <svg
                    style={styles.icon}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div style={styles.footer}>
            {["SIN COMPROMISO", "RESPUESTA EN 24-48H", "100% GRATUITO"].map(
              (text, i) => (
                <div key={i} style={styles.footerItem}>
                  <svg
                    style={{ width: "16px", height: "16px", color: "#ccc" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {text}
                </div>
              ),
            )}
          </div>
        </div>
        <InformeGratisForm />
      </div>
    </main>
  );
}
