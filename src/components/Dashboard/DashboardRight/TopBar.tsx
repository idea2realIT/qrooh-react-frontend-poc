import { Box, Typography } from "@mui/material";
import CustomButton from "components/microComponents/CustomButton";
import Select from "components/microComponents/Select";
import React, { ReactNode } from "react";
import { FaUserLarge, FaAngleDown } from "react-icons/fa6";

const users = [
  { id: 0, value: "4yourbrand" },
  { id: 1, value: "4yourbrand2" },
  { id: 2, value: "4yourbrand3" },
];
function TopBar({
  message,
  children,
}: {
  message: string;
  children?: ReactNode;
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
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {children}
        <Select
          options={users}
          onChange={() => {
            console.log("something happend");
          }}
          Icon={FaUserLarge}
          sx={{ marginLeft: "1rem" }}
        />
      </Box>
    </Box>
  );
}

export default TopBar;
