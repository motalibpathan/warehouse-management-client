import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import DataLoading from "../DataLoading/DataLoading";
import Manage from "../Manage/Manage";

const MyInventories = () => {
  const [inventories, setInventories] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    setDataLoading(true);
    const url = `https://enigmatic-harbor-04768.herokuapp.com/inventoryByEmail?email=${user.email}`;
    fetch(url, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => {
        console.log(res.status);
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          navigate("/login");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setInventories(data);
        setDataLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user, navigate]);

  return (
    <>
      <div className="md:container mx-auto px-5 mt-5">
        <h1 className="text-2xl font-bold">My Inventories: {user?.email}</h1>
      </div>
      {dataLoading ? (
        <DataLoading />
      ) : (
        <Manage inventories={inventories} setInventories={setInventories} />
      )}
    </>
  );
};

export default MyInventories;
