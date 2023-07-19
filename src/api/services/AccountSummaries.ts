import axios from "axios";
import UrlFunctionsObject from "api/Uri";
import Cookies from "js-cookie";
import { ApiSuccessResponse } from "./Profile";
interface ApiFailureResponse {
  timestamp: string;
  status: number;
  error: string;
  path: string;
}
export interface Account {
  account: string;
  displayName: string;
  name: string;
  propertySummaries: PropertySummary[];
}
export type APISuccessResponse = Account[];
export interface PropertySummary {
  displayName: string;
  parent: string;
  property: string;
  propertyType: string;
}

export async function getAccountSummaries() {
  try {
    const summaries = await axios.get(
      UrlFunctionsObject.getAccountSummaries(),
      {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );
    const data: ApiSuccessResponse = summaries.data;
    return {
      success: true,
      summaries: data,
    };
  } catch (e) {
    return {
      success: false,
      summaries: null,
    };
  }
}
