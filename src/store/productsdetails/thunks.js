import axios from "axios";

import { productDetailsFetched } from "./slice";



const API_URL = `http://localhost:4000`;
export const fetchDataById = (id) => async(dispatch ,getState) => {
    const response =await axios.get(`${API_URL}/products/${id}`);
     console.log("response"+ response.data)
    const product =response.data;
    dispatch( productDetailsFetched(product))
}