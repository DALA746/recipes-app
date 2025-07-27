import { useSelector } from 'react-redux';
import RecipeCard from '../components/RecipeCard';

const UserFavorites = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <main className="p-4 max-w-7xl m-auto">
      <h2 className="text-2xl my-2">Favorites</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {favorites.items?.length
          ? favorites.items?.map((recipe) => (
              <RecipeCard recipe={recipe} key={recipe.idMeal} />
            ))
          : 'You dont have favorite recipe yet!'}
      </div>
    </main>
  );
};

export default UserFavorites;
