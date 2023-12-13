import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectProductsList } from "../store/products/selector";
import { fetchData } from "../store/products/thunks";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function  ProductListPage() {
 
  const dispatch = useDispatch();
  
  const data = useSelector(selectProductsList);
 console.log(data);
  
 useEffect(() => {
dispatch(fetchData)

   }, []);

  
  
  

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
        <Button variant="primary"   >show details</Button>
      </Card.Body>
    </Card>

   </div>   
        
        
))
return(
  <div>
<h1>product Dashbord</h1>
 <div className=" row">
  
  {cards}
  </div>
    </div>
  )
}