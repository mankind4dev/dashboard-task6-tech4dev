import { Box } from "@mui/material";
import React from "react";
import Sidebar from "../components/dashboard/Sidebar";

const Home = ({ children }) => {
  return (
    <>
      <Box display={"flex"}   position={"relative"}>
        <Box
          display={{ lg: "flex", base: "none" }}
          width={{ lg: "246px", md: "200", sm: "150", base: "100" }}
          height={"100vh"}
          bgcolor={"rgba(255, 255, 255, 1)"}
          border={"1px solid rgba(239, 240, 246, 1)"}
          borderRadius={"20px"}
        >
          <Sidebar />
        </Box>
        <Box width={"100%"} flexGrow={1} flexWrap={"wrap"}  >
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Home;
