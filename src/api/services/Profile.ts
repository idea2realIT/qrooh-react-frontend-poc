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

const sampleProfile = {
  id: 3,
  name: "Test 4yourbrand",
  email: "test.4yourbrand@gmail.com",
  imageUrl:
    "https://lh3.googleusercontent.com/a/AAcHTtfISa6Fyc6AQdHpB3qhO6LMn-HL7XWRp96PnymznXJS=s96-c",
  emailVerified: false,
  provider: "google",
  providerId: "105011330744414838993",
};

export async function getProfile() {
  try {
    const profile: ApiSuccessResponse = await axios.get(
      UrlFunctionsObject.getProfile(),
      {
        headers: {
          Authorization: Cookies.get("token"),
        },
      }
    );
    return {
      success: true,
      profile,
    };
  } catch (e) {
    return {
      success: false,
      profile: sampleProfile,
    };
  }
}
export type { ApiFailureResponse, ApiSuccessResponse };
