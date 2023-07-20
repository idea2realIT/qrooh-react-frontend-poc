import urlFunctionsObject from "api/Uri";
import axios from "axios";
import Cookies from "js-cookie";
export interface SignInAPISuccessResponse {
  accessToken: string;
  tokenType: string;
}
export interface SignUpAPISuccessResponse {
  success: boolean;
  message: string;
}
function setTokenInCookie(token: string) {
  Cookies.set("token", token, { expires: 3 });
}
export async function loginWithPassword(email: string, password: string) {
  try {
    const response = await axios.post(urlFunctionsObject.signInWithPassword(), {
      email,
      password,
    });
    const data: SignInAPISuccessResponse = response.data;
    setTokenInCookie(data.accessToken);
    return {
      success: true,
      token: data.accessToken,
    };
  } catch (e) {
    return {
      success: false,
      token: undefined,
    };
  }
}
export async function signUpWithPassword(
  name: string,
  email: string,
  password: string
) {
  try {
    const response = await axios.post(urlFunctionsObject.signUpWithPassword(), {
      name,
      email,
      password,
    });
    const data: SignUpAPISuccessResponse = response.data;
    if (data.success) {
      const login = await loginWithPassword(email, password);
      if (login.token) {
        Cookies.set("token", login.token, { expires: 3 });
        return {
          success: true,
        };
      }
    }
    return {
      success: false,
    };
  } catch (e) {
    return {
      success: false,
    };
  }
}
