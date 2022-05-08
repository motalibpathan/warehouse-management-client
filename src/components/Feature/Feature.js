import { faCar, faGift, faTools } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Feature = () => {
  const featureData = [
    {
      id: 1,
      title: "Free Shipping",
      desc: "Customers do not have to pay an additional shipping charge.",
      icon: faCar,
    },
    {
      id: 2,
      title: "5 Servicing",
      desc: " 5 Times free servicing with full support.",
      icon: faTools,
    },
    {
      id: 3,
      title: "24/7 Help Center",
      desc: " Customers do not have to pay an additional shipping charge.",
      icon: faCar,
    },
    {
      id: 4,
      title: "Sure Gift Pack",
      desc: " If buyer buy a new car and get a free gift a free shopping voucher",
      icon: faGift,
    },
  ];
  return (
    <div
      className="my-7 text-white bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url(https://i.ibb.co/9p608z8/b-feature-bg.jpg)",
      }}
    >
      <div className="md:w-3/5 w-full mx-auto">
        <div className="grid lg:grid-cols-4 grid-cols-2 py-14">
          {featureData.map((feature) => (
            <div key={feature.id} className="p-5 group">
              <FontAwesomeIcon
                className="text-3xl p-7 border-2 rounded-full border-red-500 "
                icon={feature.icon}
              />
              <h1 className="text-2xl font-bold my-5 group-hover:text-red-500 duration-500">
                {feature.title}
              </h1>
              <p className="text-[16px]">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
