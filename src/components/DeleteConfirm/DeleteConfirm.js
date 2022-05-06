import React from "react";

const DeleteConfirm = ({ setConfirmOpen }) => {
  return (
    <div className="fixed bg-gray-900 bg-opacity-50 top-0 min-h-screen w-full flex justify-center items-center">
      <div className=" rounded-md p-5 md:w-[500px]">
        <div className="bg-white p-5 rounded-md">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-xl font-bold ">Delete Inventory?</h1>
            <button
              onClick={() => setConfirmOpen(false)}
              className="text-2xl -mt-5"
            >
              {" "}
              &times;
            </button>
          </div>
          <p className="text-gray-700">
            Are you sure you want to delete this inventory?
          </p>
          <div className="flex justify-end mt-5">
            <button
              onClick={() => setConfirmOpen(false)}
              className="bg-red-500 px-7 py-2 rounded text-white mr-2 "
            >
              No
            </button>
            <button className="bg-green-500 px-7 py-2 rounded text-white">
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirm;
