import React from "react";

const CardItem = ({ data }) => {
  return (
    <div className="flex flex-col items-start">
      <div className="w-full h-[400px]">
        <img
          src={data.image}
          alt="card-image"
          className="w-full h-[300px] rounded-lg object-cover mb-3"
        />
      </div>
      <h3 className="text-2xl h-6 font-medium mb-2">{data.title}</h3>
      <p className="text-sm h-4 font-medium text-gray-400">{data.genre}</p>
    </div>
  );
};

export default CardItem;
