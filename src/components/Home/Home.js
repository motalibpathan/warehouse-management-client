import React from "react";
import useInventories from "../../hooks/useInventories";
import Inventory from "../Inventory/Inventory";
import Slider from "../Slider/Slider";

const Home = () => {
  const [inventories] = useInventories(6);

  return (
    <>
      <Slider />
      <div className="md:container mx-auto mt-10 p-5">
        <div className="flex justify-between items-center">
          {" "}
          <h1 className="md:text-4xl text-2xl font-bold">Latest Collection</h1>
          <button className="bg-red-500 border-2 border-red-500 hover:bg-white hover;text-red-500 hover:text-red-500 fond-bold md:px-9 md:py-2 px-7 py-2  rounded-md text-white font-bold duration-500">
            ALL CARS
          </button>
        </div>
        <div className="mt-7 md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {inventories.map((car) => (
            <Inventory key={car._id} car={car} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
