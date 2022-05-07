import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useInventories from "../../hooks/useInventories";
import DeleteConfirm from "../DeleteConfirm/DeleteConfirm";
import InventoryTableData from "../InventoryTableData/InventoryTableData";
import Loading from "../Loading/Loading";

const ManageInventories = () => {
  const [inventories, setInventories] = useInventories();
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleDeleteInventory = (id) => {
    setConfirmOpen(true);
    setSelectedId(id);
    console.log(id);
  };

  const handleDelete = () => {
    setLoading(true);
    setConfirmOpen(false);
    fetch(`http://localhost:5000/inventory/${selectedId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remaining = inventories.filter(
          (inventory) => inventory._id !== selectedId
        );
        setInventories(remaining);
        setLoading(false);
      });
  };

  return (
    <>
      {confirmOpen && (
        <DeleteConfirm
          setConfirmOpen={setConfirmOpen}
          handleDelete={handleDelete}
        />
      )}
      {loading && <Loading />}
      <div className="md:container mx-auto p-5">
        <div className="flex justify-between items-center my-5">
          <h1 className="text-3xl font-bold ">All inventories</h1>
          <button
            className="px-7 py-3 rounded-md bg-blue-400 text-white font-bold"
            onClick={() => navigate("/add-inventory")}
          >
            Add Inventory
            <FontAwesomeIcon className="ml-2" icon={faPlus} />
          </button>
        </div>
        <table className="w-full bg-gray-50 rounded hidden md:table">
          <thead className="border ">
            <tr className="text-left">
              <th className="p-4">Name</th>
              <th>Supplier</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Sold</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {inventories.map((inventory) => (
              <tr key={inventory._id} className="border">
                <InventoryTableData
                  inventory={inventory}
                  isMobileView={false}
                  handleDeleteInventory={handleDeleteInventory}
                />
              </tr>
            ))}
          </tbody>
        </table>
        <div className="md:hidden block">
          {inventories.map((inventory) => (
            <div
              key={inventory._id}
              className="border p-3 my-3 bg-gray-50 rounded"
            >
              <InventoryTableData
                inventory={inventory}
                isMobileView={true}
                handleDeleteInventory={handleDeleteInventory}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ManageInventories;
