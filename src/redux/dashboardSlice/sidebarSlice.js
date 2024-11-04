import { createSlice } from "@reduxjs/toolkit";
import active from "/images/sidebar/active.png"
import people from "/images/sidebar/people.png"
import library from "/images/sidebar/library.png"
import setting from "/images/sidebar/setting.png"
import getStarted from "/images/sidebar/getStarted.png"


const initialState = {
  value: 0,
  sidebarTitle: [
    {
      title: "Report",
      iconImg: active,
      link: "/report",
    },
    {
      title: "Library",
      iconImg: library,

      link: "/libraries",
    },
    {
      title: "People",
      iconImg: people,
      link: "/people",
    },
    {
      title: "Activities",
      iconImg: active,
      link: "/activities",
    },
    {
      title: "Suport",
    },
  ],

  sidebarSupport: [
    {
      name: "Get Started",
      iconImg: getStarted,
      
      link: "/get-started",
    },
    {
      name: "Settings",
      iconImg: setting,

      link: "/settings",
    },
  ],
  sidebarUser: [
    {
      fullName: "Sam Wheeler",
      email: "samwheeler@example.com"
    }, 
  ],
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {},
});

export const {} = sidebarSlice.actions;

export default sidebarSlice.reducer;
