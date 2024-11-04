import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  selects: [
    {
      selectTitle: "Timeframe:",
    },
    {
      option: "Last 7 Days",
    },
    {
      option: "This Month ",
    },
    {
      option: "This Year  ",
    },
    {
      option: "Custom ",
    },
  ],

  people: [
    {
        title: "People:",
        value: "27/80",
      },
      {
        option: "Last 7 Days",
        value: "27/80",
      },
      {
        option: "This Month ",
        value: "27/80",
      },
      {
        option: "This Year  ",
        value: "27/80",
      },
      {
        option: "Custom ",
        value: "27/80",
      },
  ],
  topics: [
    {
        title: "Topic:",
        value: "27/80",
      },
      {
        option: "Last 7 Days",
        value: "27/80",
      },
      {
        option: "This Month ",
        value: "27/80",
      },
      {
        option: "This Year  ",
        value: "27/80",
      },
      {
        option: "Custom ",
        value: "27/80",
      },
  ],
};

export const dashboardSelectSlice = createSlice({
  name: "dashboardSelect",
  initialState,
  reducers: {},
});

export const {} = dashboardSelectSlice.actions;

export default dashboardSelectSlice.reducer;
