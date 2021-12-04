import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    origin: null,
    destination: null,
    traveltimeInformation: null
}


export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setdestination: (state, action) => {
            state.destination = action.payload;
        },
        settraveltimeInformation: (state, action) => {
            state.traveltimeInformation = action.payload;
        }
    },
})

export const {setOrigin, setdestination, settraveltimeInformation} = navSlice.actions;

export const selectOrigin = (state) => {
    return state.nav.origin;
}
export const selectDestination = (state) => state.nav.destination;
export const selectTraveltimeInformation = (state) => state.nav.traveltimeInformation;

export default navSlice.reducer;