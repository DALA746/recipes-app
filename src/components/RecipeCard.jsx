import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  const { idMeal, strMealThumb, strMeal } = recipe;

  return (
    <Link to={`/browse/${idMeal}`}>
      <div className="border w-[350px] relative rounded-lg overflow-hidden">
        <div className="w-full h-[200px]">
          <img
            className="w-full h-full object-cover overflow-hidden"
            src={strMealThumb}
            alt={strMeal}
          />
        </div>
        <div className="absolute bottom-0 w-full bg-red-400 text-slate-900">
          <p className="p-2">{strMeal}</p>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
