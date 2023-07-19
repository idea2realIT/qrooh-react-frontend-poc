import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import TopBar from "../../DashboardRight/TopBar";
import { useContext } from "react";
import { ProfileContext } from "components/Providers/ProfileProvider";
import {
  FaRegCalendarDays,
  FaAngleDown,
  FaUserLarge,
  FaCircleUp,
  FaCircleDown,
} from "react-icons/fa6";
import CustomButton, {
  CustomButtonWithRef,
} from "../../../microComponents/CustomButton";
import CustomWrapper from "../../../microComponents/CustomWrapper";
import getMatrics, { APISuccessResponse } from "api/services/Metrics";
import urlFunctionsObject from "api/Uri";
import Select from "components/microComponents/Select";
interface MetricType {
  id: number;
  label: string;
  data: string;
  change: string;
  changeSign: boolean;
}
const AnalyticsArray = [
  { id: 0, label: "Leads", data: "62", change: "12%", changeSign: true },
  { id: 1, label: "Visitors", data: "1250", change: "1%", changeSign: false },
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
const durationOptions = [
  { id: 0, value: "last 7 days" },
  { id: 1, value: "last 28 days" },
  { id: 2, value: "last 14 days" },
];
function AnalyticsPage() {
  const profileValue = useContext(ProfileContext);
  const [metrics, setMetrics] = useState<MetricType[]>();

  async function updateMetrics() {
    const metricsArray: MetricType[] = [];
    AnalyticsArray.map(async (e, index) => {
      const response = await getMatrics({
        property: 1234445,
        from: "12-12-12",
        to: "12-12-12",
        metric: e.label,
        dimension: ["country", "city"],
      });
      console.log("response", response);
      if (response.metrics) {
        metricsArray.push({
          id: index,
          label: e.label,
          data: response.metrics.rows[0].metricValues[0].value,
          change: "12%",
          changeSign: true,
        });
      }
      setMetrics(metricsArray);
    });
  }
  useEffect(() => {
    updateMetrics();
  }, []);
  return (
    <>
      <TopBar
        message={`Good evening, ${
          //@ts-expect-error
          profileValue.profile ? profileValue.profile.data.name : "developer"
        }!`}
      >
        <Select
          onChange={(e) => {
            console.log(e);
          }}
          Icon={FaRegCalendarDays}
          LightText="Your overview of the"
          sx={{ marginLeft: "1rem" }}
          options={durationOptions}
        />
      </TopBar>
      <CustomWrapper sx={{ marginTop: "3rem" }}>
        <Box>
          {metrics &&
            metrics.map((e) => {
              return (
                <Box key={e.id}>
                  {e.id !== 0 ? <Divider /> : ""}
                  <Box
                    sx={{
                      height: "6.25rem",
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
                        style={{
                          display: "inline-block",
                          marginLeft: "0.5rem",
                        }}
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
