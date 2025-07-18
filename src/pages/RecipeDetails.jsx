import { useParams } from 'react-router-dom';
import useRecipeDetails from '../hooks/useRecipeDetails';
import CookingSteps from '../components/CookingSteps';
import { Link } from 'react-router-dom';

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
              <span className="font-bold">Area:</span> {strArea}
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
          <div className="w-full md:w-2/5">
            <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
            {ingredientsAndMeasure &&
              ingredientsAndMeasure.map((item, i) => (
                <div
                  className="my-2 bg-slate-100 text-slate-900 rounded-lg p-2"
                  key={i}>
                  {item}
                </div>
              ))}
          </div>

          {strInstructions && <CookingSteps instructions={strInstructions} />}
        </div>
      </section>
    </main>
  );
};

export default RecipeDetails;
