import { Box, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import React from "react";

const Heading = () => {
  return (
    <>
      <Box mx={1} py={2} pb={3} pr={4} borderBottom={"1px solid rgba(0, 0, 0, 0.1)"}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography fontSize={24} fontWeight={700} color={"rgba(0, 0, 0, 1)"}>
            Reports
          </Typography>
          <Typography
            display={"flex"}
            alignItems={"center"}
            fontSize={14}
            fontWeight={600}
            color={"rgba(77, 77, 77, 1)"}
            gap={1}
          >
            <DownloadIcon /> Download
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Heading;
