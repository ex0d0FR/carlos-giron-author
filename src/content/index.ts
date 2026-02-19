import { SiteContent } from '../types';

export const siteContent: SiteContent = {
  hero: {
    title: "Paternidad",
    subtitle: "Un viaje de amor, aprendizaje y crecimiento",
    cta: "Descubre el libro"
  },
  book: {
    title: "Paternidad",
    subtitle: "Guía para el padre moderno",
    description: `
      Paternidad es más que un libro; es una guía reflexiva para aquellos 
      que buscan transformar su rol como padres. A través de páginas llenas 
      de experiencias, consejos y reflexiones profundas, Carlos Girón nos 
      invita a redescubrir el significado de ser padre en el mundo actual.
      
      Este libro aborda temas como la comunicación efectiva con los hijos, 
      el equilibrio entre trabajo y familia, la importancia de estar presente, 
      y cómo construir relaciones duraderas basadas en el amor y el respeto.
    `,
    amazonUrl: "#", // Placeholder - will be updated with actual Amazon link
    coverImage: "/images/book-cover.png"
  },
  author: {
    name: "Carlos Girón",
    bio: `
      Carlos Girón es un apasionado escritor, orador y, ante todo, padre. 
      Con más de una década de experiencia en el ámbito del desarrollo personal 
      y familiar, ha dedicado su vida a ayudar a otros a descubrir el verdadero 
      significado de la paternidad.
      
      Su enfoque único combina experiencias personales con investigaciones 
      psicológicas y sociales, creando un puente entre la teoría y la práctica. 
      Carlos cree que cada padre tiene el potencial de crear un impacto positivo 
      y duradero en la vida de sus hijos.
      
      Cuando no está escribiendo o dando conferencias, Carlos disfruta pasar 
      tiempo de calidad con su familia, explorando nuevos lugares y creando 
      recuerdos juntos.
    `,
    photo: "/images/author-photo.jpeg"
  },
  footer: {
    copyright: "© 2026 Carlos Girón. Todos los derechos reservados.",
    socialLinks: [
      {
        name: "Instagram",
        url: "#", // Placeholder
        icon: "instagram"
      },
      {
        name: "Twitter",
        url: "#", // Placeholder
        icon: "twitter"
      },
      {
        name: "Facebook",
        url: "#", // Placeholder
        icon: "facebook"
      },
      {
        name: "LinkedIn",
        url: "#", // Placeholder
        icon: "linkedin"
      }
    ]
  }
};
