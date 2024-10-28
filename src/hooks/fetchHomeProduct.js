import React, { useEffect, useState } from "react";

const localProductList = [
    {
      id: "1A",
      title: "Colorful Funiture",
      price: "$200",
      path: require("../../assets/images/fn3.jpg"),
    },
    {
      id: "1B",
      title: "Comfy Sofa",
      price: "$400",
      path: require("../../assets/images/fn2.jpg"),
    },
    {
      id: "1C",
      price: "$2,000",
      title: "IKEA Special",
      path: require("../../assets/images/fn1.jpg"),
    },
  ];



const fetchHomeProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  console.log("this hook is being called");

  const fetchData = async() => {
    try {
      setIsLoading(true);
      //call network data
      const timer = new Promise((resolve) => {
        setTimeout(() => {
            resolve('product1, product2, product3, product4')
        }, 800)
        return () => clearTimeout(timer);
      });
      const result = await timer;
      setData(localProductList);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return { data, isLoading, error}
};

export default fetchHomeProduct;
