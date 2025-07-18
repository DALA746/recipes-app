import CategoryCard from './CategoryCard';

const CategoriesList = ({ categories }) => {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
      {categories.map(({ strCategory, strCategoryThumb }) => (
        <CategoryCard
          key={strCategory}
          strCategoryThumb={strCategoryThumb}
          strCategory={strCategory}
        />
      ))}
    </section>
  );
};

export default CategoriesList;
