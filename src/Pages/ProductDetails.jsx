import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const [productData, setProductData] = useState({});
  const { id } = useParams();
  const fetchingData = async () => {
    // setLoading(true);
    let res = await axios(`https://fakestoreapi.com/products/${id}`);
    setProductData(res.data);
  };
  console.log(productData);
  useEffect(() => {
    fetchingData();
  }, []);
  return <div>{productData.title}</div>;
}

export default ProductDetails;
