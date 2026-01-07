import { createSlice } from "@reduxjs/toolkit";

type initialStateType={
    step : number
}

const initialState = {
    step : 0
}

const productsSlice = createSlice({
    name : 'products',
    initialState,
    reducers : {
            nextStep(state){
                state.step++
            },
            prevStep(state){
                if(state.step > 0){
                    state.step--;
                }
            }
    }
})

export const {nextStep,prevStep} = productsSlice.actions;

export default productsSlice.reducer