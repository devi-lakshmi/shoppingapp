import React from "react";
import {useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectProductById } from "../store/productsdetails/selectors";
import { fetchDataById } from "../store/productsdetails/thunks";
import { Link } from "react-router-dom";
import {selectCartData } from "../store/cart/selector"
import { addToCartFetched } from "../store/cart/slice";


export default function  ProductDetailsPage() {
    
    const {id} =useParams();
      const cartProducts = useSelector(selectCartData);


    const dispatch = useDispatch();
   const productDetails = useSelector( selectProductById);
 
   useEffect(() => {
dispatch(fetchDataById(id))

   }, [dispatch,id]);
    
     const addToCart = (product) => {
    dispatch(addToCartFetched(product));
  }

return(

   <>
    <div>
     <Link to={`/products`} >Products List page</Link> 
</div>
    <div>
       <Link to={`/products/cart`} >My Cart {cartProducts.length}</Link>

   <div key ={productDetails.id}>
      <h3>{productDetails.name}</h3>
            <img src={productDetails.imageUrl}  alt ="" width= "100px" height= "130px"/>
      
      <h2>{productDetails.price}</h2>
      <p>{productDetails.description}</p>
       

      
      <button onClick={()=>addToCart(productDetails)}>add to cart</button>
      </div>
      </div>
      </>
  );
}
    