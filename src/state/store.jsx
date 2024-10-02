import { configureStore } from "@reduxjs/toolkit";
import baseUrlSlice from './baseUrlSlice'
export const store=configureStore({
    reducer:{
       baseUrl:baseUrlSlice,
    }
})