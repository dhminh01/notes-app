import React from "react";

const EmptyCard = ({ imgSrc, message }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <img src={imgSrc} alt="No notes" className="w-60" />
      <p className="w-1/2 mt-5 text-sm font-medium text-center text-slate-700 loading-7">
        {message}
      </p>
    </div>
  );
};

export default EmptyCard;
