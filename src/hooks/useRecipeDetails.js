/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { BASE_URL } from '../utils/constants';

const useRecipeDetails = (id) => {
  const [details, setDetails] = useState({});

  const fetchRecipesDetails = async () => {
    const response = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
    const data = await response.json();

    if (data.meals[0]) {
      setDetails(data.meals[0]);
    }
  };

  useEffect(() => {
    fetchRecipesDetails();
  }, []);

  return details;
};

export default useRecipeDetails;
