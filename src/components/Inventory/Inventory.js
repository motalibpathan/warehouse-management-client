import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import DataLoading from "../DataLoading/DataLoading";
import Loading from "../Loading/Loading";

const Inventory = () => {
  const { id } = useParams();
  const [inventory, setInventory] = useState({});
  const [loading, setLoading] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);

  let bgColor;
  if (inventory.quantity > 10) {
    bgColor = "bg-green-200";
  } else {
    bgColor = "bg-red-200";
  }

  useEffect(() => {
    setDataLoading(true);
    fetch(`https://enigmatic-harbor-04768.herokuapp.com/inventory/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setInventory(data);
        setDataLoading(false);
      });
  }, [id]);

  const handleDelivered = (id) => {
    if (inventory.quantity < 1) {
      toast.warning("stock out!");
    } else {
      updateQuantity(id, 1, true);
    }
  };

  const handleRestock = (e) => {
    e.preventDefault();
    let newStock = e.target.quantity.value;

    if (newStock <= 0 || newStock === "") {
      toast.error("Quantity should not be empty, zero or negative");
    } else {
      newStock = parseInt(newStock);
      updateQuantity(id, newStock, false);
      e.target.reset();
    }
  };

  const updateQuantity = (id, quantity, isSold) => {
    setLoading(true);
    let newSold, newQuantity;

    if (isSold) {
      newQuantity = +inventory.quantity - quantity;
      newSold = +inventory.sold + 1;
    } else {
      newQuantity = +inventory.quantity + quantity;
      newSold = +inventory.sold;
    }

    fetch(`https://enigmatic-harbor-04768.herokuapp.com/inventory/${id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ quantity: newQuantity, sold: newSold }),
    })
      .then((res) => res.json())
      .then((data) => {
        const newInventory = {
          ...inventory,
          sold: newSold,
          quantity: newQuantity,
        };
        setInventory(newInventory);
        setLoading(false);
        console.log(data);
      });
  };

  return (
    <>
      {loading && <Loading />}
      {dataLoading && <DataLoading />}
      {inventory._id && (
        <div className="md:container mx-auto p-5 md:flex md:space-x-10 md:space-y-0 space-y-5 mt-7">
          <div className="md:w-2/5 w-full">
            <img className="w-full rounded" src={inventory.img} alt="" />
          </div>
          <div className="md:w-3/5 w-full">
            <h1 className="font-bold text-xl">id: {inventory._id}</h1>
            <h1 className="font-bold text-3xl">{inventory.name}</h1>
            <p className="my-2">
              Supplier: <span className="font-bold">{inventory.supplier}</span>
            </p>
            <p className="my-3">{inventory.desc}</p>

            <p
              className={`${bgColor} rounded-full py-1 px-5 inline-block mr-3`}
            >
              Quantity: {inventory.quantity}
            </p>
            <p className="bg-blue-300 rounded-full py-1 px-5 inline-block">
              Sold: {inventory.sold}
            </p>

            <p className="text-2xl text-red-500 font-bold my-3">
              Price: ${inventory.price}
            </p>

            <button
              onClick={() => handleDelivered(id)}
              className="py-2 px-7 mt-2 mb-4 bg-red-500 text-white rounded-md border-2 border-red-500 hover:bg-white hover:text-red-500 duration-500"
            >
              Delivered
            </button>

            <form onSubmit={handleRestock}>
              <input
                className="w-1/2 border-green-500 border-2 rounded p-2 mr-2"
                type="number"
                name="quantity"
                placeholder="Restock Quantity"
              />
              <input
                type="submit"
                className="py-2 px-7 mt-2 mb-4 bg-green-500 text-white rounded-md border-2 border-green-500 hover:bg-white hover:text-green-500 duration-500"
                value={"Restock"}
              />
            </form>
          </div>
        </div>
      )}
      {!dataLoading && !inventory._id && (
        <h1 className="text-center text-2xl font-bold mt-5">
          Inventory not Found by this id
        </h1>
      )}
    </>
  );
};

export default Inventory;
