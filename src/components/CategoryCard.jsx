import { Link } from 'react-router-dom';

const CategoryCard = ({ strCategoryThumb, strCategory }) => {
  return (
    <Link to={`/browse/list/${strCategory}`}>
      <div className=" bg-red-200 relative rounded-lg overflow-hidden">
        <div className="w-full h-full opacity-20">
          <img
            className="w-full h-full object-fit overflow-hidden"
            src={strCategoryThumb}
            alt={strCategory}
          />
        </div>
        <div className="text-2xl font-bold absolute inset-0 flex items-center justify-center">
          {strCategory}
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
