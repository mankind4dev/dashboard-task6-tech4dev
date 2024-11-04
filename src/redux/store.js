import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./dashboardSlice/dashboardSlice";
import sidebarReducer from "./dashboardSlice/sidebarSlice";
import dashboardSelectReducer  from "./dashboardSlice/dashboardSelectSlice";
import activeSliceReducer from "./dashboardSlice/activeSlice";
import topicSliceReducer from "./dashboardSlice/topicSlice.js";
import userBoardReducer from "./dashboardSlice/userBoarder.js";


export const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        dashboard: dashboardReducer,
        dashboardSelect: dashboardSelectReducer,
        activeSlice: activeSliceReducer,
        topicSlice: topicSliceReducer,
        userBoardSlice: userBoardReducer,
        
    }
})