import { Box } from "@mui/material";
import React from "react";
import TopBar from "../../DashboardRight/TopBar";
import CustomButton from "../../../microComponents/CustomButton";
import SettingsMenuItem from "./SettingsMenuItem";
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
  link: string;
}
const baseUrl = "/dashboard/settings";
const SettingsMenuItems: SettingsMenuItemsInterface[] = [
  {
    id: 0,
    title: "Data Sources",
    icon: FaDatabase,
    link: `${baseUrl}/data-source`,
  },
  {
    id: 1,
    title: "Metrics",
    icon: FaLink,
    link: `${baseUrl}/metrics`,
  },
  {
    id: 2,
    title: "Accounts",
    icon: FaUserGroup,
    link: `${baseUrl}/accounts`,
  },
  {
    id: 3,
    title: "Add-ons",
    icon: FaCirclePlus,
    link: `${baseUrl}/add-ons`,
  },
];

function SettingsPage() {
  return (
    <Box>
      <TopBar message={"Settings"}></TopBar>
      <Box
        sx={{
          marginTop: "3.2rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "1.5rem",
        }}
      >
        {SettingsMenuItems.map((e) => {
          return (
            <SettingsMenuItem
              title={e.title}
              key={e.id}
              Icon={e.icon}
              link={e.link}
            />
          );
        })}
      </Box>
    </Box>
  );
}

export default SettingsPage;
