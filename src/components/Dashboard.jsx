import React from "react";
import Home from "../layout"; 
import Heading from "./Heading";
import HeadSelect from "./HeadSelect";
import Activity from "./dashboard/Activity";
import Topics from "./dashboard/Topics";
import LeaderBoard from "./dashboard/LeaderBoard";

const Dashboard = () => {
  return (
    <>
      <Home>
        <Heading />
        <HeadSelect />
        <Activity />
        <Topics />
        <LeaderBoard />
      </Home>
    </>
  );
};

export default Dashboard;
