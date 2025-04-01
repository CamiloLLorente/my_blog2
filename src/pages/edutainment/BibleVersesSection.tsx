import { useEffect, useState } from "react";
import SectionCard from "../../components/SectionCard";
import { sectionsVerses } from "../../data/data";

const BibleVersesSection = () => {
  const [sections, setSections] = useState<typeof sectionsVerses>([]);
  useEffect(() => {
    const fetchSections = async () => {
      try {
        const response = await sectionsVerses;
        setSections(response);
      } catch (error) {
        console.error("Error fetching sections:", error);
      }
    };

    fetchSections();
  })
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
            url={`/versiculo/seccion/${section.slug}`}
            slug={section.slug}
          />
        ))}
      </div>
    </div>
  );
 };

export default BibleVersesSection;
