import React from 'react';
import { Link } from 'react-router-dom';
import defaultImage from "../../../public/image/default-image-path.jpg";
import type { BlogPostProps } from '../../config/type';

const Card: React.FC<BlogPostProps> = ({ id, title, description, tags, date, image, link }) => {
  console.log({ id, title, description, tags, date, image });

  return (
    <Link
      to={link}
      className="block bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow transform hover:scale-105"
    >
      <img src={image?.length ? image : defaultImage} alt={image?.length ? title: "default-image-path"} className="w-full h-48 object-cover" />
      
      <div className="p-6">
      <h2 className="text-xl font-bold mb-2 text-[#004694]">{title}</h2>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      <div className="text-xs text-gray-500 flex justify-start mb-2">
        {tags?.map((tag, index) => (
        <span key={index} className="px-2 py-1 border border-[#FFA400] mr-2 rounded-md">
          #{tag}
        </span>
        ))}
      </div>
      <div className="flex justify-between items-center">
        {date && <span className="text-xs text-gray-500">{date}</span>}
      </div>
      </div>
    </Link>
  );
};

export default Card;
