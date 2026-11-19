// Todo el texto visible del sitio vive acá.

export const meta = {
  title: 'Michelle Banti | Productora audiovisual',
  description:
    'Michelle Banti: productora audiovisual para canales de streaming, periodista digital y creadora de contenido.',
};

export const hero = {
  name: 'Michelle Banti',
  greeting: 'Hola, soy',
  cta: 'Escribime',
  cv: 'Ver CV',
  roles: ['Periodista y productora'],
  tagline:
    'Soy una pensadora multitasking, me encanta ordenar ideas hasta que se vuelven proyectos, produzco, aprendo y organizo para que se vuelvan realizables.',
  badge: 'PERIODISMO DIGITAL  ·  PRODUCCIÓN AUDIOVISUAL  ·  ',
  photoAlt: 'Michelle sacándose una selfie con palo de selfie, sonriendo, sobre un fondo beige.',
};

export const about = {
  who: {
    title: 'Quién soy',
    paragraphs: [
      '**Soy perseverante, curiosa, organizada y sociable.** Me gusta motivar y sumar gente a las ideas, disfruto compartir todo lo que aprendo para ayudar a quien sea.',
      'Tengo 26 años, este año me recibo de **Periodista y productora de contenidos** en Eter. **LUZU** fue mi inspiración: verlos despertó mi interés por la comunicación digital.',
      'En 2022 inicié como **CM**  y descubrí que lo mío no era solo administrar cuentas en redes, entonces busqué mi rumbo...',

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
  // Cada paso: estado ('Próximo', 'En curso' o 'Hecho') y fecha opcional. Al terminar uno, cambiar su estado a 'Hecho'.
  // Fotos (verticales): guardarlas en src/assets/hacia-donde-voy/ y listarlas en "photos" con la ruta desde esa carpeta
  // y una descripción breve (alt). Sin fotos, el paso se muestra solo con el texto.
  items: [
    // Oculto hasta tener fotos y contenido:
    // {
    //   title: 'Curso de dirección y técnica',
    //   text: 'Dictado por el Pulpo Díaz en la Academia de Resumido.',
    //   status: 'En curso',
    // },
    {
      title: 'Seminario de producción de stream y podcast',
      text: 'Seminario intensivo presencial, el 14 de noviembre.',
      status: 'Hecho',
      date: '14 Nov',
      photos: [
        { file: 'seminario/1-RESU.jpg', alt: 'Michelle sonríe con la credencial del seminario en la mano' },
        { file: 'seminario/2-RESU.jpg', alt: 'Michelle, de espaldas, filma con el celular en un estabilizador dentro del estudio de Resumido' },
        { file: 'seminario/3-RESU.jpg', alt: 'Estudio de Resumido durante la grabación de un programa en vivo' },
        { file: 'seminario/4-RESU.jpg', alt: 'Michelle muestra un recuerdo del seminario, con la credencial colgada' },
      ],
    },
  ] as {
    title: string;
    text: string;
    status: 'Próximo' | 'En curso' | 'Hecho';
    date?: string;
    photos?: { file: string; alt: string }[];
  }[],
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
      tag: 'Desde 2024',
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
  pause: 'Pausar el pase automático',
  resume: 'Reanudar el pase automático',
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
  cta: 'Escribime',
  whatsapp: 'WhatsApp',
  emailLabel: 'Escribime por email',
  copy: 'Copiar email',
  copied: 'Email copiado',
  copyError: 'No se pudo copiar, seleccioná el email',
  whatsappLabel: 'Escribime por WhatsApp',
};

export const footer = {
  text: 'Michelle Alexia Banti · Hecho con amor',
};
