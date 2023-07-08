import React, { useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import SampleAvatarImage from "../../../images/profile.jpeg";
import {
  FaAddressBook,
  FaGauge,
  FaFolderOpen,
  FaGear,
  FaQ,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
const MenuItems = [
  {
    id: 0,
    name: "metrics",
    link: "/dashboard/analytics",
    Icon: FaGauge,
  },
  {
    id: 1,
    name: "contacts",
    link: "/dashboard/contacts",
    Icon: FaAddressBook,
  },
  {
    id: 2,
    name: "reports",
    link: "/dashboard/reports",
    Icon: FaFolderOpen,
  },
];
function DashBoardLeft() {
  const [active, setActive] = useState(0);
  return (
    <Box
      sx={{
        padding: "2.75rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        background: "white",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Link
          to="/dashboard/analytics"
          style={{
            height: "4.6rem",
            width: "4.6rem",
            background: "#eaefec",
            borderRadius: "15px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FaQ
            style={{
              height: "2.5rem",
              width: "2.5rem",
              display: "inline-block",
              color: "#355f44",
            }}
          />
        </Link>
        {MenuItems.map((e) => {
          return (
            <Link
              key={e.id}
              to={e.link}
              style={{
                height: "4.6rem",
                width: "4.6rem",
                background: `${e.id === active ? "#d6eed1" : "white"}`,
                marginTop: "1.8rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: `3px solid ${e.id === active ? "#c6e2c3" : "#eaefec"}`,
                borderRadius: "15px",
              }}
              onClick={() => {
                setActive(e.id);
              }}
            >
              <e.Icon
                style={{
                  height: "1.5rem",
                  width: "1.5rem",
                  display: "inline-block",
                  color: "#355f44",
                }}
              />
            </Link>
          );
        })}
      </Box>
      <Box>
        <hr
          style={{
            display: "block",
            height: "3px",
            background: "#eaefec",
            margin: "4px",
            border: "none",
          }}
        />
        <Link
          to="/dashboard/settings"
          style={{
            height: "4.6rem",
            width: "4.6rem",
            background: "white",
            marginTop: "1.8rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "3px solid #eaefec",
            borderRadius: "15px",
          }}
        >
          <FaGear
            style={{
              height: "1.5rem",
              width: "1.5rem",
              display: "inline-block",
              color: "#355f44",
            }}
          />
        </Link>
        <Avatar
          sx={{ height: "4.6rem", width: "4.6rem", marginTop: "1.8rem" }}
          alt="person name"
          src={SampleAvatarImage}
        />
      </Box>
    </Box>
  );
}

export default DashBoardLeft;
