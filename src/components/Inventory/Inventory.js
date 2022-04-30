import React from "react";

const Inventory = ({ car }) => {
  const { img, name, desc, price, quantity, supplier } = car;
  return (
    <div className="group shadow-lg rounded-md overflow-hidden">
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
        <p className="bg-red-200 rounded-full py-1 px-5 inline-block">
          Quantity: {quantity}
        </p>
      </div>
      <div className="flex justify-center">
        <button className="py-2 px-7 mt-2 mb-4 bg-red-500 text-white rounded-md border-2 border-red-500 hover:bg-white hover:text-red-500 duration-500">
          Mange Quantity
        </button>
      </div>
    </div>
  );
};

export default Inventory;
