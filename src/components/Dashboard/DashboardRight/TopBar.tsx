import { Box, Typography } from "@mui/material";
import Select from "components/microComponents/Select";
import React, { ReactNode, useEffect, useState } from "react";
import { FaUserLarge } from "react-icons/fa6";
import { getAccountSummaries } from "api/services/AccountSummaries";
type user = { id: number; value: string };
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
  const [users, setUsers] = useState<user[]>([]);
  const callAccountSummariesAPI = async function () {
    const response = await getAccountSummaries();
    if (response.summaries) {
      const usersArray: user[] = [];
      //@ts-expect-error
      response.summaries.map((e, index) => {
        usersArray.push({ id: index, value: e.displayName });
      });
      setUsers(usersArray);
    }
  };
  useEffect(() => {
    callAccountSummariesAPI();
  }, []);
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
