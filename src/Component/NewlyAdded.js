import React, { useEffect, useState } from "react";
import { db } from "../Utilility/Firebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

const NewlyAdded = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        // Get a reference to the "products" collection
        const productsCollection = collection(db, "products");
        // Fetch all documents from the "products" collection
        const querySnapshot = await getDocs(productsCollection);
        console.log("querySnapshot", querySnapshot);
        
        // Map the fetched documents into an array of product data
        const productsDatas = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(productsDatas);
        setProducts(productsDatas);
      } catch (error) {
        console.error("Error fetching the products.", error);
      }
    };
    fetchProductDetails();
  }, []);

  return (
    <div className="ml-32 mr-32">
      <h1 className="text-2xl mt-20 mb-5 font-bold">Newly Added</h1>
      <div className="flex items-center">
        <div className="card_container bg-white grid grid-cols-4 gap-4">
          {products.map((product) => (
            <Link key={product.id} to={`/showProduct/${product.id}`}>
              <div className="bg-white border border-gray-50 shadow-md p-5">
                <div className="card-image">
                  <img
                    src={product.imageUrl}
                    alt={product.brand}
                    className="h-52"
                  />
                </div>
                <div className="mt-6">
                  <p>Brand: {product.brand}</p>
                  <p>Year: {product.year}</p>
                  <p>Price: INR{product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewlyAdded;
