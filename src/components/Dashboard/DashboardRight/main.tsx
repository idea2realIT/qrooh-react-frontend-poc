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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            variant="h4"
            component="h3"
            sx={{
              fontWeight: 700,
              fontFamily: "'Poppins', sans-serif",
              color: "#355f44",
            }}
          >
            Good evening, Thom!
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CustomButton Icon={FaCirclePlus} LightText="Add new Metric" />
          <CustomButton
            Icon={FaRegCalendarDays}
            LightText="Your overview of the"
            DarkText="last 7 Days"
            AfterIcon={FaAngleDown}
            sx={{ marginLeft: "1rem" }}
          />
          {/* <CustomButton
        Icon={FaUserLarge}
        DarkText="4yourbrand"
        AfterIcon={FaAngleDown}
        sx={{ marginLeft: "1rem" }}
      /> */}
        </Box>
      </Box>
      <Outlet />
    </Box>
  );
}

export default DashBoardComponent;
