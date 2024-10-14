import { createSlice } from "@reduxjs/toolkit";

export const baseUrlSlice=createSlice({
    name:'base_url',
    initialState:{
        'backend':'http://127.0.0.1:8000/'
    },
    reducers:{
    }
})
export default baseUrlSlice.reducer