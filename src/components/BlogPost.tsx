import React from 'react';
import { Link } from 'react-router-dom';
import type { BlogPostProps } from '../config/type';

const BlogPost: React.FC<BlogPostProps> = ({ id, title, description, tags, date, image }) => {
  console.log({ id, title, description, tags, date, image });
  return (
    <article className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow overflow-hidden transition-transform transform hover:scale-105">
      <Link to={`/post/${id}`}>
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h2 className="text-xl font-bold mb-2 text-[#004694]">{title}</h2>
          <p className="text-gray-600 mb-4 text-sm">{description}</p>
          <div className="text-xs text-gray-500 flex justify-start mb-2">
              {(tags ?? []).map((tag, index) => (
                <span key={index} className='px-2 py-1 border border-gray-500 mr-2 rounded-md '>#{tag} </span>
              ))}
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">{date}</span>
            <Link
              to={`/post/${id}`}
              className="bg-[#004694] text-white px-3 py-1 text-sm rounded-md hover:bg-[#003674] transition-colors"
            >
              Leer más
            </Link>
          </div>
          
        </div>
      </Link>
    </article>
  );
};

export default BlogPost;