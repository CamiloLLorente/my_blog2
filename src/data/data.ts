import { Edutainment, Post, SectionVerses, Verses } from './interfaces';

export const posts: Post[] = [
  {
    id: 1,
    title: "Introducción a React",
    description: "Aprende los conceptos básicos de React y cómo crear tu primera aplicación.",
    date: "2024-03-15",
    views: 1500,
    tags: ["react", "frontend", "tutorial"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    content: "React es una biblioteca de JavaScript para construir interfaces de usuario. Fue desarrollada por Facebook y se ha convertido en una de las herramientas más populares para el desarrollo web frontend. En este artículo, exploraremos los conceptos básicos de React y cómo puedes comenzar a crear tu primera aplicación..."
  },
  {
    id: 2,
    title: "El nuevo naciemiento",
    description: "Descubre cómo escribir CSS limpio y mantenible para tus proyectos web.",
    date: "2024-03-10",
    views: 1200,
    tags: ["css", "frontend", "tutorial"],
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    content: "El CSS (Cascading Style Sheets) es fundamental para dar estilo y diseño a nuestras páginas web. Sin embargo, a medida que los proyectos crecen, mantener un CSS limpio y organizado puede convertirse en un desafío. En este artículo, compartiremos algunas de las mejores prácticas para escribir CSS mantenible y escalable..."
  },
  {
    id: 3,
    title: "Justificados por la fe",
    description: "Comparación detallada entre TypeScript y JavaScript: ventajas y desventajas.",
    date: "2024-03-05",
    views: 2000,
    tags: ["typescript", "frontend", "tutorial"],
    image: "https://images.unsplash.com/photo-1626301688449-1fa324d15bca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    content: "TypeScript y JavaScript son dos lenguajes de programación muy populares en el desarrollo web. Mientras que JavaScript es un lenguaje de scripting interpretado, TypeScript es un superconjunto tipado de JavaScript que se compila a JavaScript puro. En este artículo, analizaremos las principales diferencias entre ambos lenguajes, sus ventajas y desventajas..."
  },
  {
    id: 4,
    title: "Las 7 dispensaciones",
    description: "Técnicas avanzadas para mejorar la velocidad y el rendimiento de tu sitio web.",
    date: "2024-02-28",
    views: 1800,
    tags: ["performance", "frontend", "tutorial"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    content: "El rendimiento de un sitio web es crucial para proporcionar una buena experiencia de usuario y mejorar el SEO. En este artículo, exploraremos técnicas avanzadas para optimizar la velocidad y el rendimiento de tu sitio web, incluyendo la optimización de imágenes, la minimización de recursos, el uso de CDN y mucho más..."
  },
  {
    id: 5,
    title: "Los errores de Lot",
    description: "Lot cometio muchos errores en su carrera de la vida.",
    date: "2024-02-20",
    views: 1600,
    tags: ["performance", "frontend", "tutorial"],
    image: "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    content: "GraphQL es un lenguaje de consulta y manipulación de datos para APIs, y una alternativa a REST. Desarrollado por Facebook, GraphQL permite a los clientes solicitar exactamente los datos que necesitan, lo que puede llevar a APIs más eficientes y flexibles. En este artículo, exploraremos los conceptos básicos de GraphQL y cómo puede beneficiar a tus proyectos..."
  }
];

const edutainment: Edutainment[] = [
  {
    id: 1,
    title: "Bible Verses Section",
    description: "Find inspiring verses to reflect on, strengthen your faith, and guide your spiritual life.",
    views: 1500,
    tags: ["Learn", "Bible", "Verses"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    content: "In this section, you will find a collection of carefully selected Bible verses to reflect on, inspire, and strengthen your faith. Each verse has been chosen for its relevance to themes of hope, love, wisdom, and spiritual guidance. Whether for meditating on God's word or sharing with others, this space is designed to help you delve deeper into the Bible's message and apply it to your daily life.",
    link: "/bible_verses_section"
  },
  {
    id: 2,
    title: "Favorite Verses",
    description: "Find your favorite verses and keep learning from the word of God.",
    views: 1200,
    tags: ["CSS", "Frontend", "Tutorial"],
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    content: "Explora una selección de tus versículos favoritos para inspirarte y seguir aprendiendo de la palabra de Dios. Esta sección está diseñada para fortalecer tu fe, brindarte esperanza y guiarte en tu crecimiento espiritual, ayudándote a aplicar los mensajes bíblicos en tu vida diaria.",
    link: "/favorite_verses"
  },
  {
    id: 2,
    title: "Repasa tus versiculos",
    description: "Repasa tus versiculos favoritos y sigue aprendiendo de la palabra de Dios.",
    views: 1200,
    tags: ["css", "frontend", "tutorial"],
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    content: "Explora una selección de tus versículos favoritos para inspirarte y seguir aprendiendo de la palabra de Dios. Esta sección está diseñada para fortalecer tu fe, brindarte esperanza y guiarte en tu crecimiento espiritual, ayudándote a aplicar los mensajes bíblicos en tu vida diaria.",
    link: "/review_your_verses"

  },

];

export const sectionsVerses :SectionVerses[] = [
  {
    title: "Justificación",
    description:
      "Justificación por la fe y la gracia de Dios.",
    color: "#ffaf00",
    slug: "justificacion"
  },
  {
    title: "Nuevo Nacimiento",
    description:
      "Nuevo nacimiento y transformación espiritual.",
    color: "#bb02ff",
    slug: "nuevo_nacimiento"
  },
  {
    title: "Repasa tus versiculos",
    description:
      "Repasa tus versiculos favoritos y sigue aprendiendo de la palabra de Dios.",
    color: "#da2268",
    slug: "repasa_tus_versiculos"
  },
  {
    title: "Arrepntimiento",
    description:
      "Find inspiring verses to reflect on, strengthen your faith, and guide your spiritual life.",
    color: "#ffaf00",
    slug: "arrepentimiento"
  },
  {
    title: "Conversión",
    description:
      "Find your favorite verses and keep learning from the word of God.",
    color: "#bb02ff",
    slug: "conversion"
  },
  {
    title: "Unicidad",
    description:
      "Repasa tus versiculos favoritos y sigue aprendiendo de la palabra de Dios.",
    color: "#da2268",
    slug: "unicidad"

  },
];




export const verses: Verses = {
  "justificacion": [
    {
      id: 1,
      title: "Romanos 5:1",
      description: "Justificados, pues, por la fe, tenemos paz para con Dios por medio de nuestro Señor Jesucristo.",
      favorite: false,
    },
    {
      id: 2,
      title: "Efesios 2:8-9",
      description: "Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios; no por obras, para que nadie se gloríe.",
      favorite: false,
    },
  ],
  "nuevo_nacimiento": [
    {
      id: 1,
      title: "Juan 3:3",
      description: "De cierto, de cierto te digo que el que no naciere de nuevo, no puede ver el reino de Dios.",
      favorite: false,
    },
    {
      id: 2,
      title: "2 Corintios 5:17",
      description: "De modo que si alguno está en Cristo, nueva criatura es; las cosas viejas pasaron; he aquí todas son hechas nuevas.",
      favorite: false,
    },
  ],
  "repasa_tus_versiculos": [
    {
      id: 1,
      title: "Salmos 119:11",
      description: "En mi corazón he guardado tus dichos, para no pecar contra ti.",
      favorite: false,
    },
    {
      id: 2,
      title: "Salmos 119:105",
      description: "Lámpara es a mis pies tu palabra, y lumbrera a mi camino.",
      favorite: false,
    },
  ],
  "arrepentimiento": [
    {
      id: 1,
      title: "Hechos 3:19",
      description: "Así que, arrepentíos y convertíos, para que sean borrados vuestros pecados, para que vengan de la presencia del Señor tiempos de refrigerio.",
      favorite: false,
    },
    {
      id: 2,
      title: "2 Crónicas 7:14",
      description: "Si se humillare mi pueblo, sobre el cual es invocado mi nombre, y oraren y buscaren mi rostro, y se convirtieren de sus malos caminos; entonces yo oiré desde los cielos, y perdonaré sus pecados, y sanaré su tierra.",
      favorite: false,
    },
  ],
  "conversion": [
    {
      id: 1,
      title: "Romanos 10:9-10",
      description: "Que si confesares con tu boca que Jesús es el Señor, y creyeres en tu corazón que Dios le levantó de los muertos, serás salvo. Porque con el corazón se cree para justicia, pero con la boca se confiesa para salvación.",
      favorite: false,
    },
    {
      id: 2,
      title: "Hechos 2:38",
      description: "Pedro les dijo: Arrepentíos, y bautícese cada uno de vosotros en el nombre de Jesucristo para perdón de los pecados; y recibiréis el don del Espíritu Santo.",
      favorite: false,
    },
  ],
};

export const getEdutainment = (): Promise<Edutainment[]> => {
  return new Promise((resolve) => {
    resolve(edutainment);
  });
};
