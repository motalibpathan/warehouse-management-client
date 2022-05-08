import { useEffect, useState } from "react";

const useInventories = (size) => {
  const [inventories, setInventories] = useState([]);
  const [dataIsLoading, setDataIsLoading] = useState(false);

  useEffect(() => {
    setDataIsLoading(true);
    let url;
    if (size) {
      url = `https://enigmatic-harbor-04768.herokuapp.com/inventory?size=${size}`;
    } else {
      url = `https://enigmatic-harbor-04768.herokuapp.com/inventory`;
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
