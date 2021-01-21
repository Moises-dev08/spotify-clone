// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "17b26178d73344b687f7cbb44f4fa1e7";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "playlist-read-collaborative",
];

// Here we are pulling the acces token
export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1) // get the first substring
    .split("&") // split the url at the &
    .reduce((initial, item) => {
      // first agrument: initial value of the reduce. Second argument:  is the item that we are going to get each time it loop through
      let parts = item.split("="); // split the url at the =
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
