import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Panier = (props) => {
  const { producst_ } = props;
  const [Total, Price] = useState(
    JSON.parse(localStorage.getItem("TotalPrice") || 0)
  );
  const usenavigate = useNavigate();

  const Edit = (id) => {
    console.log(id);
    const index = producst_.findIndex((pp) => pp.id == id);
  };

  const Command = () => {
    usenavigate("/checkout");
  };

  // let prixTotal;total
  useEffect(() => {
    console.log(localStorage.getItem("TotalPrice"));
  }, []);

  return (
    <>
      <div className="max-h-[0] mx-4 mb-4">
        {producst_.length > 0 ? (
          <div className="max-h-[0] mx-4 mb-4">
            <h1 className="font-extrabold mb-8 ml-1">Ma Panier</h1>
            {producst_.map((p, index) => {
              return (
                <div
                  className="pnaierCard flex w-[50%] h-full justify-between gap-4  mb-2 p-4  bg-slate-100 "
                  key={p.id}
                  onClick={() => Edit(p.id)}
                >
                  <div className="">
                    <section className="mb-1">{p.title}</section>
                    <section className="text-sm ">
                      {p.qte} x {p.price} MAD
                    </section>
                    <section className="font-bold text-slate-600">
                      prix total:
                      <span className="prix_Ttal ml-2">
                        {p.qte * p.price} DH
                      </span>
                    </section>
                  </div>
                  <div>
                    <img
                      width={50}
                      src={`http://localhost:8080/uploads/${p.ImageUrl}`}
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
            <div className="flex items-center justify-between">
              <span className="">
                <h4 className="font-bold ml-1">
                  Sous Total:{" "}
                  <span className="font-normal">
                    {props.totalPrice == 0 ? Total : props.totalPrice}
                  </span>
                </h4>
              </span>
              <button
                className="p-2 bg-[#3742fa] px-8 py-2 rounded-md font-medium text-white"
                onClick={() => Command(producst_)}
              >
                Commande
              </button>
            </div>
          </div>
        ) : (
          "Panier A ete Vider"
        )}
      </div>
    </>
  );
};
export default Panier;
