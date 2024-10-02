import { createSlice } from "@reduxjs/toolkit";

export const baseUrlSlice=createSlice({
    name:'base_url',
    initialState:{
        'backend':'https://127.0.0.1/'
    },
    reducers:{
    }
})
export default baseUrlSlice.reducer