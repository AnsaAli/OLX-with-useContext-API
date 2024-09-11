import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../Utilility/Firebase";
import { getDoc, doc } from "firebase/firestore";

const ShowProducts = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProductAndUser = async () => {
      try {
        const productRef = doc(db, "products", productId);
        const productSnap = await getDoc(productRef);

        if (productSnap.exists()) {
            //to ftech products
          const productData = productSnap.data();
          console.log('productData: ',productData)
          setProduct(productData);

          //to fetch corresponidng user data
          const userref =   doc(db, "users",productData.userId);
          console.log('User Ref:', userref.path);
          const userSnap = await getDoc(userref);
          if(userSnap.exists()){
            setUser(userSnap.data());
          }else{
            console.log("No user found")
          }

        } else {
          console.log("There is no such product!");
        }
      } catch (error) {
        console.error("Error while fetching the product data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProductAndUser();
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
            <img
              src={product.imageUrl}
              alt="productImage"
              className="bg-black shadow-inner"
            />
          </div>
          <h3 className="text-black font-bold text-2xl mt-5 mb-5">
                {product.brand} ({product.year}){" "}
              </h3>
          <div className="flex w-full p-4 ">
            
            <div className="flex-1 p-9 border shadow-sm ml-8 ">
              {/* <h3 className="text-black font-bold text-xl mt-5 mb-5">
                {product.brand} ({product.year}){" "}
              </h3> */}

              {/* <h4>Year: {product.year}</h4> */}
              <p>
                No: of owners:{" "}
                <span className="text-black font-bold text-xl">
                  {product.numberOfOwners}
                </span>
              </p>
              <h4 className="text-black font-bold mt-5 mb-2">Description</h4>
              <p>{product.description}</p>
            </div>
            <div className="flex-1 text-black ml-5 p-9 mt-10 ">
              <div className="border shadow-sm p-5">
                <p className="text font-bold">
                  Price: INR{" "}
                  <span className="text-3xl font-bold">{product.price}/-</span>{" "}
                </p>
              </div>
              <div className="border shadow-sm mt-10 p-5">
                <p>Contact Details:</p>
                {user ? (
                  <div>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                  
                  </div>
                ) : (
                  <p>Contact details not available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowProducts;
