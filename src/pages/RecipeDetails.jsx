import { useParams } from 'react-router-dom';
import useRecipeDetails from '../hooks/useRecipeDetails';
import CookingSteps from '../components/CookingSteps';
import { Link } from 'react-router-dom';
import Ingredients from '../components/Ingredients';
import { useSelector } from 'react-redux';
import ShortRecipeList from '../components/ShortRecipeList';

const RecipeDetails = () => {
  const { id } = useParams();

  const {
    strMeal,
    strArea,
    strCategory,
    strMealThumb,
    strInstructions,
    ingredientsAndMeasure
  } = useRecipeDetails(id);

  const recipes = useSelector((store) => store.recipes.recipesData);
  const filteredArray = recipes.find((item) => item.category === strCategory);

  return (
    <main className="p-4">
      <section className="max-w-4xl m-auto">
        <div className="relative">
          <div className="w-full h-[335px] md:h-[500px]">
            <img
              className="w-full h-full object-cover overflow-hidden"
              src={strMealThumb}
              alt={strMeal}
            />
          </div>
          <div className="p-4 flex flex-col gap-4 absolute bottom-0 w-full text-white bg-transparent bg-gradient-to-b from-transparent to-slate-900">
            <h2 className="text-4xl font-bold md:text-6xl ">{strMeal}</h2>
            <p>
              <span className="font-bold">Area: </span>
              <Link className="underline" to={`/browse/area-list/${strArea}`}>
                {strArea}
              </Link>
            </p>
            <p>
              <span className="font-bold">Category:</span>{' '}
              <Link className="underline" to={`/browse/list/${strCategory}`}>
                {strCategory}
              </Link>
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full justify-between gap-8 mt-10 md:flex-row">
          {ingredientsAndMeasure && (
            <Ingredients ingredientsAndMeasure={ingredientsAndMeasure} />
          )}
          {strInstructions && <CookingSteps instructions={strInstructions} />}
        </div>
        {filteredArray?.meals && (
          <div className="py-4">
            <h2 className="text-2xl font-bold mb-2">Recomended</h2>
            <ShortRecipeList recipes={filteredArray.meals} />
          </div>
        )}
      </section>
    </main>
  );
};

export default RecipeDetails;
