/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { BASE_URL } from '../utils/constants';

const useFetchArea = (areaId) => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    const response = await fetch(`${BASE_URL}/filter.php?a=${areaId}`);
    const data = await response.json();

    if (data) {
      setRecipes(data.meals);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return recipes;
};

export default useFetchArea;
