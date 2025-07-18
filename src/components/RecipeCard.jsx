import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFavorite } from '../utils/store/userSlice';

const RecipeCard = ({ recipe }) => {
  const dispatch = useDispatch();
  const { idMeal, strMealThumb, strMeal } = recipe;

  // const addFavorites = () => {
  //   console.log('add favorite');
  //   dispatch(addFavorite(recipe));
  // };

  return (
    <div className="border relative rounded-lg overflow-hidden">
      {/* <button
        onClick={() => addFavorites()}
        className="absolute top-0 bg-slate-100 p-2 z-50">
        Add favorite
      </button> */}
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
