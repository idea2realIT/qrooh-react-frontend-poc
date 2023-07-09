import { Box } from "@mui/material";
import React from "react";
import {
  FaCirclePlus,
  FaUserLarge,
  FaAngleDown,
  FaEllipsis,
} from "react-icons/fa6";
import CustomButton from "../../../../../microComponents/CustomButton";
import CustomWrapper from "../../../../../microComponents/CustomWrapper";
import TopBar from "../../../../DashboardRight/TopBar";
const MetricsArray = [
  {
    id: 0,
    name: "Leads",
    type: "Conversion",
    account: "Google Analytics",
  },
  {
    id: 1,
    name: "Visitors",
    type: "Clicks",
    account: "Google Ads",
  },
  {
    id: 2,
    name: "Ad imporessions",
    type: "Impressions",
    account: "Google Ads",
  },
  {
    id: 3,
    name: "Ad Spend",
    type: "Total Cost",
    account: "Google Ads",
  },
];
function MetricsPage() {
  return (
    <Box>
      <TopBar message="Your metrics">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CustomButton Icon={FaCirclePlus} LightText="Add new Metrics" />
          <CustomButton
            Icon={FaUserLarge}
            DarkText="4yourbrand"
            AfterIcon={FaAngleDown}
            sx={{ marginLeft: "1rem" }}
          />
        </Box>
      </TopBar>
      <CustomWrapper sx={{ marginTop: "3rem" }}>
        <Box sx={{}}>
          {MetricsArray.map((e) => {
            return (
              <Box
                sx={{
                  height: "8.1rem",
                  display: "grid",
                  padding: "1.5rem",
                  alignItems: "center",
                  gridTemplateColumns: "1.5fr 1.8fr 1fr 1fr",
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
                  {e.name}
                </Box>
                <Box
                  sx={{
                    color: "#355F44",
                  }}
                >
                  <span>{e.type}</span>
                </Box>
                <Box
                  sx={{
                    color: "#355F44",
                  }}
                >
                  <span>{e.account}</span>
                </Box>
                <Box sx={{ textAlign: "end" }}>
                  <FaEllipsis
                    style={{
                      height: "1.3rem",
                      width: "1.3rem",
                      color: "355F44",
                    }}
                  />
                </Box>
              </Box>
            );
          })}
        </Box>
      </CustomWrapper>
    </Box>
  );
}

export default MetricsPage;
