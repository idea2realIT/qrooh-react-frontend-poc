import React from "react";
import Box from "@mui/material/Box";
import DashBoardLeft from "./DashBoardLeft";
import DashBoardRight from "./DashboardRight";
// --start-of-css--
const OuterStyle = {
  display: "flex",
  height: "100vh",
  width: "100vw",
};
const LeftBoxStyle = {
  height: "100%",
};
const RightBoxStyle = {
  height: "100%",
  flexGrow: 1,
};
// --end-of-css--
function Layout() {
  return (
    <Box sx={OuterStyle}>
      <Box sx={LeftBoxStyle}>
        <DashBoardLeft />
      </Box>
      <Box sx={RightBoxStyle}>
        <DashBoardRight />
      </Box>
    </Box>
  );
}

export default Layout;
