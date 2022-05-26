import { createSlice } from "@reduxjs/toolkit";
const loginSlice=createSlice({
    name:"login",
    initialState:{isAuthenticated:false},
    reducers:{
        isLoged(state,action){state.isAuthenticated=action.payload},

    },
})

export default loginSlice.reducer;
export const loginActions=loginSlice.actions;
