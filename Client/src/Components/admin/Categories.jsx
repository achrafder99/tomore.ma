import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdAdd } from "react-icons/md";

const Categories = () => {
  const [AllCategoris, setAllCategories] = useState([]);
  const [toggle,setToggle] = useState(false)

  const AddCategories = async () => {
    setToggle(!toggle)
  };

  const GettingAllCategories = async () => {
    const data = await axios.get("/Categories");
    setAllCategories(data.data);
  };

  useEffect(() => {
    GettingAllCategories();
  }, []);


  return (
    <div className="p-8 items-center  w-[80%] right-0 absolute mx-4 h-full">
      <h1 className="font-extrabold text-2xl mb-8">List Of Categories</h1>
      <button
        className="left-0 bg-[#22d3ee] px-6 py-4 rounded-md shadow-2xl mb-8 absolutes text-white font-semibold"
        onClick={() => AddCategories()}
      >
        {" "}
        <span className="flex items-center gap-[6px]">
          {" "}
          <MdAdd />
          ajouter Categories
        </span>
      </button>
     {toggle ?  <div className="flex w-[26%]   p-2 contanier  animated">

        <form action="" className="grid  gap-8 w-[100%]">
          <input type="text" name="" id="" className="px-4 py-[8px] rounded-md" placeholder="nom categorie" />
          <button className="bg-[green] px-4 py-4 underline text-white font-semibold mb-6">add</button>
        </form>
        
      </div> : null}
      <div className="List_Categories">
        <table className="w-full">
          <thead className="bg-grey-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-4 text-sm font-semibold tracking-wide  text-center">
                Id
              </th>
              <th className="p-4 text-sm font-semibold tracking-wide   text-center">
                Nom Categories
              </th>

              <th className="p-4 text-sm font-semibold tracking-wide   text-center">
                action
              </th>
            </tr>
          </thead>
          <tbody>
            {AllCategoris.map((cat, index) => {
              return (
                <tr className="bg-white shadow-2xl text-center" key={index}>
                  <td className="p-4 text-sm text-gray-500">{cat._id}</td>
                  <td className="p-4 text-sm text-gray-500">{cat.name}</td>
                  <td className="p-4 text-sm text-gray-500">
                    <div className="icons">
                      <span className="">
                        <button className="m-2">
                          <AiFillDelete color={"red"} />
                        </button>
                      </span>
                      <span>
                        <button className="m-2">
                          <AiFillEdit color={"green"} />
                        </button>
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Categories;
