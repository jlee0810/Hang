import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  stops: null,
  travelTimeInformation: null,
};

//push information to data layer
export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setStops: (state, action) => {
      state.stops = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

//actions
export const { setOrigin, setStops, setTravelTimeInformation } =
  navSlice.actions;

//grab information from the data layer
export const selectOrigin = (state) => state.nav.origin;
export const selectStops = (state) => state.nav.stops;
export const selectTravelTimeInformation = (state) =>
  state.nav.travelTimeInformation;

export default navSlice.reducer;
