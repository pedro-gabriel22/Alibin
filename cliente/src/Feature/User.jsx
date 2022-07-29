import { createSlice } from "@reduxjs/toolkit";


const initialStateValue ={} 
export const userSlice = createSlice({
    name:'user',
    initialState:{ value:initialStateValue},
    reducers:{
        login:(state,action)=>{
            state.value = action.payload
        },
        logoult:(state)=>{
            state.value = initialStateValue
        }
    }
})
export const {login,logoult} = userSlice.actions
export default userSlice.reducer