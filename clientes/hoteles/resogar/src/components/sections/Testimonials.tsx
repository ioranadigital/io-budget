'use client';

import { useState } from 'react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'María González Ruiz',
      location: 'Madrid, España',
      text: 'Una experiencia inolvidable. Cada detalle está cuidado al máximo. El servicio es excepcional y los panoramas son espectaculares.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Carlos Montero',
      location: 'Barcelona, España',
      text: 'El mejor spa que he visitado en mi vida. Volvería solo por eso, pero todo es perfecto. La comida del restaurante es exquisita.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Elena & José',
      location: 'París, Francia',
      text: 'Luna de miel perfecta. Las vistas, el servicio, la comida... todo fue mágico. Volveremos pronto con la familia.',
      rating: 5,
    },
    {
      id: 4,
      name: 'David López García',
      location: 'Valencia, España',
      text: 'Lugar ideal para desconectar. Tranquilo, elegante y con todas las comodidades. Personal muy atento.',
      rating: 5,
    },
    {
      id: 5,
      name: 'Sophie Leclerc',
      location: 'Lyon, Francia',
      text: 'Increíble experiencia. El resort tiene todo lo que buscaba. Definitivamente recomendado para parejas.',
      rating: 5,
    },
    {
      id: 6,
      name: 'Marco Rossi',
      location: 'Milano, Italia',
      text: 'Excelente para retiros ejecutivos. Las instalaciones son de clase mundial y el servicio impecable.',
      rating: 5,
    },
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section id="experiencias" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-fluid">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4">
            Lo que dicen nuestros <span className="font-semibold">huéspedes</span>
          </h2>
          <p className="text-lg text-gray-600 font-light">
            Experiencias reales de viajeros que han vivido la magia de Resogar
          </p>
        </div>

        {/* Carrusel */}
        <div className="relative max-w-7xl mx-auto">
          {/* Testimonios visibles */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {visibleTestimonials.map((testimonial, idx) => (
              <div
                key={testimonial.id}
                className="relative p-8 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 animate-fade-in"
              >
                {/* Comillas decorativas */}
                <div className="absolute top-4 right-6 text-5xl text-gray-200 font-serif">"</div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating).fill(0).map((_, i) => (
                    <span key={i} className="text-amber-400">★</span>
                  ))}
                </div>

                {/* Texto */}
                <p className="text-gray-700 mb-6 leading-relaxed font-light min-h-[100px]">
                  {testimonial.text}
                </p>

                {/* Autor */}
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>

                {/* Badge verificado */}
                <div className="absolute top-6 left-6">
                  <span className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                    ✓ Verificado
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Controles del carrusel */}
          <div className="flex justify-center items-center gap-4 mb-12">
            {/* Botón anterior */}
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border-2 border-gray-300 hover:border-blue-600 hover:bg-blue-50 flex items-center justify-center transition-all"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLineCap="round" strokeLineJoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Indicadores */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    idx === currentIndex
                      ? 'bg-blue-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Botón siguiente */}
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border-2 border-gray-300 hover:border-blue-600 hover:bg-blue-50 flex items-center justify-center transition-all"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLineCap="round" strokeLineJoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Stats */}
          <div className="pt-8 border-t border-gray-200 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">4.9★</div>
            <p className="text-gray-600">Calificación promedio basada en 500+ reseñas</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </section>
  );
}
