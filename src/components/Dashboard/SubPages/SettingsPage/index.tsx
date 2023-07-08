import { Box } from "@mui/material";
import React from "react";
import TopBar from "../../DashboardRight/TopBar";
import CustomButton from "../../../microComponents/CustomButton";
import {
  FaUserLarge,
  FaAngleDown,
  FaDatabase,
  FaLink,
  FaUserGroup,
  FaCirclePlus,
} from "react-icons/fa6";
import { IconType } from "react-icons/lib";
interface SettingsMenuItemsInterface {
  id: number;
  title: string;
  icon: IconType;
}
const SettingsMenuItems: SettingsMenuItemsInterface[] = [
  {
    id: 0,
    title: "Data Sources",
    icon: FaDatabase,
  },
  {
    id: 1,
    title: "Metrics",
    icon: FaLink,
  },
  {
    id: 2,
    title: "Accounts",
    icon: FaUserGroup,
  },
  {
    id: 3,
    title: "Add-ons",
    icon: FaCirclePlus,
  },
];
const SettingsMenuItem = function ({
  Icon,
  title,
}: {
  Icon: IconType;
  title: string;
}) {
  return (
    <Box
      sx={{
        background: "#ffffff",
        height: "15.5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "15px",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Icon style={{ height: "3rem", width: "3rem", color: "#ccd7d0" }} />
        <span
          style={{
            display: "block",
            marginTop: "2rem",
            fontWeight: "700",
            fontSize: "2rem",
            color: "#355f44",
          }}
        >
          {title}
        </span>
      </Box>
    </Box>
  );
};

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
      <Box
        sx={{
          marginTop: "3.2rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "1.5rem",
        }}
      >
        {SettingsMenuItems.map((e) => {
          return <SettingsMenuItem title={e.title} key={e.id} Icon={e.icon} />;
        })}
      </Box>
    </Box>
  );
}

export default SettingsPage;
