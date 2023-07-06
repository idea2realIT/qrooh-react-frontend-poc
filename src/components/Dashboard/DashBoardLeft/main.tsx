import React from "react";
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
const MenuItems = [
  {
    id: 0,
    name: "metrics",
    link: "/metrics",
    Icon: FaGauge,
  },
  {
    id: 1,
    name: "contacts",
    link: "/contacts",
    Icon: FaAddressBook,
  },
  {
    id: 2,
    name: "reports",
    link: "./reports",
    Icon: FaFolderOpen,
  },
];
function main() {
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
        <a
          href="/something"
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
        </a>
        {MenuItems.map((e) => {
          return (
            <a
              key={e.id}
              href={e.link}
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
              <e.Icon
                style={{
                  height: "1.5rem",
                  width: "1.5rem",
                  display: "inline-block",
                  color: "#355f44",
                }}
              />
            </a>
          );
        })}
      </Box>
      <Box>
        <a
          href="/settings"
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
        </a>
        <Avatar
          sx={{ height: "4.6rem", width: "4.6rem", marginTop: "1.8rem" }}
          alt="person name"
          src={SampleAvatarImage}
        />
      </Box>
    </Box>
  );
}

export default main;
