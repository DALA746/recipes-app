import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFavorite, removeFavorite } from '../utils/store/favoritesSlice';
import { useSelector } from 'react-redux';
import {
  addFavoriteToFirebase,
  removeFavoriteFromFirebase
} from '../utils/firebaseHelpers';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const RecipeCard = ({ recipe }) => {
  const dispatch = useDispatch();

  const { idMeal, strMealThumb, strMeal } = recipe;

  const user = useSelector((state) => state.user);
  const favorites = useSelector((state) => state.favorites);

  const isFavorited =
    favorites && favorites?.items?.some((recipe) => recipe.idMeal === idMeal);

  const handleClick = async () => {
    if (isFavorited) {
      await removeFavoriteFromFirebase(user.uid, recipe);
      dispatch(removeFavorite(recipe));
    } else {
      await addFavoriteToFirebase(user.uid, recipe);
      dispatch(addFavorite(recipe));
    }
  };

  return (
    <div className="border relative rounded-lg overflow-hidden">
      <button
        onClick={handleClick}
        className="absolute top-0 bg-slate-100 p-2 z-30">
        {isFavorited ? (
          <FaHeart size={20} className="text-red-500" />
        ) : (
          <FaRegHeart size={20} />
        )}
      </button>

      <Link to={`/browse/${idMeal}`}>
        <div className="w-full h-full">
          <img
            className="w-full h-full object-cover overflow-hidden"
            src={strMealThumb}
            alt={strMeal}
          />
        </div>
        <div
          className="absolute bottom-0 font-bold w-full p-2 flex flex-col gap-4 bg-transparent
           text-white bg-gradient-to-b from-transparent to-slate-900">
          <p className="p-2">{strMeal}</p>
        </div>
      </Link>
    </div>
  );
};

export default RecipeCard;
