import React, { useRef, useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { storage, db } from "../Utilility/Firebase"; 
import { useAuth } from "../Utilility/AuthContext";
import { useNavigate } from "react-router-dom";

const AddProductDetails = () => {
  const { currentUser } = useAuth();
  const brandRef = useRef(null);
  const yearRef = useRef(null);
  const fuelRef = useRef(null);
  const numberOfOwnersRef = useRef(null);
  const descriptionRef = useRef(null);
  const priceRef = useRef(null);
  const date = new Date();

  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [isUploading, setIsUploading] = useState(false);


  const handleImageUpload = (file) => {
    if (file) {
      setIsUploading(true);
      const storageRef = ref(storage, `images/${file.name}`); // Generate a unique file name
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Optional: Track upload progress
        },
        (error) => {
          console.error("Upload failed:", error);
          setIsUploading(false);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((url) => {
              console.log("Image URL in getDownload:", url); 
              setImageUrl(url);
              console.log('After setting url imageUrl',imageUrl)
              setIsUploading(false);
            })
            .catch((error) => {
              console.error("Error getting download URL:", error);
              setIsUploading(false);
            });
        }
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!currentUser) {
      console.error("No user is currently logged in.");
      return;
    }

    const formData = {
      brand: brandRef.current.value,
      year: yearRef.current.value,
      fuel: fuelRef.current.value,
      numberOfOwners: numberOfOwnersRef.current.value,
      description: descriptionRef.current.value,
      price: priceRef.current.value,
      imageUrl: imageUrl, // Store the image URL in Firestore
      userId: currentUser.uid,
      createdAt : date.toString()
    };

    // Save the form data to Firestore
    addDoc(collection(db, "products"), formData)
      .then(() => {
        console.log("Document successfully written!");
        navigate('/home')
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };

  return (
    <div className="items-center justify-center w-1/2 ml-[300px] mt-10">
      <div className="">
        <h1 className="items-center justify-center font-bold flex text-2xl mb-5 ">
          POST YOUR AD
        </h1>
        <div className="border border-black ">
          <div className="">
            <h3 className="font-bold p-3 text-xl">SELECTED CATEGORY</h3>
          </div>
          <hr />
          <div className="p-6">
            <h3 className="font-bold">INCLUDE SOME DETAILS</h3>

            <form className="mt-4" onSubmit={handleSubmit}>
              <label className="">Brand*</label> <br />
              <input
                className="p-2 mt-2 mb-5 border border-black w-1/2"
                type="text"
                ref={brandRef}
              />
              <br />
              <label>Year*</label> <br />
              <input
                className="p-2 mt-2 mb-5 border border-black  w-1/2"
                type="number"
                ref={yearRef}
              />
              <br />
              <label>Fuel*</label> <br />
              <input
                className="p-2 mt-2 mb-5 border border-black  w-1/2"
                type="text"
                ref={fuelRef}
              />
              <br />
              <label>No of owners*</label> <br />
              <input
                className="p-2 mt-2 mb-5 border border-black  w-1/2"
                type="number"
                ref={numberOfOwnersRef}
              />
              <br />
              <label>Description</label> <br />
              <input
                className="p-2 mt-2 mb-5 border border-black  w-1/2"
                type="text"
                ref={descriptionRef}
              />
              <br />
              <hr className="p-0 m-0" />
              <div>
                <h3 className="font-bold mt-5 mb-2">SET A PRICE</h3>
                <label>Price*</label> <br />
                <input
                  className="p-2 mt-2 mb-5 border border-black  w-1/2"
                  type="number"
                  ref={priceRef}
                />
              </div>
              <hr />
              <div className="font-bold mt-5">
                <h3>UPLOAD PHOTOS</h3>
                <img
                  alt="productImage"
                  width="200px"
                  height="200px"
                  src={image ? URL.createObjectURL(image) : " "}
                />
                <input
                  className="p-2 mt-2 mb-5 border border-black w-1/2"
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    setImage(file);
                    handleImageUpload(file);
                  }}
                  accept="image/*"
                />
              </div>
              <button
                type="submit"
                className="p-2 mt-4 bg-blue-500 text-white rounded"
                
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductDetails;
