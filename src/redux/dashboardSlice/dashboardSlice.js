import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  cards: [
    {
      title: "Active Users",
      value: "27/80",
    },
    {
      title: "Questions Answered ",
      value: "27/80",
    },
  ],
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
});

export const {} = dashboardSlice.actions;

export default dashboardSlice.reducer;
