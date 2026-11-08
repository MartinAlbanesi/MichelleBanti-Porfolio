// Todo el texto visible del sitio vive acá.

export const meta = {
  title: 'Michelle Banti | Productora audiovisual',
  description:
    'Michelle Banti: productora audiovisual para canales de streaming, periodista digital y creadora de contenido.',
};

export const nav = [
  { href: '#quien-soy', label: 'Quién soy' },
  { href: '#ahora', label: 'Dónde estoy' },
  { href: '#recorrido', label: 'Mi recorrido' },
  { href: '#hacia-donde-voy', label: 'Hacia dónde voy' },
];

export const hero = {
  name: 'Michelle Banti',
  greeting: 'Hola, soy',
  cta: 'Escribime',
  cv: 'Ver CV',
  roles: ['Productora audiovisual', 'Periodista digital'],
  tagline:
    'Soy una pensadora multitasking, me encanta ordenar ideas hasta que se vuelven proyectos, produzco, aprendo y organizo para que se vuelvan realizables.',
  photoAlt: 'Michelle sacándose una selfie con palo de selfie, sonriendo, sobre un fondo beige.',
  badge: 'PERIODISMO DIGITAL  ·  PRODUCCIÓN AUDIOVISUAL  ·  ',
};

export const about = {
  who: {
    title: 'Quién soy',
    paragraphs: [
      'Tengo 26 años, vivo en CABA y soy estudiante avanzada en Eter, este año me recibo {grad}. LUZU fue mi inspiración: verlos despertó mi interés por la comunicación digital.',
      'Probé ser community manager en 2022 y entendí que lo mío no era administrar redes de otros y busqué mi rumbo.',
      'Soy perseverante, curiosa, organizada y sociable. Me gusta motivar y sumar gente a las ideas, y disfruto compartir todo lo que aprendo para ayudar a quien sea.',
    ],
    // Una por foto de la pila (mismo orden que en About.astro)
    photoAlts: [
      'Selfie de Michelle sonriendo frente a una pared de madera con un cartel luminoso.',
      'Michelle sonriendo con el celular en la mano, en un festival al aire libre.',
      'Selfie de Michelle sonriendo, con anteojos rojos, frente a un cartel naranja.',
      'Michelle con un trofeo y un diploma de "Mejor musicalización" de Alfa Producciones.',
      'Michelle posando con ropa naranja frente a un mural de graffiti colorido.',
    ],
  },
};

export const goal = {
  title: 'Hacia dónde voy',
  text: 'No tengo todas las respuestas sobre lo que se viene, pero sí muchas ganas de seguir aprendiendo y descubriendo nuevas oportunidades.',
  // Cada paso: imagen a la izquierda, título + descripción al centro, estado (y fecha opcional) a la derecha.
  items: [
    {
      title: 'Curso de dirección y técnica',
      text: 'Dictado por el Pulpo Díaz en la Academia de Resumido.',
      badge: 'En curso',
    },
    {
      title: 'Seminario de producción de stream y podcast',
      text: 'Seminario intensivo presencial, el 14 de noviembre.',
      date: { day: '14', month: 'Nov' },
    },
  ] as { title: string; text: string; badge?: string; date?: { day: string; month: string } }[],
};

export type Project = {
  id: string;
  title: string;
  tag?: string; // período junto a la línea de marca (opcional)
  paragraphs: string[];
  // Enlace del proyecto (red social): si existe, se muestra "Ver proyecto" con el ícono de Instagram.
  url?: string;
};

export const now = {
  title: 'Dónde estoy',
  visit: 'Ver proyecto',
  projects: [
    {
      id: 'banca',
      title: 'BANCA PRODUCCIONES',
      url: 'https://www.instagram.com/bancaproducciones/',
      paragraphs: [
        'Actualmente trabajo en BANCA Producciones, la productora de eventos que armé junto a mi socio.',
        'Me ocupo de pensar las fiestas, armar la convocatoria de artistas, equipo técnico, del contacto con los espacios y de la comunicación en redes.',
      ],
    },
    {
      id: 'teatro',
      title: 'LAS MARIPOSAS DE LA OSCURIDAD',
      url: 'https://www.instagram.com/lasmariposasdelaoscuridad/',
      paragraphs: [
        'Soy directora de producción de la obra de teatro el último sueño de la confederación',
        'Me encargo de organizar las funciones, definir la estrategia de entradas, pagos, casting de artistas y la coordinación del equipo.',
      ],
    },
  ] satisfies Project[],
};

export const journey = {
  title: 'Mi recorrido',
  projects: [
    {
      id: 'mercadolibre',
      title: 'MercadoLibre',
      tag: '2022 – 2026',
      paragraphs: [
        'Fui Ecommerce Manager en MercadoLibre entre 2022 y 2026, trabajando en tareas de gestión y ejecución dentro de la plataforma. En esos años trabajé en ecommerce y marketing para marcas de indumentaria, calzado y tecnología y aprendí a mirar el contenido desde el lado del público: qué hace que alguien se detenga, confíe y decida.',
      ],
    },
    {
      id: 'eter',
      title: 'Escuela de Comunicación Eter',
      paragraphs: [
        'En 2024 me animé a formarme mientras trabajaba: inicié la carrera de Periodismo y Producción de Contenidos y este año realicé el curso de Producción Audiovisual, ambos en Eter. Ahí descubrí que lo mío era producir.',
      ],
    },
  ] satisfies Project[],
};

export type EterItem = {
  title: string;
  youtubeId: string; // el código de la URL: youtube.com/watch?v=CODIGO
};

export const eterShowcase = {
  label: 'Selección del curso',
  prev: 'Anterior',
  next: 'Siguiente',
  goTo: 'Ir al trabajo',
  play: 'Reproducir video',
  // Para sumar un trabajo: agregar un objeto más a este array.
  items: [
    { youtubeId: 'Xv_QW7v9TwI', title: 'Curso de producción audiovisual' },
    { youtubeId: 'HcIQfnndJu4', title: 'Encuentro federal - Taller de Streaming' },
    { youtubeId: 'XeEtgeaUjtg', title: 'Cobertura Digital Premios Emmy - Adolescencia' },
  ] satisfies EterItem[],
  cta: 'Ver todo mi trabajo en ETER',
};

export const contact = {
  title: '¿Hablamos?',
  emailLabel: 'Escribime por email',
  whatsappLabel: 'Escribime por WhatsApp',
};

export const footer = {
  text: 'Michelle Banti · Hecho con cariño',
};
