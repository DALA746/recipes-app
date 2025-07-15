import CategoryCard from './CategoryCard';

const OtherCategories = ({ categories }) => {
  return (
    <section className="flex flex-wrap gap-4 my-6">
      {categories.map(({ strCategory, strCategoryThumb }) => (
        <CategoryCard
          strCategoryThumb={strCategoryThumb}
          strCategory={strCategory}
        />
      ))}
    </section>
  );
};

export default OtherCategories;
