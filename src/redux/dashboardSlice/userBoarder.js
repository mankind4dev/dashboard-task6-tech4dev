import { createSlice } from "@reduxjs/toolkit";
import jesse from "/images/users/josse.png"
import thisal from "/images/users/thesa.png"
import helen from "/images/users/helen.png"
import lura from "/images/users/lura.png"

const initialState = {
  value: 0,
  users: [
    {
      id: 1,
      title: "Jesse Thomas",
      value: "637 Points - ",
      percentage: "98% Correct",
      imgSrc: jesse, 
      accept: "green", 
      danger: "red", 
    },
    {
      id: 2,
      title: "Thisal Mathiyazhagan",
      value: "637 Points - ",
      percentage: "89% Correct",
      imgSrc: thisal, 
      accept: "green", 
      danger: "red", 
    },
    {
      id: 3,
      title: "Helen Chuang",
      value: "637 Points - ",
      percentage: "88% Correct",
      imgSrc: helen, 
      accept: "green", 
      danger: "red", 
    },
    {
      id: 4,
      title: "Lura Silverman",
      value: "637 Points",
      percentage: "",
      imgSrc: lura, 
      accept: "green", 
      danger: "red", 
    },
  ],
  groups: [
    {
      id: 1,
      title: "Houston Facility",
      value: "52 Points / User -",
      percentage: "97% Correct ", 
      accept: "green", 
      danger: "red", 
      imgUp: "",
      imgDown: "",
    },
    {
      id: 2,
      title: "Test Group",
      value: "52 Points / User - ",
      percentage: "95% Correct ", 
      accept: "green", 
      danger: "red", 
      imgUp: "",
      imgDown: "",
    },
    {
      id: 3,
      title: "Sales Leadership",
      value: "52 Points / User -   ",
      percentage: "87% Correct",
      imgSrc: "/images/foond.png", 
      accept: "green", 
      danger: "red", 
      imgUp: "",
      imgDown: "",
    },
    {
      id: 4,
      title: "Northeast Region",
      value: "637 Points",   
      accept: "green", 
      danger: "red", 
      imgUp: "",
      imgDown: "",
    },
  ],
};

export const userBoardSlice = createSlice({
  name: "leaderBoarder",
  initialState,
  reducers: {},
});

export const {} = userBoardSlice.actions;

export default userBoardSlice.reducer;
