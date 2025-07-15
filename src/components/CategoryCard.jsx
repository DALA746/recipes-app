const CategoryCard = ({ strCategoryThumb, strCategory }) => {
  return (
    <div className="w-[350px] h-[200px] bg-red-200 border-2 border-red-300 relative rounded-lg overflow-hidden">
      <div className="w-full h-full opacity-40">
        <img
          className="w-full h-full object-fit overflow-hidden"
          src={strCategoryThumb}
          alt={strCategory}
        />
      </div>
      <div className="text-2xl font-bold absolute inset-0 flex items-center justify-center">
        {strCategory}
      </div>
    </div>
  );
};

export default CategoryCard;
