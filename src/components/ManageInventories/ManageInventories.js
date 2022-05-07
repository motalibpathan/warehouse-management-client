import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import useInventories from "../../hooks/useInventories";
import DataLoading from "../DataLoading/DataLoading";
import Manage from "../Manage/Manage";

const ManageInventories = () => {
  const [inventories, setInventories, dataIsLoading] = useInventories();
  const navigate = useNavigate();
  return (
    <>
      <div className="md:container mx-auto px-5 md:flex justify-between items-center mt-5">
        <h1 className="text-3xl font-bold ">All inventories</h1>
        <button
          className="px-7 py-3 rounded-md bg-blue-400 text-white font-bold mt-2 md:mt-0"
          onClick={() => navigate("/add-inventory")}
        >
          Add Inventory
          <FontAwesomeIcon className="ml-2" icon={faPlus} />
        </button>
      </div>
      {dataIsLoading ? (
        <DataLoading />
      ) : (
        <Manage inventories={inventories} setInventories={setInventories} />
      )}
    </>
  );
};

export default ManageInventories;
