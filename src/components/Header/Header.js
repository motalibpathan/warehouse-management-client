import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user] = useAuthState(auth);

  const navLinks = (
    <>
      <Link
        className="no-underline text-gray-800 font-semibold hover:text-gray-600"
        to="/about"
      >
        About us
      </Link>
      <Link
        className="no-underline text-gray-800 font-semibold hover:text-gray-600"
        to="/blogs"
      >
        Blogs
      </Link>
      <Link
        className="no-underline text-gray-800 font-semibold hover:text-gray-600"
        to="/blogs"
      >
        Cars
      </Link>
      <Link
        className="no-underline text-gray-800 font-semibold hover:text-gray-600"
        to="/blogs"
      >
        Services
      </Link>
      {!user && (
        <>
          <Link
            className="no-underline text-gray-800 font-semibold hover:text-gray-600"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="no-underline text-gray-800 font-semibold hover:text-gray-600"
            to="/signup"
          >
            Sign up
          </Link>
        </>
      )}
      {user && (
        <>
          <span className="font-bold">
            {userIcon} {user?.displayName}
          </span>
          <button
            onClick={() => signOut(auth)}
            className="no-underline text-gray-800 font-semibold md:px-7 md:bg-rose-500 bg-white py-2 md:text-white rounded-md"
          >
            Sign out
          </button>
        </>
      )}
    </>
  );

  return (
    <div className="shadow-xl">
      <div className="md:container mx-auto ">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold no-underline text-gray-800 hover:text-gray-600"
            >
              <img
                width={150}
                src="https://i.ibb.co/SNp2mK9/carmax-logo-black.png"
                alt=""
              />
            </Link>
          </div>
          <nav className="hidden md:block space-x-6">{navLinks}</nav>
          <button
            type="button"
            aria-label="Toggle mobile menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded md:hidden focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50"
          >
            <MenuAlt4Svg menuOpen={menuOpen} />
          </button>
        </div>
        {menuOpen && (
          <nav className="p-4 flex flex-col space-y-3 md:hidden">
            {navLinks}
          </nav>
        )}
      </div>
    </div>
  );
};

const MenuAlt4Svg = ({ menuOpen }) =>
  !menuOpen ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
const userIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="inline h-6 w-6 "
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export default Header;