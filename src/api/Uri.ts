import {
  baseUri,
  signInWithPasswordEndPoint,
  signInWithGoogleEndPoint,
  matrixUri,
} from "./CONSTANTS";

const urlFunctionsObject = {
  signInWithGoogle: () => `${baseUri}/${signInWithGoogleEndPoint}`,
  signInWithPassword: () => `${baseUri}/${signInWithPasswordEndPoint}/`,
  getMatrics: (matricsId: string) => `${baseUri}/${matrixUri}`,
};
export default urlFunctionsObject;
