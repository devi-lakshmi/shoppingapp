import React from "react";
import {  useSelector ,useDispatch} from "react-redux";
import { selectCartCount} from"../store/products/selector";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
 import { increaseItemQuantity,decreaseItemQuantity, remove, clear} from "../store/products/slice";
import Button from 'react-bootstrap/Button';


const Cart = () => {
  const dispatch = useDispatch();  
const product = useSelector(selectCartCount); 
const totalprice = product.reduce((acc,currentvalue) =>{
    return acc+currentvalue.price*currentvalue.quantity;

  } ,0); 
const cards = product.map(product =>(


 <div  key ={product.id} className ="col-md-3" style={{marginBottom:"10px"}}>


 <Card id ={product.id} className="h-100">
      <div className="text-center">
      <Card.Img variant="top" src={product.imageUrl}  style ={{width : "100px", height: "130px"}}/>
      </div>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.price}
        </Card.Text>
        <Link to={`/products/${product.id}`} style={{color: "red"}}>show details</Link><br/>
        <Card.Footer>
          
         <Button  onClick={()=> dispatch(increaseItemQuantity(product.id))}>+</Button>  
          <div className="form-outline">
                         <input
                              id="form1"
                              min="0"
                              name="quantity"
                              value={product.quantity}
                              type="number"
                              className="form-control"
                           onChange={()=>null}
                            /> 
                           <label className="form-label" >
                              Quantity
                            </label> 
                         
                          </div>
                            <Button  onClick={()=>{ if(product.quantity>0){
                             dispatch(decreaseItemQuantity(product.id));}
                            else{
                              dispatch(remove(product.id));
                            }
                            }}>-</Button>
                           
                           </Card.Footer>
                           </Card.Body>
                         <Button onClick ={() =>dispatch(remove(product.id))} >Remove</Button>
                         </Card>

                       </div>   
   
))
return(
<div>
 
 <h2>welcome To cart</h2>
 

 <div className=" row">
 
  {cards}
   </div>
  <button style ={{color :'blue'  , width:"200px"  }} >Total Price:{totalprice}</button> 
   <button>checkout </button>
   
   <div>
   <button style={{color:"red" , width:"200px"}} onClick={() =>dispatch(clear())} >Clearcart</button>
  </div>
  
</div>
);
}
  export default Cart;
  