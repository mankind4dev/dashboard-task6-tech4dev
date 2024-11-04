import { createSlice } from "@reduxjs/toolkit";
import active from "/images/sidebar/active.png"
import people from "/images/sidebar/people.png"
import library from "/images/sidebar/library.png"
import setting from "/images/sidebar/setting.png"
import getStarted from "/images/sidebar/getStarted.png"

import ReportIcon from "../../icons/reportIcon";
import LibraryIcon from "../../icons/libraryIcon";
import PeopleIcon from "../../icons/peopleIcon";
import Activities from "../../icons/activities";
import GetStartedIcon from "../../icons/getStartedIcon";
import SettingIcon from "../../icons/settingIcon";

const initialState = {
  value: 0,
  sidebarTitle: [
    {
      title: "Report",
      iconImg: active,
      // icon: <ReportIcon />,
      link: "/report",
    },
    {
      title: "Library",
      iconImg: library,
      // icon: <LibraryIcon />,
      link: "/libraries",
    },
    {
      title: "People",
      iconImg: people,
      // icon: <PeopleIcon />,
      link: "/people",
    },
    {
      title: "Activities",
      iconImg: active,
      // icon: <Activities />,
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
      // icon: <GetStartedIcon />,
      link: "/get-started",
    },
    {
      name: "Settings",
      iconImg: setting,
      // icon: <SettingIcon />,
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
