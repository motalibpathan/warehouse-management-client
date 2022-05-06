import React from "react";
import { useNavigate } from "react-router-dom";

const Car = ({ car }) => {
  const navigate = useNavigate();
  const { _id, img, name, desc, price, quantity, supplier, sold } = car;
  console.log(car);
  let bgColor;
  if (quantity > 50) {
    bgColor = "bg-green-200";
  } else {
    bgColor = "bg-red-200";
  }
  return (
    <div className="group shadow-lg rounded-md overflow-hidden md:my-0 my-7 border-2">
      <div className="w-full h-[300px] overflow-hidden">
        <div
          style={{ backgroundImage: `url(${img})` }}
          className="hover:scale-110 w-full h-[300px] bg-no-repeat bg-cover duration-300"
        ></div>
      </div>
      <div className="p-3">
        <h1 className="mb-2 font-bold text-2xl group-hover:text-red-500 duration-500">
          {name}
        </h1>
        <p className="my-2 text-red-500 font-bold">Supplier: {supplier}</p>
        <p>{desc.length >= 150 ? desc.slice(0, 150) + " ..." : desc}</p>
        <p className="text-xl font-bold my-2">
          Price: $ <span className="text-red-500 ">{price}</span>
        </p>
        <p className={`${bgColor} rounded-full py-1 px-5 inline-block mr-3`}>
          Quantity: {quantity}
        </p>
        <p className="bg-blue-300 rounded-full py-1 px-5 inline-block ">
          Sold: {sold}
        </p>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => navigate(`/inventory/${_id}`)}
          className="py-2 px-7 mt-2 mb-4 bg-red-500 text-white rounded-md border-2 border-red-500 hover:bg-white hover:text-red-500 duration-500"
        >
          Stock Update
        </button>
      </div>
    </div>
  );
};

export default Car;
