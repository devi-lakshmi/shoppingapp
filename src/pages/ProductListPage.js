import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectProductsList } from "../store/products/selector";
import { fetchData } from "../store/products/thunks";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addToCartData, filterByCategory, sortByPrice } from "../store/products/slice";


export default function  ProductListPage() {
 
  const dispatch = useDispatch();
  
  const data = useSelector(selectProductsList);

  useEffect(() => {
dispatch(fetchData)

   }, [dispatch]);

  const addToCart = (product) => {
    dispatch(addToCartData(product));
  }
const handleSortByPrice =()=>{
  dispatch(sortByPrice());
}

// const handleFilterByCategory = (category) =>{
//   dispatch(filterBYcategory(category));

  const cards = data.map(product =>(
<div key ={product.id}className ="col-md-3" style={{marginBottom:"10px"}}>

 <Card id ={product.id}   className="h-100">
      <div className="text-center">
      <Card.Img variant="top" src={product.imageUrl}  style ={{width : "100px", height: "130px"}}/>
      </div>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
         Euro:{product.price}
        </Card.Text>
        <Link to={`/products/${product.id}`}>show details</Link><br/>
      </Card.Body>
      <Card.Footer>
        
        <Button onClick={()=>addToCart({...product , quantity:1}
           )}>Add to cart</Button>
      
    
      </Card.Footer>
    </Card>
    
 </div>  
         
  ))
return(
< div className=" row">
     <header>
   <button onClick={handleSortByPrice}>sort by price</button>  
    </header>
    <div>
   <button onClick={() =>dispatch(filterByCategory({category:"categoryId"})
   )}> categoryId</button>
 </div> 
  
  {cards}
   

  </div>
    
  )
}