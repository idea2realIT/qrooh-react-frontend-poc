import { Box } from "@mui/material";

import { Outlet } from "react-router-dom";

function DashBoardComponent() {
  return (
    <Box
      sx={{
        height: "100%",
        padding: "3rem",
        fontFamily: "'Poppins', sans-serif",
        background: "#e3f3dc",
      }}
    >
      <Outlet />
    </Box>
  );
}

export default DashBoardComponent;
