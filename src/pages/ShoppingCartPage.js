import React from "react";
import {  useSelector } from "react-redux";
import { selectCartData } from "../store/cart/selector"
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


export default function  ShoppingCartPage() {
    


   const productDetails = useSelector( selectCartData);
  console.log("productDetails" + productDetails)
 
 
    
    
const cards = productDetails.map(product =>(

 <div className ="col-md-3" style={{marginBottom:"10px"}}>

 <Card key={product.id} className="h-100">
      <div className="text-center">
      <Card.Img variant="top" src={product.imageUrl}  style ={{width : "100px", height: "130px"}}/>
      </div>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.price}
        </Card.Text>
        <Link to={`/products/${product.id}`}>show details</Link><br/>
      </Card.Body>
     </Card>

   </div>   
        
        
))
return(
 
 <div className=" row">
  
  {cards}
  </div>
  );
}
    