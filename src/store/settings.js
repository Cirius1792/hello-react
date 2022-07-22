import { configureStore, createSlice } from "@reduxjs/toolkit";
import { SUPPORTED_FONTS } from "../components/TextComponent";

const settingsSlice = createSlice({
    name:"settings",
    initialState: {name:"World", font:SUPPORTED_FONTS[0]},
    reducers:{
        setName(state, action){
            state.name = action.payload.name;
        },
        setFont(state, action){
            state.font = action.payload.font;
        }
    }
})

const store = configureStore({reducer:settingsSlice.reducer});
export const settingsActions = settingsSlice.actions;
export default store;