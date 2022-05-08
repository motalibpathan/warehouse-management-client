import React from "react";

const About = () => {
  return (
    <div className="md:w-3/5 mx-auto p-5 md:flex md:space-x-5 space-y-5">
      <div className="md:w-1/2 w-full">
        <p className="uppercase text-red-500">About us</p>
        <h1 className="text-3xl font-bold my-3">World largest automotive </h1>
        <p>
          Shop new & used cars, research & compare models, find local
          dealers/sellers,calculate payments, value your car, sell/trade in your
          car & more.
        </p>
      </div>
      <div className="md:w-1/2 w-full ">
        <img
          className="w-full rounded-md"
          src="https://i.ibb.co/LrzcTGK/about-car-1.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
