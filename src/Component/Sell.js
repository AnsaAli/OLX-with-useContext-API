import React, { useEffect, useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";

const Sell = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    console.log("inside sell");
  }, []);
  const handleCategory = (category) => {
    console.log("handlecategory");
    setSelectedCategory(category);
  };

  const showCategoryList = (category) => {
    if (category === "Cars") {
      console.log("showcategory");
      return (
        <>
          <ul className="border border-black-100 ">
            <li className="text-black no-underline ml-96 -mt-[393px] cursor-pointer p-3 pl-4 bg-gray-200  w-full">
              <Link to="/cars" className="text-black no-underline">
                Cars
              </Link>
            </li>
          </ul>
        </>
      );
    }

    return null;
  };
  return (
    <div className="items-center justify-center  mt-32">
      <h1 className="text-2xl text-center font-bold mb-4">POST YOUR AD</h1>
      <div className="border border-black-100 w-1/2 ml-96 pt-3">
        <h3 className="font-bold mb-4 ml-2">CHOOSE A CATEGORY</h3>
        <p></p>
        <div className="border border-black-100 mt-5 w-2/4">
          <table className="ml-0 w-full ">
            <tbody>
              <tr className="border-b ">
                <td
                  className="p-3 hover:bg-gray-200 cursor-pointer flex justify-between items-center"
                  onClick={() => handleCategory("Cars")}
                >
                  Cars <NavigateNextIcon />{" "}
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-3  hover:bg-gray-200 cursor-pointer flex justify-between items-center">
                  Properties <NavigateNextIcon />
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-3  hover:bg-gray-200 cursor-pointer flex justify-between items-center">
                  Mobile <NavigateNextIcon />
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-3  hover:bg-gray-200 cursor-pointer flex justify-between items-center">
                  Jobs <NavigateNextIcon />
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-3  hover:bg-gray-200 cursor-pointer flex justify-between items-center">
                  Bikes <NavigateNextIcon />
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-3  hover:bg-gray-200 cursor-pointer flex justify-between items-center">
                  Electronics & Appliances <NavigateNextIcon />
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-3  hover:bg-gray-200 cursor-pointer flex justify-between items-center">
                  Commercial Vehicles & Spares <NavigateNextIcon />
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-3  hover:bg-gray-200 cursor-pointer flex justify-between items-center">
                  Furniture <NavigateNextIcon />
                </td>
              </tr>
            </tbody>
          </table>
          {selectedCategory && showCategoryList(selectedCategory)}
        </div>
      </div>
    </div>
  );
};

export default Sell;
