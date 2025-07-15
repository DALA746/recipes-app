import { useDispatch } from 'react-redux';
import { addRecipes } from '../utils/store/recipesSlice';
import { useEffect } from 'react';
import { BASE_URL } from '../utils/constants';

const useRecipeList = () => {
  const dispatch = useDispatch();

  const fetchRecipes = async (category) => {
    const response = await fetch(`${BASE_URL}/filter.php?c=${category}`);
    const data = await response.json();
    return { category, meals: data.meals };
  };

  useEffect(() => {
    const recipeCategories = ['Beef', 'Chicken', 'Lamb', 'Pork', 'Seafood'];
    const fetchAllRecipeCategories = async () => {
      try {
        const results = await Promise.all(
          recipeCategories.map((category) => fetchRecipes(category))
        );
        dispatch(addRecipes(results));
      } catch (error) {
        console.error('Something went wrong while fetch all Categories!');
      }
    };
    fetchAllRecipeCategories();
  }, [dispatch]);
};

export default useRecipeList;
