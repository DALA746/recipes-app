const CookingSteps = ({ instructions }) => {
  return (
    <div className="p-2 space-y-4 text-white">
      <h2 className="text-2xl font-bold mb-4 text-white">
        Cooking Instructions
      </h2>
      <div className="bg-slate-100 border rounded-xl">
        {instructions.split('\r\n').map(
          (line, index) =>
            line && (
              <div key={index} className=" text-black p-3 rounded-lg">
                {line}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default CookingSteps;
