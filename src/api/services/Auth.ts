export async function signInWithGoogle() {
  var width = 500;
  var height = 600;
  var left = window.screen.width / 2 - width / 2;
  var top = window.screen.height / 2 - height / 2;

  var oauthWindow = window.open(
    "https://accounts.google.com/o/oauth2/v2/auth" +
      "?client_id=452353758-shvbrpv3bsn0pfrumqa64g9ldm20hm0l.apps.googleusercontent.com" +
      "&redirect_uri=http://localhost:3000" +
      "&response_type=code" +
      "&scope=email",
    "Google Sign-In",
    "width=" + width + ",height=" + height + ",top=" + top + ",left=" + left
  )!;

  // Optional: Handle the closed window or perform actions after successful sign-in
  var checkWindowClosed = setInterval(function () {
    if (oauthWindow.closed) {
      clearInterval(checkWindowClosed);
      // Perform actions after the window is closed
    }
  }, 1000);
}
export async function signInWithEmailAndPassword(
  email: string,
  password: string
) {}
