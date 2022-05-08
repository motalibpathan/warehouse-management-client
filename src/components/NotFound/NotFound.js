import React from "react";
import { Link } from "react-router-dom";
import notFoundImg from "../../images/not-found.jpg";

const NotFound = () => {
  return (
    <div className="md:container mx-auto p-5 flex justify-center">
      <div>
        <img src={notFoundImg} alt="" />
        <h1 className="text-3xl text-red-500 font-bold mt-5 text-center">
          Page not found!
        </h1>
        <div className="flex justify-center mt-5">
          <Link
            to="/"
            className="text-center py-2 px-7 bg bg-red-500 rounded-md text-white"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
