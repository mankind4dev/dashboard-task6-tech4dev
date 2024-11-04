import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const HeadSelect = () => {

  const selects = useSelector((state) => state.dashboardSelect.selects)
  const people = useSelector((state) => state.dashboardSelect.people)
  const topics = useSelector((state) => state.dashboardSelect.topics)
  console.log(selects)
  console.log(people)
  console.log(topics)
  return (
    <>
      <Box mt={3} m={4} display={"flex"} justifyContent={"space-between"} flexWrap={"wrap"} gap={2}>
        <Box
          display={"flex"}
          alignItems={"center"}
          width={"365px"}
          height={"50px"}
          background={"rgba(255, 255, 255, 1)"} 
          border={"1px solid rgba(239, 240, 246, 1)"}
          borderRadius={3}
          pl={1}
          pr={1}
        >
          
          <Typography fontSize={16} fontWeight={500}>Timeframe:</Typography>
          <select name="">
            <option value="names">All-time</option>
          </select>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          width={"365px"}
          height={"50px"}
          background={"rgba(255, 255, 255, 1)"} 
          border={"1px solid rgba(239, 240, 246, 1)"}
          borderRadius={3}
          pl={1}
          pr={1}
        >
          <Typography fontSize={16} fontWeight={500}>Timeframe:</Typography>
          <select name="" id="">
            <option value="names">All</option>
          </select>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          width={"365px"}
          height={"50px"}
          background={"rgba(255, 255, 255, 1)"} 
          border={"1px solid rgba(239, 240, 246, 1)"}
          borderRadius={3}
          pl={1}
          pr={1}
        >
          <Typography fontSize={16} fontWeight={500}>Timeframe:</Typography>
          <select name="" id="">
            <option value="names">All</option>
          </select>
        </Box>
      </Box>
    </>
  );
};

export default HeadSelect;
