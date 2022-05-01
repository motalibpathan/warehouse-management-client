import React from "react";

const Slider = () => {
  const sliderStyle = {
    backgroundImage: "url(https://i.ibb.co/7VFbPWr/slideshow1.jpg)",
  };
  return (
    <div
      style={sliderStyle}
      className="w-full h-[600px] bg-cover bg-center flex items-center"
    >
      <div className="text-white w-3/5 mx-auto">
        <h1 className="font-extrabold md:text-6xl font-[system-ui] text-4xl">
          DOMINATE
        </h1>
        <p className="md:text-5xl text-3xl">THE INTERNET</p>
        <div className="md:w-[350px]">
          <div className="border-t-4 border-red-400 my-2"></div>
          <p className="md:text-3xl text-xl">Attract, Engage & Convert </p>
          <p className="text-6xl text-red-400 text-center font-satisfy  ">
            more
          </p>
          <p className="md:text-3xl text-xl font-[system-ui]">
            qualified, vehicle shoppers{" "}
          </p>
          <div className="border-t-4 border-red-400 my-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
