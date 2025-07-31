import { useEffect, useRef, useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

const CookingSteps = ({ instructions }) => {
  const ref = useRef();
  const [expanded, setExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);

  const toggleShow = () => {
    setExpanded((prev) => !prev);
  };

  useEffect(() => {
    if (ref.current) {
      setContentHeight(ref.current.scrollHeight);
    }
  }, [instructions]);

  return (
    <div className="space-y-4 w-full md:w-3/5">
      <h2 className="text-2xl font-bold mb-4">Cooking Instructions</h2>
      <div className="bg-slate-100 rounded-xl relative">
        <div
          className="bg-slate-100 rounded-xl overflow-hidden transition-all duration-300"
          ref={ref}
          style={{ height: expanded ? contentHeight : 100 }}>
          {instructions.split('\r\n').map(
            (line, index) =>
              line && (
                <div
                  key={index}
                  className=" text-black p-3 rounded-lg leading-7">
                  {line}
                </div>
              )
          )}
        </div>
        <div
          className={`pointer-events-none absolute inset-x-0 bottom-9 h-16 ${
            contentHeight > 100 &&
            !expanded &&
            'bg-gradient-to-b from-transparent to-slate-100'
          }`}></div>
        {contentHeight > 100 && (
          <button
            className="px-4 py-2 bg-slate-100 w-full rounded-xl"
            onClick={toggleShow}>
            {expanded ? <BsChevronUp size={20} /> : <BsChevronDown size={20} />}
          </button>
        )}
      </div>
    </div>
  );
};

export default CookingSteps;
