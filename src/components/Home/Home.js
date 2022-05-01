import React from "react";
import useInventories from "../../hooks/useInventories";
import Inventory from "../Inventory/Inventory";
import Slider from "../Slider/Slider";

const Home = () => {
  const [inventories] = useInventories();
  console.log(inventories);
  return (
    <>
      <Slider />
      <div className="md:container mx-auto mt-10 p-5">
        <div className="flex justify-between">
          {" "}
          <h1 className="text-4xl font-bold">Latest Collection</h1>
          <button className="bg-red-500 border-2 border-red-500 hover:bg-white hover;text-red-500 hover:text-red-500 fond-bold px-9 py-2 rounded-md text-white font-bold duration-500">
            ALL CARS
          </button>
        </div>
        <div className="mt-7 md:grid grid-cols-3 gap-6">
          {inventories.map((car) => (
            <Inventory key={car.id} car={car} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
