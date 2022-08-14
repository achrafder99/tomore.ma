import Cover1 from "./Cover1";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";

const CheckOut = () => {
  const Products = JSON.parse(localStorage.getItem("products"));

  useEffect(() => {
    console.log(Products);
  }, []);
  return (
    <>
      <Cover1 />
      <Navbar />
      <div className="commande grid grid-cols-1 container mx-[16rem]   max-w-[450px]   ">
        <div className=" grid grid-cols-1  p-4 shadow-2xl mb-6">
          <h1 className="px-1 mb-4 text-2xl font-bold text-[#130f40]">
            Détails de Commande
          </h1>
          <span className="grid grid-cols-2 gap-2">
            <input
              type="text"
              placeholder="nom"
              className="px-4 py-2  my-4 rounded-md border"
            />
            <input
              type="text"
              placeholder="Prenom"
              className="px-4 py-2  my-4 rounded-md border"
            />
          </span>
          <input
            type="text"
            placeholder="Email"
            className="px-4 py-2  my-4 rounded-md border"
          />
          <input
            type="text"
            placeholder="Telephone"
            className="px-4 py-2  my-4 rounded-md border"
          />
          <input
            type="text"
            placeholder="Adresse"
            className="px-4 py-2  my-4 rounded-md border"
          />
          <input
            type="text"
            placeholder="Pays/Region"
            className="px-4 py-2  my-4 rounded-md border"
          />
          <input
            type="text"
            placeholder="Ville"
            className="px-4 py-2  my-4 rounded-md border"
          />
          <input
            type="text"
            placeholder="Code Postal"
            className="px-4 py-2  my-4 rounded-md border"
          />
        </div>
        <div>
          <h1 className="py-4 mb-2">Votre Commande</h1>
          <table className="table-auto text-left sm:min-w-[750px] border">
            <thead className="">
              <tr className=" p-4 border">
                <th className=" p-4">Produit</th>
                <th className=" p-4">Sous Total</th>
              </tr>
            </thead>
            <tbody>
              {Products.map((p) => {
                return (
                  <>
                    <tr className="p-4">
                      <td className="p-4">
                        {p.title} x <span>{p.qte}</span>
                      </td>
                      <td className="p-4">{p.price * p.qte} MAD</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
            <tfoot>
              <tr className=" p-4">
                <td className=" p-4">Total</td>
                <td className=" p-4">
                  {JSON.parse(localStorage.getItem("TotalPrice"))}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <button className="bg-[#130f40] p-2 py-2 rounded-lg shadow-lg font-extrabold text-white mt-4 w-[50%]">
          Demande
        </button>
      </div>
      <Footer />
    </>
  );
};
export default CheckOut;
