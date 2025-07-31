import { useState, useEffect, useRef } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

const Ingredients = ({ ingredientsAndMeasure }) => {
  const [expanded, setExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const ref = useRef();

  const toggleShow = () => {
    setExpanded((prev) => !prev);
  };

  useEffect(() => {
    if (ref.current) {
      setContentHeight(ref.current.scrollHeight);
    }
  }, [ingredientsAndMeasure]);

  return (
    <div className="w-full md:w-2/5">
      <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
      <div
        className="flex flex-col gap-2 mb-2 overflow-hidden transition-all duration-300"
        ref={ref}
        style={{ height: expanded ? contentHeight : 90 }}>
        {ingredientsAndMeasure.map((item, i) => (
          <div className="bg-slate-100 text-slate-900 rounded-lg p-2" key={i}>
            {item}
          </div>
        ))}
      </div>

      {contentHeight > 90 && (
        <button
          className="bg-slate-100 text-slate-900 rounded-lg p-2 w-full"
          onClick={toggleShow}>
          {expanded ? <BsChevronUp size={20} /> : <BsChevronDown size={20} />}
        </button>
      )}
    </div>
  );
};

export default Ingredients;
