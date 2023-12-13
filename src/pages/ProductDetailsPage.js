import React from "react";
import {useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectProductById } from "../store/productsdetails/selectors";
import { fetchDataById } from "../store/productsdetails/thunks";


export default function  ProductDetailsPage() {
    
    const {id} =useParams();

    const dispatch = useDispatch();
   const product= useSelector( selectProductById);
  
 
   useEffect(() => {
dispatch(fetchDataById(id))

   }, [dispatch,id]);
    
    
    

return(
  
    <div>    


   
    
    </div>
  )
}
    