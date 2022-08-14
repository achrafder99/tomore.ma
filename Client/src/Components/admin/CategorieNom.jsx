import React,{useState,useEffect} from "react"
import axios from "axios"

const CategorieNom = ({ ...props }) => {
    const { _id } = props;
    console.log(_id)
    const [name, setname] = useState([])
     const gettingNames = async() => {
        const names = await axios( {
        method: "POST",
        url: "/NameOfCategoires",
        data: {_id:_id},
        headers: {
                "Content-Type": "application/json",
            },
        })
         setname(names.data)
    }
    useEffect(() => {
      gettingNames()
    },[])    
    return (
        <h1>{name.name}</h1>
    )
}
export default CategorieNom