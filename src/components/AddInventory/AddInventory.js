import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const AddInventory = () => {
  const [loading, setLoading] = useState(false);
  const [user] = useAuthState(auth);
  const handleAddInventory = (e) => {
    setLoading(true);
    e.preventDefault();
    const name = e.target.name.value;
    const supplier = e.target.supplier.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const img = e.target.img.value;
    const desc = e.target.desc.value;
    const inventory = {
      email: user.email,
      name,
      img,
      desc,
      price,
      quantity,
      supplier,
      sold: 0,
    };

    fetch(`https://enigmatic-harbor-04768.herokuapp.com/inventory`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(inventory),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success("Successfully added!");
        e.target.reset();
        setLoading(false);
      });
  };
  return (
    <>
      {loading && <Loading />}
      <div className="md:container mx-auto p-5">
        <h1 className="text-3xl font-bold my-3">Add inventory</h1>
        <form
          onSubmit={handleAddInventory}
          className=" bg-gray-100 rounded-lg p-3 text-black"
        >
          <input
            className="w-full p-3 border my-3"
            type="text"
            name="name"
            placeholder="Inventory Name"
            required
          />
          <input
            className="w-full p-3 border my-3"
            type="text"
            name="supplier"
            placeholder="Supplier "
            required
          />
          <textarea
            className="w-full p-3 border my-3"
            name="desc"
            id=""
            cols="30"
            rows="5"
            placeholder="Description"
            required
          ></textarea>
          <input
            className="w-full p-3 border my-3"
            type="text"
            name="img"
            placeholder="Image url"
            required
          />
          <input
            className="w-full p-3 border my-3"
            type="text"
            name="price"
            placeholder="Price"
            required
          />
          <input
            className="w-full p-3 border my-3"
            type="number"
            name="quantity"
            placeholder="Quantity"
            required
          />
          <button className="p-3 border my-3 bg-red-500 text-white rounded-md ">
            <FontAwesomeIcon className="mr-2" icon={faCheck} />
            Add Inventory
          </button>
        </form>
      </div>
    </>
  );
};

export default AddInventory;
