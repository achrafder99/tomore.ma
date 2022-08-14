import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cover1 from "./Cover1";
import Navbar from "./Navbar";
import Panier from "./Panier";

const Details = () => {
  const { id } = useParams();
  const [singleProduct, setData] = useState({});
  const [ProductSimilar, SetProductSimilar] = useState([]);

  const getSingleProduct = async () => {
    const data = await axios({
      url: `/market/details/${id}`,
      method: "get",
    });

    setData(data.data.product);
    SetProductSimilar(data.data.productSimilar);
  };
  useEffect(() => {
    // console.log(singleProduct.title);
    getSingleProduct();
    document.title = singleProduct.title;
  }, []);
  return (
    <>
      <div className="details flex justify-between container  mx-[22rem] mt-2 ">
        <div className="detailsShooping grid grid-cols-2">
          <div className="detail_product">
            <section className="details flex mb-4">
              <div className="imgSection  w-[500px] mt-[8rem] mr-[4%]">
                <img
                  className="rounded-md"
                  src={`http://localhost:8080/uploads/${singleProduct.imageUrl}`}
                  alt=""
                  width={"100%"}
                />
              </div>
              <div className="detailsPrice my-[8rem] ">
                <h1 className="w-[350px] font-extrabold text-2xl mb-4 tracking-wider">
                  {singleProduct.title}
                </h1>
                <h2 className="w-[200px]  text-slate-500 font-extrabold">
                  {singleProduct.price} MAD
                </h2>
                <section>Categorie :</section>
                <div className="addToPanier mt-8 flex ml-[-6%]">
                  <input
                    className="w-[14%]  rounded-md mx-4 border-2 text-center"
                    type="number"
                    placeholder="numbber"
                    min="0"
                  />
                  <button className="bg-[#130f40] px-4 py-2 rounded-md shadow-2xl text-white font-extrabold ">
                    Add To Panier
                  </button>
                </div>
              </div>
            </section>
            <section className="w-full  h-[250px]  tracking-widest border-t-2 p-2 border-slate">
              <h1 className="p-4 mx-[-2%] font-bold text-4xl uppercase ">
                Description
              </h1>
              <p className="p-4  mx-[-2%] leading-loose">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
                dolor tempore dolorum! Laboriosam laborum quae minima corporis
                voluptates voluptatibus incidunt est officiis veniam! Sunt
                distinctio odio reiciendis nostrum adipisci eligendi!
              </p>
            </section>
            <div className="p-2 w-full">
              <h1 className="p-4 mx-[-2%] font-bold">Produit Similar</h1>
              <div className="grid grid-cols-4 gap-2 ">
                {ProductSimilar.map((ps) => {
                  return (
                    <div className="">
                      <img
                        className="shadow-2xl rounded-md"
                        src={`http://localhost:8080/uploads/${ps.imageUrl}`}
                        alt=""
                      />
                      <h1 className="mt-6">{ps.title}</h1>
                      <h2 className="mt-6 mb-4">
                        <span className="text-slate-600 font-bold">
                          {ps.price}
                        </span>{" "}
                        MAD
                      </h2>
                      <button className="px-8 py-2 rounded-md border ">
                        Ajouter Panier
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
