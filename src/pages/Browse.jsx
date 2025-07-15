import useRecipeList from '../hooks/useRecipeList';
import { useSelector } from 'react-redux';
import RecipeList from '../components/RecipeList';
import OtherCategories from '../components/OtherCategories';
import useCategoriesList from '../hooks/useCategoriesList';

const Browse = () => {
  useRecipeList();
  useCategoriesList();
  const recipes = useSelector((store) => store.recipes.recipesData);
  const categories = useSelector((store) => store.recipes.categories);

  if (!recipes) {
    return null;
  }

  return (
    <main className="p-4 max-w-7xl m-auto">
      {recipes &&
        recipes.map(({ meals, category }) => (
          <RecipeList recipes={meals} categoryTitle={category} key={category} />
        ))}
      {categories && (
        <section className="">
          <h2 className="text-2xl font-bold text-center">Other Categories</h2>
          <OtherCategories categories={categories} />
        </section>
      )}
    </main>
  );
};

export default Browse;
