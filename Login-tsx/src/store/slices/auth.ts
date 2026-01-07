import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

interface initialStateType{
    token : string | undefined
}

const initialState : initialStateType = {
    token : Cookies.get("idToken")
}

const authSlice= createSlice({
    name: "auth",
    initialState,
    reducers:{
        setToken(state ,actions:PayloadAction<string>){
            state.token = actions.payload;
            Cookies.set("idToken", actions.payload,{ sameSite : "strict" });    
        },
        removeToken(state){
            state.token = ""
            Cookies.remove("idToken");
        }
    }
})

export const {setToken,removeToken}  = authSlice.actions

export default authSlice.reducer