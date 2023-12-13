import React from "react";
import {useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectProductById } from "../store/productsdetails/selectors";
import { fetchDataById } from "../store/productsdetails/thunks";


export default function  ProductDetailsPage() {
    
    const {id} =useParams();

    const dispatch = useDispatch();
   const productDetails = useSelector( selectProductById);
  console.log("productDetails" + productDetails)
 
   useEffect(() => {
dispatch(fetchDataById(id))

   }, [dispatch,id]);
    
    
    

return(
 
   <div key ={productDetails.id}>
      <h3>{productDetails.name}</h3>
            <img src={productDetails.imageUrl}  alt ="" width= "100px" height= "130px"/>
      
      <h2>{productDetails.price}</h2>
      <p>{productDetails.description}</p>
       

      
      <button onClick={() => {}}>add to cart</button>
      </div>
      
  );
}
    