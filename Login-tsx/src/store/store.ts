import { configureStore } from "@reduxjs/toolkit";
import authSlice from './slices/auth'
import productsSlice from './slices/products'
import { useSelector, type TypedUseSelectorHook } from "react-redux";


export const store = configureStore({
    reducer : {
        auth : authSlice,
        products : productsSlice
    }
});

export default store;

type storeType = ReturnType<typeof store.getState>
export const useSelectorCustom : TypedUseSelectorHook<storeType> = useSelector;