import React from "react";
import { useNavigate } from "react-router-dom";
import useInventories from "../../hooks/useInventories";
import Car from "../Car/Car";
import DataLoading from "../DataLoading/DataLoading";
import Feature from "../Feature/Feature";
import LatestNews from "../LatestNews/LatestNews";
import Slider from "../Slider/Slider";

const Home = () => {
  const [inventories, , dataIsLoading] = useInventories(6);
  const navigate = useNavigate();

  return (
    <>
      <Slider />
      <div className="md:container mx-auto mt-10 p-5">
        <h1 className="md:text-4xl text-2xl font-bold">Latest Collection</h1>
        <div className="mt-7 md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {inventories.map((car) => (
            <Car key={car._id} car={car} />
          ))}
        </div>
        {dataIsLoading && <DataLoading />}
        <div className="flex justify-center">
          <button
            onClick={() => navigate("/manage-inventories")}
            className="hover:bg-red-500 border-2 border-red-500  hover:text-white fond-bold md:px-9 md:py-2 px-7 py-2 rounded-md  font-bold duration-500 mt-10 text-red-500"
          >
            Manage Inventories
          </button>
        </div>
      </div>
      <Feature />
      <LatestNews />
    </>
  );
};

export default Home;
