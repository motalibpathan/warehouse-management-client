import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const InventoryTableData = ({
  inventory,
  isMobileView,
  handleDeleteInventory,
}) => {
  const navigate = useNavigate();
  return isMobileView ? (
    <>
      <h1 className="font-bold">Name: {inventory.name}</h1>
      <p className="my-1"> Supplier: {inventory.supplier}</p>
      <p>Price: ${inventory.price}</p>
      <p className="my-1">Quantity: {inventory.quantity}</p>
      <p>Sold: {inventory.sold}</p>
      <button
        className="px-3 py-2 bg-green-500 text-white rounded-md mt-2"
        onClick={() => navigate(`/inventory/${inventory._id}`)}
      >
        Manage
      </button>
      <button
        onClick={() => handleDeleteInventory(inventory._id)}
        className="px-3 py-2 bg-red-500 text-white rounded-md ml-3 mt-2"
      >
        Delete
        <FontAwesomeIcon className="text-white ml-2" icon={faTrash} />
      </button>
    </>
  ) : (
    <>
      <td className="p-4 font-bold">{inventory.name}</td>
      <td>{inventory.supplier}</td>
      <td>{inventory.price}</td>
      <td>{inventory.quantity}</td>
      <td>{inventory.sold}</td>
      <td className="w-32">
        <button
          className="px-3 py-2 bg-green-300 rounded-md"
          onClick={() => navigate(`/inventory/${inventory._id}`)}
        >
          Manage
        </button>
      </td>
      <td className="w-36 pr-3">
        <button
          onClick={() => handleDeleteInventory(inventory._id)}
          className="bg-red-500 rounded-md text-white px-7 py-2"
        >
          Delete
          <FontAwesomeIcon className="text-white ml-2" icon={faTrash} />
        </button>
      </td>
    </>
  );
};

export default InventoryTableData;
