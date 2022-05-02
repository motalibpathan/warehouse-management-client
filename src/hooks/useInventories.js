import { useEffect, useState } from "react";

const useInventories = (size) => {
  const [inventories, setInventories] = useState([]);
  let url;
  if (size) {
    url = `http://localhost:5000/inventory?size=${size}`;
  } else {
    url = `http://localhost:5000/inventory`;
  }
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, [url]);

  return [inventories, setInventories];
};

export default useInventories;
