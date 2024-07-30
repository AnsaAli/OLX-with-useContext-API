import React from "react";

const AddProductDetails = () => {
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
            <h3 className="font-bold">INCLUDE SOME DEATAILS</h3>
            <form className="mt-4">
              <label className="">Brand*</label> <br />
              <input
                className="p-2 mt-2 mb-5 border border-black"
                type=""
              />{" "}
              <br />
              <label>Year*</label> <br />
              <input className="p-2 mt-2 mb-5 border border-black" /> <br />
              <label>Fuel*</label> <br />
              <input className="p-2 mt-2 mb-5 border border-black" /> <br />
              <label>Transmission*</label> <br />
              <input /> <br />
              <label>No of owners*</label> <br />
              <input className="p-2 mt-2 mb-5 border border-black" /> <br />
              <label>Description</label> <br />
              <input className="p-2 mt-2 mb-5 border border-black" /> <br />
              <hr className="p-0 m-0" />
              <div>
                <h3 className="font-bold mt-5 mb-2">SET A PRICE</h3>
                <label>Price*</label> <br />
                <input className="p-2 mt-2 mb-5 border border-black" />
              </div>
              <hr/>
              <div className="font-bold mt-5">
                <h3>UPLOAD UP TO 20 PHOTOS</h3>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductDetails;
