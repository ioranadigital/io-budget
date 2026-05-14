export default function Features() {
  const features = [
    {
      title: 'Suites Boutique',
      description: 'Diseño contemporáneo con acabados de lujo',
      icon: '✨',
    },
    {
      title: 'Spa Premium',
      description: 'Tratamientos wellness de clase mundial',
      icon: '🧖',
    },
    {
      title: 'Restaurante Gourmet',
      description: 'Cocina de autor con estrella Michelin',
      icon: '👨‍🍳',
    },
    {
      title: 'Piscina Infinita',
      description: 'Vistas panorámicas de la ciudad',
      icon: '🏊',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-fluid">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4">
            Nuestros <span className="font-semibold">Servicios</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 font-light">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
