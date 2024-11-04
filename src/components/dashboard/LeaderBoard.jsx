import React from "react";
import Users from "../Users";
import Groups from "../Groups";
import { Box } from "@mui/material";

const LeaderBoard = () => {
  return (
    <>
      <Box display={"flex"} px={4} gap={4} flexWrap={"wrap"}>
        <Box flex={1}>
        <Users />
        </Box>
        <Box flex={1}>
        <Groups />
        </Box>
      </Box>
    </>
  );
};

export default LeaderBoard;
