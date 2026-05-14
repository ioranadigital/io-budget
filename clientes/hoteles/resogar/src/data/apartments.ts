export interface Apartment {
  id: number;
  slug: string;
  name: string;
  zone: string;
  zoneDisplay: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  image: string;
  images: string[];
  description: string;
  fullDescription: string;
  amenities: string[];
  highlights: string[];
  rules: string[];
  reviews_list: {
    author: string;
    rating: number;
    date: string;
    text: string;
  }[];
}

export const apartments: Apartment[] = [
  {
    id: 1,
    slug: 'pradillo-premium-ii',
    name: 'Pradillo Premium II',
    zone: 'chamartin',
    zoneDisplay: 'Chamartín',
    location: 'Chamartín, Madrid, España',
    price: 280,
    rating: 4.9,
    reviews: 127,
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    image: 'https://via.placeholder.com/1200x700?text=Pradillo+Premium+II',
    images: [
      'https://via.placeholder.com/1200x700?text=Pradillo+1',
      'https://via.placeholder.com/1200x700?text=Pradillo+2',
      'https://via.placeholder.com/1200x700?text=Pradillo+3',
      'https://via.placeholder.com/1200x700?text=Pradillo+4',
      'https://via.placeholder.com/1200x700?text=Pradillo+5',
    ],
    description: 'Elegante suite boutique con vistas panorámicas a la ciudad. Ubicada en el corazón de Chamartín.',
    fullDescription: `Bienvenido a Pradillo Premium II, una joya de lujo en el corazón de Madrid. Esta elegante suite boutique combina el diseño contemporáneo con las comodidades de cinco estrellas.

Ubicada en Chamartín, una de las zonas más prestigiosas de la capital, nuestra residencia ofrece vistas panorámicas espectaculares de la ciudad. Cada detalle ha sido cuidadosamente seleccionado para garantizar su máximo confort durante su estancia.

La suite cuenta con dos suites amplias y luminosas, ideales para parejas o pequeños grupos. Los baños de mármol italiano y las amenidades de lujo hacen que cada momento sea especial. La terraza privada es perfecta para disfrutar de los atardeceres madrileños.

Nuestro equipo de concierge está disponible 24/7 para ayudarle con cualquier necesidad.`,
    amenities: [
      'WiFi Premium de Alta Velocidad',
      'Aire Acondicionado Inteligente',
      'Terraza Privada con Vistas',
      'Minibar de Lujo',
      'Smart TV 55"',
      'Jacuzzi Privado',
      'Caja de Seguridad Digital',
      'Servicio de Limpieza Diaria',
      'Productos de Baño Premium',
      'Secador de Pelo Profesional',
      'Cafetera Espresso',
      'Servicio de Despertar'
    ],
    highlights: [
      'Vistas panorámicas de Madrid',
      'Diseño moderno y elegante',
      'Ubicación en zona premium',
      'Servicios personalizados'
    ],
    rules: [
      'Check-in: 15:00 | Check-out: 11:00',
      'No se permiten mascotas',
      'No se permite fumar en el interior',
      'Máximo de huéspedes: 4',
      'Cancelación gratuita hasta 7 días antes'
    ],
    reviews_list: [
      {
        author: 'María González',
        rating: 5,
        date: 'Hace 2 semanas',
        text: 'Lugar increíble, superó todas nuestras expectativas. El servicio es impecable y las vistas son espectaculares.'
      },
      {
        author: 'Carlos Rodríguez',
        rating: 5,
        date: 'Hace 1 mes',
        text: 'Una experiencia de lujo absoluto. Volveré sin dudarlo. El equipo es muy atento a los detalles.'
      },
      {
        author: 'Elena Martínez',
        rating: 4,
        date: 'Hace 2 meses',
        text: 'Excelente ubicación y muy cómodo. La terraza es perfecta para relajarse.'
      }
    ]
  },
  {
    id: 2,
    slug: 'recoletos-elegance',
    name: 'Recoletos Elegance',
    zone: 'salamanca',
    zoneDisplay: 'Salamanca',
    location: 'Salamanca, Madrid, España',
    price: 320,
    rating: 4.95,
    reviews: 156,
    guests: 6,
    bedrooms: 3,
    bathrooms: 3,
    image: 'https://via.placeholder.com/1200x700?text=Recoletos+Elegance',
    images: [
      'https://via.placeholder.com/1200x700?text=Recoletos+1',
      'https://via.placeholder.com/1200x700?text=Recoletos+2',
      'https://via.placeholder.com/1200x700?text=Recoletos+3',
      'https://via.placeholder.com/1200x700?text=Recoletos+4',
      'https://via.placeholder.com/1200x700?text=Recoletos+5',
    ],
    description: 'Residencia de lujo en la zona más exclusiva de Madrid. Ideal para familias grandes.',
    fullDescription: `Recoletos Elegance es el destino perfecto para familias grandes y grupos que buscan lujo en Madrid.

Ubicada en Salamanca, una de las zonas más exclusivas, esta residencia ofrece tres suites independientes perfectas para separación de espacios.

Disfrute de nuestro spa privado, equipo de cine en casa, y los servicios de un chef personal disponible para preparar sus comidas. El equipo concierge está disponible 24/7.

Cada detalle ha sido diseñado para proporcionar una experiencia de lujo incomparable.`,
    amenities: [
      'Spa Privado Completo',
      'Chef Disponible',
      'Cine en Casa',
      'Seguridad 24/7',
      'Limousine Incluida',
      'Servicio Concierge Premium',
      'Sauna Privada',
      'Biblioteca Digital',
      'Gimnasio Privado',
      'Calefacción Radiante',
      'Piscina Climatizada',
      'Servicio de Mayordomo'
    ],
    highlights: [
      'Zona más privilegiada de Madrid',
      'Máximo confort y lujo',
      'Servicios VIP incluidos',
      'Perfecta para grupos grandes'
    ],
    rules: [
      'Check-in: 14:00 | Check-out: 12:00',
      'Mascotas permitidas con restricciones',
      'Depósito reembolsable: €500',
      'Máximo de huéspedes: 6',
      'Cancelación gratuita hasta 14 días antes'
    ],
    reviews_list: [
      {
        author: 'David López',
        rating: 5,
        date: 'Hace 3 semanas',
        text: 'Perfecto para nuestra reunión familiar. Espacios amplios, muy cómodo y con todos los servicios que necesitábamos.'
      },
      {
        author: 'Sophie Leclerc',
        rating: 5,
        date: 'Hace 1 mes',
        text: 'Una joya en Madrid. El spa y el chef son servicios excepcionales.'
      },
      {
        author: 'Marco Rossi',
        rating: 5,
        date: 'Hace 2 meses',
        text: 'Increíble. Todos los detalles están cuidados. Recomendado para eventos corporativos.'
      }
    ]
  },
  {
    id: 3,
    slug: 'vista-real-penthouse',
    name: 'Vista Real Penthouse',
    zone: 'centro-historico',
    zoneDisplay: 'Centro Histórico',
    location: 'Centro Histórico, Madrid, España',
    price: 420,
    rating: 5.0,
    reviews: 89,
    guests: 8,
    bedrooms: 4,
    bathrooms: 4,
    image: 'https://via.placeholder.com/1200x700?text=Vista+Real+Penthouse',
    images: [
      'https://via.placeholder.com/1200x700?text=Penthouse+1',
      'https://via.placeholder.com/1200x700?text=Penthouse+2',
      'https://via.placeholder.com/1200x700?text=Penthouse+3',
      'https://via.placeholder.com/1200x700?text=Penthouse+4',
      'https://via.placeholder.com/1200x700?text=Penthouse+5',
    ],
    description: 'Penthouse espectacular con vistas de 360° de Madrid. Centro Histórico.',
    fullDescription: `Vista Real Penthouse es la máxima expresión del lujo en Madrid. Este penthouse exclusivo ofrece vistas de 360° desde sus amplias terrazas, permitiéndole contemplar los monumentos más emblemáticos.

Ubicado en el Centro Histórico, tiene acceso inmediato a Plaza Mayor, Palacio Real y otros sitios de interés. Pero una vez dentro, se transportará a un mundo de lujo absoluto.

Con 4 suites independientes y servicios VIP, aloja cómodamente hasta 8 personas. La piscina privada, el bar equipado, y acceso VIP a eventos exclusivos.

Cuente con personal de servicio dedicado, seguridad biométrica, y un ascensor privado.`,
    amenities: [
      'Piscina Privada en Terraza',
      'Terraza 360° con Vistas Panorámicas',
      'Ascensor Privado',
      'Gimnasio Completo',
      'Bar Privado Totalmente Equipado',
      'Acceso a Helipuerto',
      'Sistema de Seguridad Biométrica',
      'Personal de Servicio Dedicado',
      'Sala de Cine Premium',
      'Wine Cellar',
      'Servicio de Chef 24/7',
      'Sistema de Automatización del Hogar'
    ],
    highlights: [
      'Vistas de 360° incomparables',
      'Lujos extremos y exclusivos',
      'Centro histórico de Madrid',
      'Experiencia VIP única'
    ],
    rules: [
      'Check-in: 13:00 | Check-out: 13:00',
      'Mascotas permitidas',
      'Depósito reembolsable: €1,000',
      'Máximo de huéspedes: 8',
      'Cancelación gratuita hasta 21 días antes'
    ],
    reviews_list: [
      {
        author: 'Alexandra Petrov',
        rating: 5,
        date: 'Hace 1 semana',
        text: 'El penthouse de nuestros sueños. Las vistas son simplemente espectaculares y el servicio impecable.'
      },
      {
        author: 'James Mitchell',
        rating: 5,
        date: 'Hace 3 semanas',
        text: 'Una experiencia única. Perfecto para una ocasión especial. Todo es de lujo absoluto.'
      },
      {
        author: 'Isabella Rossi',
        rating: 5,
        date: 'Hace 1 mes',
        text: 'Increíble. Las vistas, los servicios, todo. Probablemente el mejor lugar para alojarse en Madrid.'
      }
    ]
  }
];

export function getApartmentBySlug(zone: string, slug: string): Apartment | undefined {
  return apartments.find(apt => apt.zone === zone && apt.slug === slug);
}

export function getApartmentsByZone(zone: string): Apartment[] {
  return apartments.filter(apt => apt.zone === zone);
}
