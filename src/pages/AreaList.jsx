import useFetchArea from '../hooks/useFetchArea';
import { useParams } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';

const AreaList = () => {
  const { areaId } = useParams();
  const recipes = useFetchArea(areaId);

  return (
    <main className="p-4 max-w-7xl m-auto">
      <div className="flex justify-between my-6">
        <h2 className="text-2xl font-bold">{areaId}</h2>
        <div className="font-bold">{recipes?.length} recipes</div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {recipes &&
          recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
      </div>
    </main>
  );
};

export default AreaList;
