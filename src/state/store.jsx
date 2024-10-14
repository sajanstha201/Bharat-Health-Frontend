import { configureStore } from "@reduxjs/toolkit";
import baseUrlSlice from './baseUrlSlice'
import userInfoSlice from './userInfoSlice'
const store=configureStore({
    reducer:{
       baseUrl:baseUrlSlice,
       userInfo:userInfoSlice,
    }
})
export default store;
