import SectionCard from "../../components/SectionCard";

const BibleVersesSection = () => {
  const sections = [
    {
      title: "Bible Verses Section",
      description:
        "Find inspiring verses to reflect on, strengthen your faith, and guide your spiritual life.",
      color: "bg-[#004694]",
    },
    {
      title: "Favorite Verses",
      description:
        "Find your favorite verses and keep learning from the word of God.",
      color: "bg-[#FFA400]",
    },
    {
      title: "Repasa tus versiculos",
      description:
        "Repasa tus versiculos favoritos y sigue aprendiendo de la palabra de Dios.",
      color: "bg-[#FFD700]",
    },
    {
      title: "Bible Verses Section",
      description:
        "Find inspiring verses to reflect on, strengthen your faith, and guide your spiritual life.",
      color: "bg-[#004694]",
    },
    {
      title: "Favorite Verses",
      description:
        "Find your favorite verses and keep learning from the word of God.",
      color: "bg-[#FFA400]",
    },
    {
      title: "Repasa tus versiculos",
      description:
        "Repasa tus versiculos favoritos y sigue aprendiendo de la palabra de Dios.",
      color: "bg-[#FFD700]",
    },
  ];
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold text-[#004694] mb-8">
        Seccion de versiculos biblicos
      </h1>
      <p>
        Find inspiring verses to reflect on, strengthen your faith, and guide
        your spiritual life.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 justify-center justify-items-center">
        {sections.map((section, index) => (
          <SectionCard
            key={index}
            title={section.title}
            description={section.description}
            color={section.color}
          />
        ))}
      </div>
    </div>
  );
};

export default BibleVersesSection;
