import React from "react";
import Cover2 from "./Cover2";
import Desc from "./Desc";
import Produit from "./Produit";
import Footer from "./Footer"

const Content = () => {
  return (
    <div className="">
      <Cover2 />
      <div className="container mx-auto items">
        <Desc />
        <Produit />
      </div>
                <Footer />

    </div>
  );
};

export default Content;
