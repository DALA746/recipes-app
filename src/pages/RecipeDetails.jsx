import { useParams } from 'react-router-dom';
import useRecipeDetails from '../hooks/useRecipeDetails';
import CookingSteps from '../components/CookingSteps';

const RecipeDetails = () => {
  const { id } = useParams();

  const { strMeal, strArea, strCategory, strMealThumb, strInstructions } =
    useRecipeDetails(id);

  return (
    <main className="max-w-[800px] m-auto bg-slate-800 text-white">
      <div className="relative">
        <div className="w-full h-[600px]">
          <img
            className="w-full h-full object-cover overflow-hidden"
            src={strMealThumb}
            alt={strMeal}
          />
        </div>
        <div className="p-4 flex flex-col gap-4 absolute bottom-0 w-full bg-transparent text-white bg-gradient-to-b from-transparent to-slate-900">
          <h2 className="text-6xl font-bold">{strMeal}</h2>
          <p>
            <span className="font-bold">Area:</span> {strArea}
          </p>
          <p>
            <span className="font-bold">Category:</span> {strCategory}
          </p>
        </div>
      </div>
      <div>Ingediensts || Instructions || Video Menu</div>
      <div className="p-4 bg-slate-900">
        {strInstructions && <CookingSteps instructions={strInstructions} />}
      </div>
    </main>
  );
};

export default RecipeDetails;
