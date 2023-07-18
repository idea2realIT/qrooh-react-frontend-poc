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
  id: number;
  name: string;
  email: string;
  imageUrl: string;
  emailVerified: boolean;
  provider: string;
  providerId: string;
}
export async function getAccountSummaries() {
  try {
    const summaries: ApiSuccessResponse = await axios.get(
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
      summaries,
    };
  } catch (e) {
    return {
      success: false,
      profile: null,
    };
  }
}
export type { ApiFailureResponse, ApiSuccessResponse };
