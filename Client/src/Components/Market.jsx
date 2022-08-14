import ReactJ, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Panier from "./Panier";
import { Link } from "react-router-dom";

const Market = () => {
  const [products, setProducts] = useState([]);
  const [isPainer, setIsPainer] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const [Empty, IsEmpty] = useState(false);
  const [producst, setProductsPanier] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );
  const [Storage, setStorage] = useState([]);
  const [Increment, setIncrement] = useState(0);
  const [TotalPrice_, setTotalPrice] = useState(0);

  let array1 = [];

  // const pushToArray = (array, element) => {

  //   //   const i = array.findIndex(_element => _element.id === element.id);
  //   //   if (i > -1) array[i]["qte"] += 1;
  //   //   else
  //   //   {
  //   //     setProductsPanier([...producst, producst])
  //   //     array.push(element);
  //   //   }
  //   // }

  //   // const AjouterPanier = (product) => {

  //   //   product = {
  //   //     id: product._id,
  //   //     title: product.title,
  //   //     price: product.price,
  //   //     qte: 1
  //   //   }

  //   //   pushToArray(array1, product);
  //   //   localStorage.setItem('products', JSON.stringify(array1));
  // }

  const TotalPrice = () => {
    const initialValue = 0;
    const total = producst.reduce(
      (accumulator, current) => accumulator + current.price * current.qte,
      initialValue
    );
    setTotalPrice(total);
    localStorage.setItem("TotalPrice", JSON.stringify(total));
  };

  const AjouterPanier = (product) => {
    const product__ = {
      id: product._id,
      title: product.title,
      price: product.price,
      ImageUrl: product.imageUrl,
      qte: 1,
    };

    if (producst.findIndex((p) => p.id === product__.id) > -1) {
      const INDEX = producst.findIndex((p) => p.id === product__.id);
      setIncrement((producst[INDEX].qte += 1));
    } else {
      producst.push(product__);
      setProductsPanier([...producst]);
    }
    TotalPrice();
    localStorage.setItem("products", JSON.stringify(producst));
  };

  const filter = (e) => {
    setInputSearch(e.target.value);
  };
  const gettingTheProduct = async () => {
    const data = await axios.get("/getAll");
    const AllProducts = data.data;
    setProducts(AllProducts.AllProduct);
  };

  useEffect(() => {
    // let products = JSON.parse(localStorage.getItem('products'));
    // console.log(producst)
    // if (products != null)
    // {
    //   console.log(products)
    //   setProductsPanier(products)
    // }
    document.title = "Boutique - Tomore Luxary Dates";

    gettingTheProduct();
  }, []);
  return (
    <div className="market container  w-[90%] h-full mx-auto mt-8 ">
      <h1 className="text-[#000] font-bold text-4xl mb-10 mx-6"> Market </h1>{" "}
      <div className="items-center w-[100%]  mb-2 flex">
        <input
          value={inputSearch}
          type="text absolute"
          placeholder="search"
          className="min-w-[500px] bg-[#cccccc54] px-6 py-2  rounded-md  "
          onChange={filter}
        />{" "}
      </div>{" "}
      <div className="grid grid-cols-3 gap-4">
        <div className="listProduit h-full col-span-2 w-[100%] p-4 sm:grid grid-cols-3  gap-4 items-center">
          {" "}
          {products
            .filter((pro) => {
              if (inputSearch == "") return pro;
              else if (
                pro.title.toLowerCase().includes(inputSearch.toLowerCase())
              ) {
                return pro;
              }
            })
            .map((product, index) => {
              return (
                <div className="" key={index}>
                  <Link to={`details/${product._id}`}>
                    <img
                      className="w-[100%] h-[90%] object-cover shadow-xl rounded-lg"
                      src={`http://localhost:8080/uploads/${product.imageUrl}`}
                      alt=""
                    />
                  </Link>{" "}
                  <section className="info w-full text-center p-4 ">
                    <h2 className="p-4  font-extrabold"> {product.title} </h2>{" "}
                    <h3 className="font-extrabold mb-4">
                      {" "}
                      {product.price}
                      DH{" "}
                    </h3>{" "}
                    <button
                      className="px-8 py-2 rounded-md border "
                      onClick={() => AjouterPanier(product)}
                    >
                      Ajouter Panier{" "}
                    </button>{" "}
                  </section>{" "}
                </div>
              );
            })}{" "}
        </div>{" "}
        <Panier producst_={producst} totalPrice={TotalPrice_} />{" "}
      </div>{" "}
    </div>
  );
};

export default Market;
