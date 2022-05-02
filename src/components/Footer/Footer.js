import {
  faFacebook,
  faGoogle,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: `url(https://i.ibb.co/jV6gsD1/ab-footer-bg.jpg)`,
      }}
      className="w-full bg-cover bg-center mt-14 text-white"
    >
      <div className="w-full  bg-gray-900 bg-opacity-90">
        <div className="md:container mx-auto p-5 md:grid md:grid-cols-6 lg:grid-cols-12 ">
          <div className="col-span-3 mt-5">
            <img
              width={200}
              src="https://i.ibb.co/gyD13Nm/carmax-logo-white.png"
              alt=""
            />
            <p className="mt-5">
              <FontAwesomeIcon
                className="mr-2 h-5 w-5 text-red-500 "
                icon={faLocationDot}
              />
              Wave, Via Habro Berennio 22/b 52100
            </p>
            <p className="mt-5 flex items-center">
              <FontAwesomeIcon
                className="mr-2 h-5 w-5 text-red-500 "
                icon={faEnvelope}
              />
              <span className="underline inline-block">maxcar@gmail.com</span>
            </p>
            <p className="mt-5">
              <FontAwesomeIcon
                className="mr-2 h-5 w-5 text-red-500 "
                icon={faPhone}
              />
              <span>095 1854 655 (Toll Free)</span>
            </p>
          </div>
          <div className="col-span-2 mt-5">
            <h1 className="font-bold text-2xl mb-7">Our Info</h1>
            <ul className="space-y-3">
              <li className="hover:text-red-500 cursor-pointer duration-500">
                About us
              </li>
              <li className="hover:text-red-500 cursor-pointer duration-500">
                Our Services
              </li>
              <li className="hover:text-red-500 cursor-pointer duration-500">
                Our Shop
              </li>
              <li className="hover:text-red-500 cursor-pointer duration-500">
                Blog
              </li>
              <li className="hover:text-red-500 cursor-pointer duration-500">
                Contact us
              </li>
            </ul>
          </div>
          <div className="col-span-3 mt-5">
            <h1 className="font-bold text-2xl mb-7">Quick Link</h1>
            <ul className="space-y-3">
              <li className="hover:text-red-500 cursor-pointer duration-500">
                Privacy Policy
              </li>
              <li className="hover:text-red-500 cursor-pointer duration-500">
                Terms and Conditions
              </li>
              <li className="hover:text-red-500 cursor-pointer duration-500">
                Copyright Notification
              </li>
              <li className="hover:text-red-500 cursor-pointer duration-500">
                Help Center
              </li>
              <li className="hover:text-red-500 cursor-pointer duration-500">
                Forums
              </li>
            </ul>
          </div>
          <div className="md:col-span-3 lg:col-span-4 mt-5">
            <h1 className="font-bold text-2xl mb-7">Subscribe Us</h1>
            <div className=" relative md:w-4/5 w-full">
              <input
                className="py-3 px-5 rounded-full w-full bg-gray-600 outline-0"
                type="email"
                placeholder="Your Email"
              />
              <button className="right-1 top-1 absolute py-2 px-7 bg-red-500 rounded-full cursor-pointer">
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>

            <ul className="flex space-x-5 mt-5 md:justify-start justify-center">
              <li>
                <FontAwesomeIcon
                  className="bg-blue-500 rounded-full p-2 w-7 h-7 hover:cursor-pointer"
                  icon={faFacebook}
                />
              </li>
              <li>
                <FontAwesomeIcon
                  className="bg-red-500 rounded-full p-2 w-7 h-7 hover:cursor-pointer"
                  icon={faYoutube}
                />
              </li>
              <li>
                <FontAwesomeIcon
                  className="bg-blue-400 rounded-full p-2 w-7 h-7 hover:cursor-pointer"
                  icon={faTwitter}
                />
              </li>
              <li>
                <FontAwesomeIcon
                  className="bg-red-500 rounded-full p-2 w-7 h-7 hover:cursor-pointer"
                  icon={faGoogle}
                />
              </li>
            </ul>
          </div>
        </div>
        <p className="text-gray-400 text-center mt-10 pb-5">
          Copyright All right reserved by - <span>CarMax</span> &copy;{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
