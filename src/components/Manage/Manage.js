import React, { useState } from "react";
import { toast } from "react-toastify";
import DeleteConfirm from "../DeleteConfirm/DeleteConfirm";
import InventoryTableData from "../InventoryTableData/InventoryTableData";
import Loading from "../Loading/Loading";

const Manage = ({ inventories, setInventories }) => {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDeleteInventory = (id) => {
    setConfirmOpen(true);
    setSelectedId(id);
    console.log(id);
  };

  const handleDelete = () => {
    setLoading(true);
    setConfirmOpen(false);
    fetch(
      `https://enigmatic-harbor-04768.herokuapp.com/inventory/${selectedId}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remaining = inventories.filter(
          (inventory) => inventory._id !== selectedId
        );
        setInventories(remaining);
        setLoading(false);
        toast.success("Successfully deleted");
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
        <table className="w-full bg-gray-50 rounded hidden md:table">
          <thead className="border ">
            <tr className="text-left">
              <th className="p-4">Name</th>
              <th>Supplier</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Sold</th>
              <th>Manage</th>
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

export default Manage;
