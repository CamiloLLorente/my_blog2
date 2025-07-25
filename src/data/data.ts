import { Edutainment, Post, SectionVerses, Verses } from './interfaces';

export const posts: Post[] = [
  {
    id: 1,
    title: "Arrrepentimiento",
    description: "Aprende los conceptos básicos de React y cómo crear tu primera aplicación.",
    date: "2024-03-15",
    views: 1500,
    tags: ["react", "frontend", "tutorial"],
    image: "/image/arrepentimiento2.jpg",
    content: `
    <article style="
      max-width: 800px;
      margin: 40px auto;
      padding: 30px;
      background: #fdfdfd;
      border-radius: 12px;
      font-family: 'Georgia', serif;
      color: #333;
      line-height: 1.8;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
    ">

      <p><strong>El arrepentimiento</strong> no es un concepto superficial, sino un mandato divino y una condición indispensable para la salvación y la entrada en el Reino de Dios. Jesús mismo inició su ministerio predicando este mensaje central: <strong>"arrepentíos, y creed en el evangelio"</strong>. No es una sugerencia, sino una orden directa de Dios a <em>"todos los hombres en todo lugar"</em>, un requisito que el Rey del cielo tiene el legítimo derecho de exigir.</p>

      <h2 style="margin-top: 30px; color: #2c5282;">1. ¿Por Qué Debemos Arrepentirnos? La Profunda Gravedad del Pecado</h2>
      <p>Las fuentes nos revelan que el arrepentimiento es crucial debido a la naturaleza intrínsecamente grave del pecado, que es la <strong>"clave de todos nuestros problemas"</strong>:</p>
      <ul style="padding-left: 20px; list-style: disc;">
        <li><strong>Es una Declaración de Guerra contra Dios:</strong> El pecado es una rebelión abierta contra el Creador. Desde Adán y Eva, la humanidad ha manifestado esta "misma rebeldía contra Dios".</li>
        <li><strong>Nos Enemista con Dios:</strong> El pecado implica enemistad, desprecio o indiferencia hacia Dios. <em>"El que no es conmigo, contra mí es"</em>.</li>
        <li><strong>Atenta contra la Justicia de Dios:</strong> Dios es justo y aborrece la injusticia. El pecado es una infracción de Su ley y crea una barrera insuperable entre Él y nosotros (Isaías 59:2, Apocalipsis 21:27).</li>
      </ul>

      <h2 style="margin-top: 30px; color: #2c5282;">2. ¿Qué es el Genuino Arrepentimiento? Una Transformación Integral</h2>
      <p>La palabra griega <em>metanoeo</em> significa "cambio de mente". El verdadero arrepentimiento implica una transformación completa en:</p>
      <ul style="padding-left: 20px; list-style: disc;">
        <li><strong>1. El Intelecto (Cambio de Pensamiento):</strong> Reconocer la gravedad del pecado y la necesidad de Jesús como Señor (Romanos 10:8-9).</li>
        <li><strong>2. Las Emociones (Cambio de Sentir):</strong> Sentir tristeza sincera por el pecado. Ejemplo: David en el Salmo 51.</li>
        <li><strong>3. La Voluntad (Cambio de Vida):</strong> Abandonar la vida antigua. Ejemplo: Zaqueo devolviendo lo robado.</li>
      </ul>

      <h2 style="margin-top: 30px; color: #2c5282;">3. Lo que el Arrepentimiento NO Es</h2>
      <ul style="padding-left: 20px; list-style: disc;">
        <li>No es solo pasar al altar sin propósito de cambio.</li>
        <li>No es lamentarse sin transformación (como Judas, Esaú o Saúl).</li>
        <li>No son rituales sin conversión verdadera.</li>
        <li>No es aparentar vida cristiana sin transformación interna.</li>
        <li>No es postergar la decisión, como Faraón.</li>
        <li>No es confiar en nuestras obras o creernos "buenas personas".</li>
      </ul>

      <h2 style="margin-top: 30px; color: #2c5282;">4. La Fuente del Genuino Arrepentimiento</h2>
      <p>El arrepentimiento verdadero no nace del esfuerzo humano, sino que es una obra del Espíritu Santo mediante la Palabra de Dios (Juan 6:63). Es respuesta al llamado de Dios y a la revelación del amor de Jesús.</p>

      <h2 style="margin-top: 30px; color: #2c5282;">5. Urgencia y Consecuencias del Arrepentimiento</h2>
      <ul style="padding-left: 20px; list-style: disc;">
        <li>Dios no quiere que nadie perezca, sino que todos procedan al arrepentimiento (2 Pedro 3:9).</li>
        <li>La puerta de la gracia está abierta <strong>hoy</strong>, pero no para siempre.</li>
        <li>No arrepentirse lleva a la condenación eterna (Lucas 13:3).</li>
      </ul>

      <p>El arrepentimiento es una decisión urgente y necesaria. Es el primer paso hacia el perdón, la paz con Dios y una vida nueva. Jesús dijo que hay <strong>"fiesta en el cielo por cada pecador que se arrepiente"</strong>.</p>
    </article>
    `

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

export const sectionsVerses: SectionVerses[] = [
  {
    title: "Justificación",
    description: "Justificación por la fe y la gracia de Dios.",
    color: "yellow",
    slug: "justificacion",
  },
  {
    title: "Nuevo Nacimiento",
    description: "Nuevo nacimiento y transformación espiritual.",
    color: "purple",
    slug: "nuevo_nacimiento",
  },
  {
    title: "Repasa tus versiculos",
    description: "Repasa tus versiculos favoritos y sigue aprendiendo de la palabra de Dios.",
    color: "pink",
    slug: "repasa_tus_versiculos",
  },
  {
    title: "Arrepntimiento",
    description: "Find inspiring verses to reflect on, strengthen your faith, and guide your spiritual life.",
    color: "green",
    slug: "arrepentimiento",
  },
  {
    title: "Conversión",
    description: "Find your favorite verses and keep learning from the word of God.",
    color: "blue",
    slug: "conversion",
  },
  {
    title: "Unicidad",
    description: "Repasa tus versiculos favoritos y sigue aprendiendo de la palabra de Dios.",
    color: "red",
    slug: "unicidad",
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
      id: 3,
      title: "Juan 3:3",
      description: "De cierto, de cierto te digo que el que no naciere de nuevo, no puede ver el reino de Dios.",
      favorite: false,
    },
    {
      id: 4,
      title: "2 Corintios 5:17",
      description: "De modo que si alguno está en Cristo, nueva criatura es; las cosas viejas pasaron; he aquí todas son hechas nuevas.",
      favorite: false,
    },
  ],
  "repasa_tus_versiculos": [
    {
      id: 5,
      title: "Salmos 119:11",
      description: "En mi corazón he guardado tus dichos, para no pecar contra ti.",
      favorite: false,
    },
    {
      id: 6,
      title: "Salmos 119:105",
      description: "Lámpara es a mis pies tu palabra, y lumbrera a mi camino.",
      favorite: false,
    },
  ],
  "arrepentimiento": [
    {
      id: 7,
      title: "Hechos 3:19",
      description: "Así que, arrepentíos y convertíos, para que sean borrados vuestros pecados, para que vengan de la presencia del Señor tiempos de refrigerio.",
      favorite: false,
    },
    {
      id: 8,
      title: "2 Crónicas 7:14",
      description: "Si se humillare mi pueblo, sobre el cual es invocado mi nombre, y oraren y buscaren mi rostro, y se convirtieren de sus malos caminos; entonces yo oiré desde los cielos, y perdonaré sus pecados, y sanaré su tierra.",
      favorite: false,
    },
     {
      id: 9,
      title: "Hechos 3:19-11",
      description: "Así que, arrepentíos y convertíos, para que sean borrados vuestros pecados, para que vengan de la presencia del Señor tiempos de refrigerio.",
      favorite: false,
    },
    {
      id: 10,
      title: "2 Crónicas 7:144",
      description: "Si se humillare mi pueblo, sobre el cual es invocado mi nombre, y oraren y buscaren mi rostro, y se convirtieren de sus malos caminos; entonces yo oiré desde los cielos, y perdonaré sus pecados, y sanaré su tierra.",
      favorite: false,
    }
  ],
  "conversion": [
    {
      id: 11,
      title: "Romanos 10:9-10",
      description: "Que si confesares con tu boca que Jesús es el Señor, y creyeres en tu corazón que Dios le levantó de los muertos, serás salvo. Porque con el corazón se cree para justicia, pero con la boca se confiesa para salvación.",
      favorite: false,
    },
    {
      id: 12,
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
