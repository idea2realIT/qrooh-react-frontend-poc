import { Box } from "@mui/material";
import React from "react";
import TopBar from "../../DashboardRight/TopBar";
import CustomButton from "../../../microComponents/CustomButton";
import { FaUserLarge, FaAngleDown } from "react-icons/fa6";

function SettingsPage() {
  return (
    <Box>
      <TopBar message={"Settings"}>
        <CustomButton
          Icon={FaUserLarge}
          DarkText="4yourbrand"
          AfterIcon={FaAngleDown}
          sx={{ marginLeft: "1rem" }}
        />
      </TopBar>
    </Box>
  );
}

export default SettingsPage;
