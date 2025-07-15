import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes, categoryTitle }) => {
  return (
    <section className="flex flex-col gap-4 my-4">
      <h2 className="text-2xl font-bold">{categoryTitle}</h2>
      <div className="flex flex-row w-full gap-4 overflow-scroll flex-shrink-0 ">
        {recipes.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.idMeal} />
        ))}
      </div>
    </section>
  );
};

export default RecipeList;
