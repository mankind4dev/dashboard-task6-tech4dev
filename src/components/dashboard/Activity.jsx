import { Box } from "@mui/material";
import React from "react";
import Active from "./Active";
import Chart from "./Chart";

const Activity = () => {
  return (
    <>
      <Box
        display={"flex"}
        flexWrap={"wrap"} 
        width={"100%"} 
        px={4}
      >
        <Box flex={1}>
          <Active />
        </Box>
        <Box flex={1}>
          <Chart />
        </Box>
      </Box>
    </>
  );
};

export default Activity;
