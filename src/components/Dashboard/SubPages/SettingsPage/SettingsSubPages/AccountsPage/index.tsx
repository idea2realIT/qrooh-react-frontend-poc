import { Box } from "@mui/material";
import React from "react";
import {
  FaCirclePlus,
  FaUserLarge,
  FaAngleDown,
  FaEllipsis,
} from "react-icons/fa6";
import CustomButton from "components/microComponents/CustomButton";
import CustomWrapper from "components/microComponents/CustomWrapper";
import TopBar from "components/Dashboard/DashboardRight/TopBar";
const AccountsArray = [
  {
    id: 0,
    email: "thom@yourbrand.io",
    role: "Admin",
  },
  {
    id: 1,
    email: "john@yourbrand.io",
    role: "Member",
  },
  {
    id: 2,
    email: "jade@test.ni",
    role: "Client",
  },
];
function AccountsPage() {
  return (
    <Box>
      <TopBar message="Accounts">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CustomButton Icon={FaCirclePlus} LightText="Add new account" />
        </Box>
      </TopBar>
      <CustomWrapper sx={{ marginTop: "3rem" }}>
        <Box sx={{}}>
          {AccountsArray.map((e) => {
            return (
              <Box key={e.id}>
                <Box
                  sx={{
                    height: "8.1rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1.5rem",
                    borderTop: `${e.id === 0 ? "none" : "3px solid #EAEFEC"}`,
                  }}
                >
                  <Box
                    sx={{
                      color: "#355f44",
                      fontSize: "1.2rem",
                      fontWeight: 700,
                    }}
                  >
                    {e.email}
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      width: "17.5rem",
                      justifyContent: "space-between",
                      color: "#355F44",
                    }}
                  >
                    <span>{e.role}</span>
                    <Box>
                      <FaEllipsis
                        style={{
                          height: "1.3rem",
                          width: "1.3rem",
                          color: "355F44",
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </CustomWrapper>
    </Box>
  );
}

export default AccountsPage;
