import React from "react";

const Desc = () => {
  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <h1 className="mb-8 text-center font-semibold ">nos créations toomore</h1>
      <p className="max-w-[1240px] leading-10 mb-8 tracking-wide uppercase">
        Nos authentiques dattes Majhoul Premium sont méticuleusement garnies
        d’ingrédients de grande qualité. <br></br> Des classiques pâtes
        d’amandes et fruits secs revisitées, aux alliances les plus exotiques et
        des plus surprenantes, l’innovation, la quête de <br></br> nouvelles
        saveurs et tendances de la Grande Pâtisserie sont notre spécialité.
      </p>
      <button className="bg-[green] px-4 py-4 underline text-white font-semibold mb-6 ">
        DESCOUVRIR
      </button>
    </div>
  );
};

export default Desc;
