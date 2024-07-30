import React from "react";
import { Card_images } from "../Utilility/Constants";

const Recommentation = () => {
  return (
    <div className=" ml-32 mr-32 ">
      <h1 className="text-2xl mt-20 mb-5 font-bold">Fresh Recommendation</h1>
      <div className="flex items-center  ">
        <div className="card_container bg-white grid grid-cols-4 gap-4 ">
          {Card_images.map((card, index) => (
            <div
              key={index}
              className=" bg-white border border-gray-50 shadow-md p-5 "
            >
              <div className="card-image  ">
                <img
                  src={card.url}
                  alt={`Card image ${index}`}
                  className="h-52"
                />
              </div>
              <div className="mt-6">
                <p>{card.price}</p>
                <p>{card.title}</p>
                <p>{card.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Recommentation;
