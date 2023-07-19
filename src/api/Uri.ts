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
export interface getMetricsFunctionArgumentsType {
  property: number;
  from: string;
  to: string;
  metric: string;
  dimension?: string[];
}
const urlFunctionsObject = {
  signInWithGoogle: () =>
    `${baseUri}/${signInWithGoogleEndPoint}?${REDIRECT_URI}=${OAuthRedirectUri}`,
  signInWithPassword: () => `${baseUri}/${signInWithPasswordEndPoint}/`,
  getProfile: () => `${baseUri}/${profileEndPoint}`,
  getDataSourceConnect: () => `${baseUri}/${connectDataSource}`,
  getMetrics: ({
    property,
    from,
    to,
    metric,
    dimension,
  }: getMetricsFunctionArgumentsType) => {
    let dimensionsUri = "";
    if (dimension) {
      dimension.map((e) => {
        dimensionsUri += `&dimension=${e}`;
      });
    }

    return `${baseUri}/${metricUri}/${property}?from=${from}&to=${to}&metric=${metric}${dimensionsUri}`;
  },
  getAccountSummaries: () => `${baseUri}/${accountSummaries}`,
};
export default urlFunctionsObject;
