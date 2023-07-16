import {
  baseUri,
  signInWithPasswordEndPoint,
  signInWithGoogleEndPoint,
  metricUri,
  REDIRECT_URI,
  OAuthRedirectUri,
  profileEndPoint,
} from "./CONSTANTS";

const urlFunctionsObject = {
  signInWithGoogle: () =>
    `${baseUri}/${signInWithGoogleEndPoint}?${REDIRECT_URI}=${OAuthRedirectUri}`,
  signInWithPassword: () => `${baseUri}/${signInWithPasswordEndPoint}/`,
  getMetric: (metricsId: string) => `${baseUri}/${metricUri}`,
  getProfile: () => `${baseUri}/${profileEndPoint}`,
};
export default urlFunctionsObject;
