import React,{useState,useEffect} from "react"
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdAdd } from "react-icons/md";
import axios from "axios"
import CategorieNom from "./CategorieNom"
// import tafilalet from "./images/tafilalet-marron-carré.webp"
 
const Produit = () => {
  const [AllProducts, setAllAllProducts] = useState([]);
  const [toggle, setToggle] = useState(false)
  const [isSucces, setSuccess] = useState(null);
  const [cats, AllCats] = useState([])
  const [holdData, setHoldData] = useState({
    title:"",
    price:"",
    desc:"",
    categorie:""
  })
  const [productInfo, setProductInfo] = useState({
    file: [],
    filepreview:null,
  });
   const AllInfoAboutProduct = {
      holdData,
      productInfo
    }

  const AddProduct = async () => {
    setToggle(!toggle)
  };

  const HandleData = (e) => {
    setHoldData({
      ...holdData,
      [e.target.name]:e.target.value
    })
  }
 

  const handleInputChange = (event) => {
    setProductInfo({
      ...productInfo,
      file:event.target.files[0],
      filepreview: URL.createObjectURL(event.target.files[0]),

    });
  }
  
  const submit = async () => {
    const formdata = new FormData()
    formdata.append('image', productInfo.file);    
    formdata.append('userdata', JSON.stringify(holdData)); 
    


    const data = await axios({
      
      method: 'post',
      url: "/add",
      data: formdata,
      headers: {
        "Content-Type": "multipart/form-data",
          }
        })

   setAllAllProducts(data.data.data)

    }

  const GettingAllProduit = async () => {
    const data = await axios.get("/getAll");
    setAllAllProducts(data.data.AllProduct);
  };
  const getAllCat = async () => {
    const data = await axios.get("/Categories");
    AllCats(data.data)
  };

  useEffect(() => {
    GettingAllProduit();
    getAllCat()
  }, []);

    return (
        <div className="p-8 items-center  w-[80%] right-0 absolute mx-4 h-full">
      <h1 className="font-extrabold text-2xl mb-8">List Of Categories</h1>
        <button

        className="left-0 bg-[#22d3ee] px-6 py-4 rounded-md shadow-2xl mb-8 absolutes text-white font-semibold"
        onClick={() => AddProduct()}
      >
        {" "}
        <span className="flex items-center gap-[6px]">
          {" "}
          <MdAdd />
          ajouter Produit
        </span>
      </button>
     {toggle ?  <div className="flex w-[26%]   p-2 contanier  animated add">

        <form action="" className="grid  gap-8 w-[100%]" onSubmit={(e) => submit(e.preventDefault())} >
            <input type="text" name="title" id="" className="px-4 py-[8px] rounded-md" placeholder="Title" value={holdData.title || ''} onChange={HandleData} />
            <input type="text" name="price" id="" className="px-4 py-[8px] rounded-md" placeholder="price" value={holdData.price} onChange={HandleData}/>
            <textarea name="desc" id="" cols="30" rows="10" placeholder="description" className="px-4 py-[8px]" value={holdData.desc} onChange={HandleData}>
             
          </textarea>
            <select name="categorie" id="cat" value={holdData.cat || ""} onChange={HandleData}>
              {cats.map(c => (
                <option value={c._id}>{c.name}</option>
              ))}
            </select>
                      <input type="file" name="upload_file" id="" className="px-4 py-[8px] rounded-md" onChange={(handleInputChange)} multiple/>

          <button   type="submit" className="bg-[green] px-4 py-4 underline text-white font-semibold mb-6">add</button>
          </form>
          <span>
      <img src={productInfo.filepreview} alt="" className="shadow-2xl"/>

          </span>
        
      </div> : null}
      <div className="List_Categories">
        <table className="w-full">
          <thead className="bg-grey-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-4 text-sm font-semibold tracking-wide  text-center">
                Id
              </th>
              <th className="p-4 text-sm font-semibold tracking-wide   text-center">
                Nom De Produit
              </th>

              <th className="p-4 text-sm font-semibold tracking-wide   text-center">
                Prix
              </th>
              <th className="p-4 text-sm font-semibold tracking-wide   text-center">
                desc
              </th>
              <th className="p-4 text-sm font-semibold tracking-wide   text-center">
                Categorie
              </th>
              <th className="p-4 text-sm font-semibold tracking-wide   text-center">
                Image
              </th>
              <th className="p-4 text-sm font-semibold tracking-wide   text-center">
                Date Affectation
              </th>
              <th className="p-4 text-sm font-semibold tracking-wide   text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {AllProducts.map((prod, index) => {
              return (
                <tr className="bg-white shadow-2xl text-center" key={index}>
                      <td className="p-4 text-sm text-gray-500">{prod._id}</td>
                  <td className="p-4 text-sm text-gray-500">{prod.title}</td>
                  <td className="p-4 text-sm text-gray-500">{prod.price}</td>
                  <td className="p-4 text-sm text-gray-500">{prod.desc}</td>
                      <td className="p-4 text-sm text-gray-500">
                          <CategorieNom _id={prod.categorie} />
                  </td>
                      <td className="p-4 text-sm text-gray-500">
                                                  <img src={`http://localhost:8080/uploads/${prod.imageUrl}`} width={60}  alt="" />
                  </td>
                  <td className="p-4 text-sm text-gray-500">{prod.createdAt}</td>
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
    )
}

export default Produit