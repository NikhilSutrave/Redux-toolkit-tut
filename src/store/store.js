import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productReducer from "./productSlice";

const store = configureStore({
    reducer:{
        app:cartSlice,
        pro:productReducer,
    },
})

export default store;