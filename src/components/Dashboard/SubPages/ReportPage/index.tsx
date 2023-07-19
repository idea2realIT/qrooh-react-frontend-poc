import React from "react";
import Box from "@mui/material/Box";
import TopBar from "../../DashboardRight/TopBar";
import CustomButton from "../../../microComponents/CustomButton";
import {
  FaCirclePlus,
  FaRegCalendarDays,
  FaAngleDown,
  FaUserLarge,
} from "react-icons/fa6";
function ReportPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <TopBar message="Your reports">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CustomButton Icon={FaCirclePlus} LightText="Create new report" />
        </Box>
      </TopBar>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "3rem", fontWeight: "700", color: "#d0e2cf" }}>
          Coming Soon
        </span>
      </Box>
    </Box>
  );
}

export default ReportPage;
