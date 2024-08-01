import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../Utilility/Firebase";
import { getDoc, doc } from "firebase/firestore";

const ShowProducts = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(db, "products", productId);
        const productSnap = await getDoc(productRef);

        if (productSnap.exists()) {
          setProduct(productSnap.data());
        } else {
          console.log("There is no such product!");
        }
      } catch (error) {
        console.error("Error while fetching the product data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>No product found</div>;
  }

  return (
    <div className="pt-10">
        <div className="flex justify-center items-center h-screen mt-10 pb-10">
      <div className="border shadow-2xl w-1/2  flex flex-col justify-center items-center">
     
        <div className="mt-20 w-full text-center justify-center flex h-64">
          <img src={product.imageUrl} alt="productImage" className="bg-black shadow-inner" />
        </div>
        <div className="flex w-full p-4">
          <div className="flex-1 p-9">
            <h3 className="text-black font-bold text-2xl m-5">{product.brand} ({product.year}) </h3>
          
            {/* <h4>Year: {product.year}</h4> */}
            <p>No: of owners: <span className="text-black font-bold text-xl">{product.numberOfOwners}</span></p>
           <h4 className="text-black font-bold mt-5 mb-2">Description</h4>
            <p>{product.description}</p>
          </div>
          <div className="flex-1 text-black ml-5 p-9 mt-10">
            <p className="text-xl font-bold">Price: INR <span className="text-3xl font-bold">{product.price}</span>  </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ShowProducts;
