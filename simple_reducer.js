//import React, { useReducer } from "react";


const reducer = (state, action) => {
  if (action.type === "initializeTimes")
    return {
      availableTimes: '00:00',
    };
  if (action.type === "updateTimes")
    return {
      availableTimes: action.payload.time || "10:00" ,
    };
  return state;
};

export default function Bookings() {
  const initialTimes = {
    availableTimes: "00:00"
  };
  const [state, dispatch] = useReducer(reducer, initialTimes);

  // eslint-disable-next-line no-unused-vars
  const updateTimes = (date) => {
    dispatch({ type: "updateTimes",payload:{time:date });
    console.log(state);
  };

  // eslint-disable-next-line no-unused-vars
  const initializeTimes = () => {
    dispatch({ type: "initializeTimes" });
    console.log(state);
  };
