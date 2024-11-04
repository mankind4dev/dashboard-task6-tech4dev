import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  actives: [
    {
      title: "Active Users",
      value: "27/80",
    },
    {
      title: "Questions Answered ",
      value: "27",
      half: "/80"
    },
    {
      title: "Av. Session Length ",
      value: "2m 34s",
    },
    {
      title: "Starting Knowledge",
      value: "64%",
    },
    {
      title: "Current Knowledge",
      value: "86%",
    },
    {
      title: "Knowledge Gain ",
      value: "+34%",
    },
  ],
};

export const activeSlice = createSlice({
  name: "active",
  initialState,
  reducers: {},
});

export const {} = activeSlice.actions;

export default activeSlice.reducer;
