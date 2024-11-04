import { createSlice } from "@reduxjs/toolkit";

import food from "/images/food.png"
import company from "/images/company.png"
import compliance from "/images/conpliance.png"
import covid from "/images/covid.png"
import cyber from "/images/cyber.png"
import social from "/images/socia.png"

const initialState = {
  value: 0,
  weaks: [
    {
      title: "Food Safety",
      value: "74%",
      percentage: "74%",
      imgSrc: food,
      graphColor: "peachpuff",
      graphBgColor: "orange",
      type: "weak",
      status: "Correct",
    },
    {
      title: "Compliance Basics Procedures  ",
      value: "52%",
      percentage: "52%",
      imgSrc: compliance,
      graphColor: "peachpuff",
      graphBgColor: "orange",
      type: "weak",
      status: "Correct",
    },
    {
      title: "Company Networking ",
      value: "36%",
      percentage: "36%",
      imgSrc: company,
      graphColor: "peachpuff",
      graphBgColor: "orange",
      type: "weak",
      status: "Correct",
    },
  ],
  strongest: [
    {
      title: "Covid Protocols ",
      value: "95%",
      percentage: "95%",
      imgSrc: covid,
      graphColor: "greenyellow",
      graphBgColor: "lightgreen",
      type: "weak",
      status: "Correct",
    },
    {
      title: "Cyber Security Basics  ",
      value: "92%", 
      percentage: "92%",
      imgSrc: cyber,
      graphColor: "greenyellow",
      graphBgColor: "lightgreen",
      type: "weak",
      status: "Correct",
    },
    {
      title: "Social Media Policies ",
      value: "86%", 
      percentage: "86%",
      imgSrc: social,
      graphColor: "greenyellow",
      graphBgColor: "lightgreen",
      type: "weak",
      status: "Correct",
    },
  ],
};

export const topicSlice = createSlice({
  name: "topic",
  initialState,
  reducers: {},
});

export const {} = topicSlice.actions;

export default topicSlice.reducer;
