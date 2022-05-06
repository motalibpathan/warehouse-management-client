import { useEffect, useState } from "react";

const useInventories = (size) => {
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    let url;
    if (size) {
      url = `http://localhost:5000/inventory?size=${size}`;
    } else {
      url = `http://localhost:5000/inventory`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, [size]);

  return [inventories, setInventories];
};

export default useInventories;
