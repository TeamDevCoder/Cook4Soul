import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ProducsDetail from "./ProductsDetail";

const ProductsDetailContainer = () => {

    const { id } = useParams();

        const consultProducts = async()=>{

            try {

                const response = await fetch('/products.json')
                const data = await response.json();
                const dataFiltered = await data.filter((dat)=>{
                    return dat.id === Number(id);
                })
                return dataFiltered
                
            } catch (error) {
                console.log("Error en consultReview",error);
            }
        }

        const [product, setProduct]= useState([])
        console.log(product);

        useEffect(()=>{ 
            consultProducts().then((prods)=>{setProduct(prods)})
        },[])

        

  return (
    <>
    {product.map((prod)=>(

        <ProducsDetail data={prod}/>

    ))}
   
    </>
  )
}

export default ProductsDetailContainer
