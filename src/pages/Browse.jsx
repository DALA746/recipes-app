import useRecipeList from '../hooks/useRecipeList';
import { useSelector } from 'react-redux';
import ShortRecipeList from '../components/ShortRecipeList';
import CategoriesList from '../components/CategoriesList';
import useCategoriesList from '../hooks/useCategoriesList';

const Browse = () => {
  useRecipeList();
  useCategoriesList();
  const recipes = useSelector((store) => store.recipes.recipesData);
  const categories = useSelector((store) => store.recipes.categories);
  const favorites = useSelector((store) => store.user);
  console.log(favorites, 'favorites');

  if (!recipes) {
    return null;
  }

  return (
    <main className="p-4 max-w-7xl m-auto">
      {recipes &&
        recipes.map(({ meals, category }) => (
          <ShortRecipeList
            recipes={meals}
            categoryTitle={category}
            key={category}
          />
        ))}
      {categories && (
        <section>
          <h2 className="text-2xl font-bold text-center my-8">
            Other Categories
          </h2>
          <CategoriesList categories={categories} />
        </section>
      )}
    </main>
  );
};

export default Browse;
