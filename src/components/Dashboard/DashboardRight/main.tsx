import React from "react";
import Box from "@mui/material/Box";
import {
  FaRegCalendarDays,
  FaAngleDown,
  FaUserLarge,
  FaCirclePlus,
} from "react-icons/fa6";
import Typography from "@mui/material/Typography";
import CustomButton from "../../microComponents/CustomButton";
import CustomWrapper from "../../microComponents/CustomWrapper";
import AnalyticsPage from "../SubPages/AnalyticsPage";
function Main() {
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
      <CustomWrapper sx={{ marginTop: "3rem" }}>
        <AnalyticsPage />
      </CustomWrapper>
    </Box>
  );
}

export default Main;
