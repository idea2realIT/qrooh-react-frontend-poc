import axios from "axios";
import UrlFunctionsObject from "api/Uri";
import Cookies from "js-cookie";
interface ApiFailureResponse {
  timestamp: string;
  status: number;
  error: string;
  path: string;
}
interface ApiSuccessResponse {
  metricHeaders: [
    {
      name: string;
      type: string;
    }
  ];
  rows: [
    {
      metricValues: [
        {
          value: string;
        }
      ];
    }
  ];
  rowCount: number;
  metadata: {
    currencyCode: string;
    timeZone: string;
  };
  kind: "analyticsData#runReport";
}
const sampleMetricsResponseWithoutDimensions: ApiSuccessResponse = {
  metricHeaders: [
    {
      name: "averageSessionDuration",
      type: "TYPE_SECONDS",
    },
  ],
  rows: [
    {
      metricValues: [
        {
          value: "84.0426951552277",
        },
      ],
    },
  ],
  rowCount: 1,
  metadata: {
    currencyCode: "EUR",
    timeZone: "Europe/Amsterdam",
  },
  kind: "analyticsData#runReport",
};
export default async function getMatrics() {
  try {
    const metrics: ApiSuccessResponse = await axios.get(
      UrlFunctionsObject.getProfile(),
      {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );
    return {
      success: true,
      metrics: metrics,
    };
  } catch (e) {
    return {
      success: false,
      metrics: sampleMetricsResponseWithoutDimensions,
    };
  }
}
export type { ApiFailureResponse, ApiSuccessResponse };
