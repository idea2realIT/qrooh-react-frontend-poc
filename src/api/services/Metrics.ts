import axios from "axios";
import UrlFunctionsObject from "api/Uri";
import Cookies from "js-cookie";
import { getMetricsFunctionArgumentsType } from "api/Uri";
export interface ApiFailureResponse {
  timestamp: string;
  status: number;
  error: string;
  path: string;
}
export interface APISuccessResponse {
  metricHeaders: MetricHeader[];
  rows: Row[];
  rowCount: number;
  metadata: Metadata;
  kind: string;
}

export interface Metadata {
  currencyCode: string;
  timeZone: string;
}

export interface MetricHeader {
  name: string;
  type: string;
}

export interface Row {
  metricValues: MetricValue[];
}

export interface MetricValue {
  value: string;
}

const sampleMetricsResponseWithoutDimensions: APISuccessResponse = {
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
export default async function getMatrics({
  property,
  from,
  to,
  metric,
  dimension,
}: getMetricsFunctionArgumentsType) {
  try {
    throw new Error("intentional error");
    const metrics = await axios.get(
      UrlFunctionsObject.getMetrics({ property, from, to, metric, dimension }),
      {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );
    console.log("api call successfull");
    const data: APISuccessResponse = metrics.data;
    return {
      success: true,
      metrics: data,
    };
  } catch (e) {
    return {
      success: false,
      metrics: sampleMetricsResponseWithoutDimensions,
    };
  }
}
