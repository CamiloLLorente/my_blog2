import Card from '../../components/Card';
import { useEdutainment } from '../../hook/edutainment';

const DiscoverAndLearn = () => {
  const { edutainmentFilter } = useEdutainment();
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold text-[#004694] mb-8 ">Aprende y Diviertete</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {edutainmentFilter.map((post) => (
          <Card
            key={post.id}
            id={post.id}
            title={post.title}
            description={post.description}
            tags={post.tags}
            image={post.image}
            link={post.link}
          />
        ))}
      </div>
    </div>
  );
};

export default DiscoverAndLearn;
