export default function CTA() {
  return (
    <section className="section-padding bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="container-fluid">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            ¿Listo para tu próxima <span className="font-semibold">experiencia?</span>
          </h2>
          <p className="text-lg text-blue-100 mb-8 font-light">
            Reserva tu suite hoy y disfruta de 15% de descuento en tu primer viaje
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all">
              Reservar Ahora
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all">
              Contactar Concierge
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
