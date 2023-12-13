import axios from "axios";

import { addToCartFetched } from "./slice";



const API_URL = `http://localhost:4000`;
export const fetchCartDataById = (id) => async(dispatch ,getState) => {
    const response =await axios.get(`${API_URL}/products/cart/${id}`);
     console.log("response"+ response.data)
    const product =response.data;
    dispatch( addToCartFetched(product))
}