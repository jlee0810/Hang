import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
  wayPoints: [],
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
    setWayPoints: (state, action) => {
      state.wayPoints = [action.payload];
    },
    addWayPoint: (state, action) => {
      state.wayPoints.push(action.payload);
    },
    removeWayPoint: (state, action) => {
      state.wayPoints.splice(action.payload, 1);
    },
  },
});

export const {
  setOrigin,
  setDestination,
  setWayPoints,
  setTravelTimeInformation,
  addWayPoint,
  removeWayPoint,
} = navSlice.actions;

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) =>
  state.nav.travelTimeInformation;

export const selectWayPoints = (state) => state.nav.wayPoints;

export default navSlice.reducer;
