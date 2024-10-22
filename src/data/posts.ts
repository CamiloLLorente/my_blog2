export interface Post {
  id: number;
  title: string;
  description: string;
  date: string;
  views: number;
  image: string;
  content: string;
}

const posts: Post[] = [
  {
    id: 1,
    title: "Introducción a React",
    description: "Aprende los conceptos básicos de React y cómo crear tu primera aplicación.",
    date: "2024-03-15",
    views: 1500,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    content: "React es una biblioteca de JavaScript para construir interfaces de usuario. Fue desarrollada por Facebook y se ha convertido en una de las herramientas más populares para el desarrollo web frontend. En este artículo, exploraremos los conceptos básicos de React y cómo puedes comenzar a crear tu primera aplicación..."
  },
  {
    id: 2,
    title: "Mejores prácticas en CSS",
    description: "Descubre cómo escribir CSS limpio y mantenible para tus proyectos web.",
    date: "2024-03-10",
    views: 1200,
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    content: "El CSS (Cascading Style Sheets) es fundamental para dar estilo y diseño a nuestras páginas web. Sin embargo, a medida que los proyectos crecen, mantener un CSS limpio y organizado puede convertirse en un desafío. En este artículo, compartiremos algunas de las mejores prácticas para escribir CSS mantenible y escalable..."
  },
  {
    id: 3,
    title: "TypeScript vs JavaScript",
    description: "Comparación detallada entre TypeScript y JavaScript: ventajas y desventajas.",
    date: "2024-03-05",
    views: 2000,
    image: "https://images.unsplash.com/photo-1626301688449-1fa324d15bca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    content: "TypeScript y JavaScript son dos lenguajes de programación muy populares en el desarrollo web. Mientras que JavaScript es un lenguaje de scripting interpretado, TypeScript es un superconjunto tipado de JavaScript que se compila a JavaScript puro. En este artículo, analizaremos las principales diferencias entre ambos lenguajes, sus ventajas y desventajas..."
  },
  {
    id: 4,
    title: "Optimización de rendimiento web",
    description: "Técnicas avanzadas para mejorar la velocidad y el rendimiento de tu sitio web.",
    date: "2024-02-28",
    views: 1800,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    content: "El rendimiento de un sitio web es crucial para proporcionar una buena experiencia de usuario y mejorar el SEO. En este artículo, exploraremos técnicas avanzadas para optimizar la velocidad y el rendimiento de tu sitio web, incluyendo la optimización de imágenes, la minimización de recursos, el uso de CDN y mucho más..."
  },
  {
    id: 5,
    title: "Introducción a GraphQL",
    description: "Descubre cómo GraphQL puede mejorar la eficiencia de tus APIs.",
    date: "2024-02-20",
    views: 1600,
    image: "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    content: "GraphQL es un lenguaje de consulta y manipulación de datos para APIs, y una alternativa a REST. Desarrollado por Facebook, GraphQL permite a los clientes solicitar exactamente los datos que necesitan, lo que puede llevar a APIs más eficientes y flexibles. En este artículo, exploraremos los conceptos básicos de GraphQL y cómo puede beneficiar a tus proyectos..."
  }
];

export const getPosts = (): Promise<Post[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(posts);
    }, 500);
  });
};

export const getPostById = (id: number): Promise<Post | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const post = posts.find(p => p.id === id);
      resolve(post);
    }, 500);
  });
};