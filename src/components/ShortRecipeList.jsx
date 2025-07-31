import RecipeCard from './RecipeCard';
import { Link } from 'react-router-dom';
import { SlArrowRight } from 'react-icons/sl';

const ShortRecipeList = ({ recipes, categoryTitle }) => {
  const firstFour = recipes.slice(0, 4);

  return (
    <section className="flex flex-col gap-4 my-4">
      <div className="flex justify-between">
        {categoryTitle && (
          <>
            <h2 className="text-2xl font-bold">{categoryTitle}</h2>
            <Link
              to={`/browse/list/${categoryTitle}`}
              className="flex items-center gap-1">
              <span className="font-bold">More</span>
              <SlArrowRight size={16} className="font-bold" />
            </Link>
          </>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {firstFour.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.idMeal} />
        ))}
      </div>
    </section>
  );
};

export default ShortRecipeList;
