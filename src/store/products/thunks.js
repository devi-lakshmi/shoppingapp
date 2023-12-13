import axios from "axios";
import {  productsFetched } from "./slice";

const API_URL = `http://localhost:4000`;


export const fetchData = async (dispatch,getState) => {
 
  try{ 
  const response = await axios.get(`${API_URL}/products`);
  console.log("response"+ response)
  const productList = response.data;
  dispatch(productsFetched(productList));
}
catch(e){
  console.log(e.message);
}
}
