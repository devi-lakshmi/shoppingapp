import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectProductsList } from "../store/products/selector";
import { fetchData } from "../store/products/thunks";
import { Link } from "react-router-dom";
import { addToCartFetched } from "../store/cart/slice";
import {selectCartData } from "../store/cart/selector"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function  ProductListPage() {
 
  const dispatch = useDispatch();
  
  const data = useSelector(selectProductsList);

  const cartProducts = useSelector(selectCartData);

  
 useEffect(() => {
dispatch(fetchData)

   }, []);

  const addToCart = (product) => {
    dispatch(addToCartFetched(product));
  }

  const cards = data.map(product =>(

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
      <Card.Footer>
        <Button onClick={()=>addToCart(product)}>Add to cart</Button>
      </Card.Footer>
    </Card>

   </div>   
        
        
))
return(<>
<div>
    <Link to={`/products/cart`} >My Cart {cartProducts.length}</Link>
</div>
<h1>product Dashbord</h1>

 <div className=" row">
  
  {cards}
  </div>
    </>
  )
}