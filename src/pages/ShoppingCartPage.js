import React from "react";
import {  useSelector } from "react-redux";
import { selectCartData, selectTotalCartPrice, calculateQuantityByProduct } from "../store/cart/selector"
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';


export default function  ShoppingCartPage() {
    

const productDetails = useSelector( selectCartData); 
 
const totalPrice = useSelector(selectTotalCartPrice);

const calculateProductsQuantity = useSelector( calculateQuantityByProduct ); 


 const logDetails = (productDetails) => {
  productDetails.forEach(product => {
    console.log("Product ID: "+product.id);
    console.log("Product Name: "+product.name);
    console.log("Product Category ID: "+product.categoryId);
    console.log("Product Price: "+product.price);
  });
  console.log("Total number of items: "+productDetails.length);
  console.log("Total price to be paid: "+totalPrice);
  }

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
 <div><Link to={`/products`} >Products List page</Link> 

 <p onLoad={()=>calculateProductsQuantity}>My Shoppoing cart overview</p> 

 <div className=" row">
 
  {cards}
  </div>
   <p>total price to pay {totalPrice}</p>
   <Button onClick={()=>logDetails(productDetails)}>Purchase</Button>
  </div>
  );
}
    