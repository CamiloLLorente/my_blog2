import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex mb-8" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          if (index === 0) {
            return (
              <li key={index} className="inline-flex items-center">
                <Link to={item.path!} className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
                  {item.label}
                </Link>
              </li>
            );
          }

          return (
            <li key={index} {...(isLast ? { 'aria-current': 'page' } : {})}>
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400" />
                {isLast ? (
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">{item.label}</span>
                ) : (
                  <Link to={item.path!} className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2">
                    {item.label}
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;