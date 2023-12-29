import React from "react";
import {useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectProductById } from "../store/productsdetails/selectors";
import { fetchDataById } from "../store/productsdetails/thunks";
import { addToCartData } from "../store/products/slice";
import { selectCartCount} from"../store/products/selector";

export default function  ProductDetailsPage() {
    
    const {id} =useParams();
     const dispatch = useDispatch();
   const productDetails = useSelector(selectProductById);
 const product = useSelector(selectCartCount);
 
  useEffect(() => {
dispatch(fetchDataById(id))

   }, [dispatch,id]);
    
     const addToCart = (product) => {
    dispatch(addToCartData(product));
  }

const cartTotal = product.reduce(( acc,currentvalue) => {
        return acc + currentvalue.quantity;
    }, 0);
  return(

   <>
       <h2 style={{color : 'blue'}}>Product Details Page</h2>
      <div key ={productDetails.id}>
      <h3>{productDetails.name}</h3>
            <img src={productDetails.imageUrl}  alt ="" width= "100px" height= "130px"/>
      
      <h2>{productDetails.price}</h2>
      <p>{productDetails.description}</p>
       <button onClick={()=>addToCart({...productDetails , quantity:1})}>add to cart {cartTotal} times</button>
      </div> 
      
       
       </>
  );
}
    