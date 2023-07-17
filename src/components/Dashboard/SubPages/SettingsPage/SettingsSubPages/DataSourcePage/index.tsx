import { Box, Divider } from "@mui/material";
import React from "react";
import {
  FaAngleDown,
  FaCirclePlus,
  FaUserLarge,
  FaEllipsis,
  FaCircle,
} from "react-icons/fa6";
import CustomWrapper from "../../../../../microComponents/CustomWrapper";
import CustomButton from "../../../../../microComponents/CustomButton";
import TopBar from "../../../../DashboardRight/TopBar";
import urlFunctionsObject from "api/Uri";
const DataSourceArray = [
  { id: 0, source: "Google Analytics", active: false },
  {
    id: 1,
    source: "Google Ads",
    active: true,
  },
];
function ActivateButton() {
  return <a href={urlFunctionsObject.getDataSourceConnect()}>Activate</a>;
}
function DataSourcePage() {
  return (
    <Box>
      <TopBar message="Your Data sources">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CustomButton Icon={FaCirclePlus} LightText="Add new data source" />
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
          {DataSourceArray.map((e) => {
            return (
              <Box>
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
                    {e.source}
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      width: "17.5rem",
                      justifyContent: "space-between",
                    }}
                  >
                    {e.active ? (
                      <Box
                        sx={{
                          color: "#59B947",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <FaCircle
                          style={{
                            color: "#59B947",
                            height: "1.1rem",
                            width: "1.1rem",
                          }}
                        />
                        <span
                          style={{ marginLeft: "1rem", fontSize: "1.25rem" }}
                        >
                          Active
                        </span>
                      </Box>
                    ) : (
                      <ActivateButton />
                    )}
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

export default DataSourcePage;
