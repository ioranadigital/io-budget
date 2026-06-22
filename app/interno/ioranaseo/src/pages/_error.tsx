import type { NextPageContext } from "next";

interface ErrorProps {
  statusCode?: number;
}

function Error({ statusCode }: ErrorProps) {
  return (
    <div style={{ textAlign: "center", padding: "80px 20px" }}>
      <h1>{statusCode || "Error"}</h1>
      <p>
        {statusCode === 404 ? "Página no encontrada" : "Error del servidor"}
      </p>
      <a href="/">Volver al inicio</a>
    </div>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
