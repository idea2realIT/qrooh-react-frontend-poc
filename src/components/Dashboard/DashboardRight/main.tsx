import { Box, Typography } from "@mui/material";
import React from "react";
import { FaAngleDown, FaCirclePlus, FaRegCalendarDays } from "react-icons/fa6";

import { Outlet } from "react-router-dom";
import CustomButton from "../../microComponents/CustomButton";

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
