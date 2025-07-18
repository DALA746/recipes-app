/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { BASE_URL } from '../utils/constants';

const useRecipeDetails = (id) => {
  const [details, setDetails] = useState({});

  const fetchRecipesDetails = async () => {
    const response = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
    const data = await response.json();

    if (data.meals[0]) {
      const ingredientsAndMeasure = [];
      for (let i = 1; i <= 15; i++) {
        const ingredient = data.meals[0][`strIngredient${i}`];
        const measure = data.meals[0][`strMeasure${i}`];
        if (ingredient) {
          ingredientsAndMeasure.push(
            measure ? `${measure}\xa0${ingredient}` : ingredient
          );
        }
      }

      data.meals[0].ingredientsAndMeasure = ingredientsAndMeasure;

      setDetails(data.meals[0]);
    }
  };

  useEffect(() => {
    fetchRecipesDetails();
  }, []);

  return details;
};

export default useRecipeDetails;
