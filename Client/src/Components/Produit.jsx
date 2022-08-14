import React from "react";
import { useEffect } from "react";
import _1 from "../Images/_1.png";
import _3 from "../Images/_3.png";
import _4 from "../Images/_4.jpg";
import _5 from "../Images/_5.jpg";
import _6 from "../Images/_6.jpg";
import _7 from "../Images/_7.jpg";

const Produit = () => {
  useEffect(() => {
    document.title = "Tomore ";
  }, []);
  return (
    <div className="">
      <h1 className="text-center font-normal text-4xl tracking-wide uppercase mb-4">
        nos dates nature
      </h1>
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="max-w-[900px] w-[96%]">
          <div className="absolute">
            {/* <h1>Datte Nature</h1> */}
            {/* <button className="bg-[green] px-4 py-4 underline text-white font-semibold mb-6">
              DESCOUVRIR
            </button> */}
          </div>
          <img src={_1} alt="" className="rounded-md shadow-2xl" />
          <p className="max-w-[1240px] text-left p-2 leading-10 mb-8 tracking-wide uppercase">
            Nos authentiques dattes Majhoul Premium sont méticuleusement garnies
            d’ingrédients de grande qualité. <br></br> Des classiques pâtes
            d’amandes et fruits secs revisitées, aux alliances les plus
            exotiques et des plus surprenantes, l’innovation, la quête de{" "}
            <br></br> nouvelles saveurs et tendances de la Grande Pâtisserie
            sont notre spécialité.
          </p>
        </div>
        <div className=" max-w-[900px] w-[96%] mb-4 ">
          <img src={_3} alt="" className="rounded-md shadow-2xl" />{" "}
        </div>
        <div className=" max-w-[900px] w-[96%] mb-4">
          <img src={_4} className="rounded-md shadow-2xl" />{" "}
        </div>{" "}
        <div className=" max-w-[900px] w-[96%] mb-4">
          <img src={_5} className="rounded-md shadow-2xl" />{" "}
        </div>{" "}
        <div className=" max-w-[900px] w-[96%] mb-4">
          <img src={_6} className="rounded-md shadow-2xl" />{" "}
        </div>{" "}
        <div className=" max-w-[940px] w-[96%] mb-4 grid grid-cols-2 gap-4 p-4">
          <div>
            <img src={_7} className="rounded-md shadow-2xl" />{" "}
          </div>
          <div>
            <img src={_7} className="rounded-md shadow-2xl" />{" "}
          </div>
          <div>
            <img src={_7} className="rounded-md shadow-2xl" />{" "}
          </div>
          <div>
            <img src={_7} className="rounded-md shadow-2xl" />{" "}
          </div>
        </div>{" "}
        <div className="max-w-[900px] w-[96%]">
          <div className="absolute">
            <h1>Datte Nature</h1>
            <button className="bg-[green] px-4 py-4 underline text-white font-semibold mb-6">
              DESCOUVRIR
            </button>
          </div>
          <img src={_1} className="rounded-md shadow-2xl " />
          <p className="max-w-[1240px] text-left p-2 leading-10 mb-8 tracking-wide uppercase">
            Nos authentiques dattes Majhoul Premium sont méticuleusement garnies
            d’ingrédients de grande qualité. <br></br> Des classiques pâtes
            d’amandes et fruits secs revisitées, aux alliances les plus
            exotiques et des plus surprenantes, l’innovation, la quête de{" "}
            <br></br> nouvelles saveurs et tendances de la Grande Pâtisserie
            sont notre spécialité.
          </p>
        </div>
        <div className=" max-w-[900px] w-[96%] mb-4">
          <img src={_1} className="rounded-md shadow-2xl" />{" "}
        </div>
        <div className=" max-w-[900px] w-[96%] mb-4">
          <img src={_1} className="rounded-md shadow-2xl" />{" "}
        </div>
        <div className=" max-w-[900px] w-[96%] mb-4">
          <img src={_1} className="rounded-md shadow-2xl" />{" "}
        </div>
        <div className=" max-w-[900px] w-[96%] mb-4">
          <img src={_1} className="rounded-md shadow-2xl" />{" "}
        </div>
        <div className=" max-w-[900px] w-[96%] mb-4">
          <img src={_1} className="rounded-md shadow-2xl" />{" "}
        </div>
        <div className=" max-w-[900px] w-[96%] mb-4">
          <img src={_1} className="rounded-md shadow-2xl" />{" "}
        </div>
      </div>
    </div>
  );
};

export default Produit;
