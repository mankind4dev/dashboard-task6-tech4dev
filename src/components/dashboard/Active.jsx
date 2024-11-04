import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Active = () => {
  const actives = useSelector((state) => state.activeSlice.actives);
  console.log(actives);
  return (
    <>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"startr"}
        alignItems={"center"}
        // p={1}
        // height={"250px"}
        width={"100%"} 
        gap={1.5}
      >
        {actives.map((active, index) => (
          <Box
          key={index}
            width={"180px"}
            height={"160px"}
            bgcolor={"rgba(255, 255, 255, 1)"}
            borderRadius={"20px"}
            p={2}
          >
            <Typography
              fontSize={14}
              fontWeight={500}
              color={"rgba(0, 0, 0, 0.7)"}
            >
              {active.title}
            </Typography>
            <Box display={"flex"} alignItems={"center"} mt={3}>
              <Typography
                fontSize={24}
                fontWeight={700}
                color={"rgba(0, 0, 0, 1)"}
              >
                {active.value}
              </Typography>
              <Typography
                fontSize={17}
                fontWeight={600}
                color={"rgba(0, 0, 0, 0.5)"}
              >
                {active.half}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Active;
