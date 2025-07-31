import { useDispatch } from 'react-redux';
import { addCategories } from '../utils/store/recipesSlice';
import { useEffect } from 'react';
import { BASE_URL } from '../utils/constants';

const useCategoriesList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const categories = [
      'Pasta',
      'Vegetarian',
      'Breakfast',
      'Side',
      'Starter',
      'Miscellaneous',
      'Dessert'
    ];
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${BASE_URL}/categories.php`);
        const data = await response.json();
        console.log(data, 'data---------------------------------------');

        const filteredCategories = data.categories.filter(({ strCategory }) =>
          categories.includes(strCategory)
        );

        dispatch(addCategories(filteredCategories));
      } catch (error) {
        console.error('Something went wrong while fetch all Categories!');
      }
    };
    fetchCategories();
  }, [dispatch]);
};

export default useCategoriesList;
