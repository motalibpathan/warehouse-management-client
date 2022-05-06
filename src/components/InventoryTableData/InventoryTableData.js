import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const InventoryTableData = ({
  inventory,
  isMobileView,
  handleDeleteInventory,
}) => {
  return isMobileView ? (
    <>
      <h1 className="font-bold">Name: {inventory.name}</h1>
      <p className="my-1"> Supplier: {inventory.supplier}</p>
      <p>Price: ${inventory.price}</p>
      <p className="my-1">Quantity: {inventory.quantity}</p>
      <p>Sold: {inventory.sold}</p>
      <button
        onClick={() => handleDeleteInventory(inventory._id)}
        className="bg-red-500 rounded-full h-8 w-8 mt-2"
      >
        <FontAwesomeIcon className="text-white" icon={faTrash} />
      </button>
    </>
  ) : (
    <>
      <td className="p-4 font-bold">{inventory.name}</td>
      <td>{inventory.supplier}</td>
      <td>{inventory.price}</td>
      <td>{inventory.quantity}</td>
      <td>{inventory.sold}</td>
      <td>
        <button
          onClick={() => handleDeleteInventory(inventory._id)}
          className="bg-red-500 rounded-full h-8 w-8"
        >
          <FontAwesomeIcon className="text-white" icon={faTrash} />
        </button>
      </td>
    </>
  );
};

export default InventoryTableData;
