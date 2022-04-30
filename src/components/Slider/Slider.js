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
        <h1 className="font-extrabold text-6xl font-[system-ui]">DOMINATE</h1>
        <p className="text-5xl">THE INTERNET</p>
        <div className="w-[350px]">
          <div className="border-t-4 border-blue-300 my-2"></div>
          <p className="text-3xl">Attract, Engage & Convert </p>
          <p className="text-6xl text-blue-300 text-center font-satisfy  ">
            more
          </p>
          <p className="text-3xl font-[system-ui]">
            qualified, vehicle shoppers{" "}
          </p>
          <div className="border-t-4 border-blue-300 my-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
