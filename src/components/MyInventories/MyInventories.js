import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import DataLoading from "../DataLoading/DataLoading";
import Manage from "../Manage/Manage";

const MyInventories = () => {
  const [inventories, setInventories] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);
  const [user] = useAuthState(auth);

  useEffect(() => {
    setDataLoading(true);
    const url = `http://localhost:5000/inventoryByEmail?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setInventories(data);
        setDataLoading(false);
      });
  }, [user]);

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
