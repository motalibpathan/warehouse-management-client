import { useEffect, useState } from "react";

const useInventories = (size) => {
  const [inventories, setInventories] = useState([]);
  const [dataIsLoading, setDataIsLoading] = useState(false);

  useEffect(() => {
    setDataIsLoading(true);
    let url;
    if (size) {
      url = `http://localhost:5000/inventory?size=${size}`;
    } else {
      url = `http://localhost:5000/inventory`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setInventories(data);
        setDataIsLoading(false);
      });
  }, [size]);

  return [inventories, setInventories, dataIsLoading, setDataIsLoading];
};

export default useInventories;
