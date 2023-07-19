import {
  baseUri,
  signInWithPasswordEndPoint,
  signInWithGoogleEndPoint,
  metricUri,
  REDIRECT_URI,
  OAuthRedirectUri,
  profileEndPoint,
  connectDataSource,
  accountSummaries,
} from "./CONSTANTS";

const urlFunctionsObject = {
  signInWithGoogle: () =>
    `${baseUri}/${signInWithGoogleEndPoint}?${REDIRECT_URI}=${OAuthRedirectUri}`,
  signInWithPassword: () => `${baseUri}/${signInWithPasswordEndPoint}/`,
  getMetric: (metricsId: string) => `${baseUri}/${metricUri}`,
  getProfile: () => `${baseUri}/${profileEndPoint}`,
  getDataSourceConnect: () => `${baseUri}/${connectDataSource}`,
  getMatrics: (
    id: number,
    from: string,
    to: string,
    metric: string,
    dimension: string[]
  ) =>
    `${baseUri}/${metricUri}/${id}?from=${from}&to=${to}&metric=${metric}${dimension.map(
      (e) => `&dimension=${e}`
    )}`,
  getAccountSummaries: () => `${baseUri}/${accountSummaries}`,
};
export default urlFunctionsObject;
