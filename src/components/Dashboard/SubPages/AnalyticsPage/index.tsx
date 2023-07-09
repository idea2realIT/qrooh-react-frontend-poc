import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import TopBar from "../../DashboardRight/TopBar";
import {
  FaRegCalendarDays,
  FaAngleDown,
  FaUserLarge,
  FaCirclePlus,
  FaCircleUp,
  FaCircleDown,
} from "react-icons/fa6";
import CustomButton from "../../../microComponents/CustomButton";
import CustomWrapper from "../../../microComponents/CustomWrapper";

const AnalyticsArray = [
  { id: 0, label: "Leads", data: 62, change: "12%", changeSign: true },
  { id: 1, label: "Visitors", data: 1250, change: "1%", changeSign: false },
  {
    id: 2,
    label: "Impressions",
    data: "51,3K",
    change: "7%",
    changeSign: true,
  },
  {
    id: 3,
    label: "Total ad spend",
    data: "$744",
    change: "12%",
    changeSign: false,
  },
];

function AnalyticsPage() {
  return (
    <>
      <TopBar message="Good evening, Thom!">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CustomButton Icon={FaCirclePlus} LightText="Add new Metric" />
          <CustomButton
            Icon={FaRegCalendarDays}
            LightText="Your overview of the"
            DarkText="last 7 Days"
            AfterIcon={FaAngleDown}
            sx={{ marginLeft: "1rem" }}
          />
          <CustomButton
            Icon={FaUserLarge}
            DarkText="4yourbrand"
            AfterIcon={FaAngleDown}
            sx={{ marginLeft: "1rem" }}
          />
        </Box>
      </TopBar>
      <CustomWrapper sx={{ marginTop: "3rem" }}>
        <Box>
          {AnalyticsArray.map((e) => {
            return (
              <Box>
                {e.id ? <Divider /> : ""}
                <Box
                  sx={{
                    height: "5rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ color: "#355f44", fontSize: "1.2rem" }}>
                    <span style={{ fontWeight: "700" }}>{e.data} &nbsp;</span>
                    {e.label}
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      height: "100%",
                      color: `${e.changeSign ? "#59b947" : "#e27979"}`,
                      fontSize: "1.2rem",
                      fontWeight: "700",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                      }}
                    >
                      {e.changeSign ? <FaCircleUp /> : <FaCircleDown />}
                    </span>
                    <span
                      style={{ display: "inline-block", marginLeft: "0.5rem" }}
                    >
                      {e.change}
                    </span>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </CustomWrapper>
    </>
  );
}

export default AnalyticsPage;
