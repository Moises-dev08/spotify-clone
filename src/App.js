import React, { useEffect } from "react";
import Login from "./components/login";
import { getTokenFromResponse } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/player";
import { useStateProviderValue } from "./state/StateProvider";
import "./App.css";

// Super object that is responsable of any source of interaction between our app and spotify api.
const spotify = new SpotifyWebApi();

const App = () => {
  // We can pull information from what ever is here {}
  const [{ token }, dispatch] = useStateProviderValue();

  useEffect(() => {
    const hash = getTokenFromResponse();
    // Here we are cleaning the url and the token is going to be hidden.
    window.location.hash = "";

    const _token = hash.access_token;

    spotify.setAccessToken(_token); // Here we are given the access token to the spotify api

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
    }

    spotify.getMe().then((user) => {
      dispatch({
        type: "SET_USER",
        user: user,
      });
    });

    spotify.getUserPlaylists().then((playlists) => {
      dispatch({
        type: "SET_PLAYLISTS",
        playlists: playlists,
      });
    });

    spotify.getMyTopArtists().then((response) =>
      dispatch({
        type: "SET_TOP_ARTISTS",
        top_artists: response,
      })
    );

    spotify.getPlaylist("37i9dQZEVXcO4VAXD82g60").then((response) =>
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      })
    );

    dispatch({
      type: "SET_SPOTIFY",
      spotify: spotify,
    });
  }, [token, dispatch]);

  return (
    <div className="app">
      {!token && <Login />}
      {token && <Player spotify={spotify} />}
    </div>
  );
};
export default App;
