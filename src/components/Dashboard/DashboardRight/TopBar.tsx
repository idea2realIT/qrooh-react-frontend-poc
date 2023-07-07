import { Box, Typography } from "@mui/material";
import React, { ReactComponentElement, ReactNode } from "react";
import { FaCirclePlus, FaRegCalendarDays, FaAngleDown } from "react-icons/fa6";
import CustomButton from "../../microComponents/CustomButton";

function TopBar({
  message,
  children,
}: {
  message: string;
  children: ReactNode;
}) {
  return (
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
          {message}
          {/* Good evening, Thom! */}
        </Typography>
      </Box>
      {/* <Box sx={{ display: "flex", alignItems: "center" }}>
        <CustomButton Icon={FaCirclePlus} LightText="Add new Metric" />
        <CustomButton
          Icon={FaRegCalendarDays}
          LightText="Your overview of the"
          DarkText="last 7 Days"
          AfterIcon={FaAngleDown}
          sx={{ marginLeft: "1rem" }}
        />
        <CustomButton
          Icon={FaUserLarge}
          DarkText="4yourbrand"
          AfterIcon={FaAngleDown}
          sx={{ marginLeft: "1rem" }}
        />
      </Box> */}
      {children}
    </Box>
  );
}

export default TopBar;
