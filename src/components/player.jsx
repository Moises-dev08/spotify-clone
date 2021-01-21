import React from "react";
import Sidebar from "./sidebar";
import Body from "./body";
import Footer from "./footer";
import "../styles/player.css";

const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer spotify={spotify} />
    </div>
  );
}

export default Player;
