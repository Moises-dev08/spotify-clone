import React from "react";
import { useStateProviderValue } from "../state/StateProvider";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import "../styles/header.css";

const Header = () => {
  const [{ user }, dispatch] = useStateProviderValue();

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className="header__right">
        <Avatar
          className="header__rightAvatar"
          alt={user?.display_name}
          //src={user?.images[0].url || user?.display_name}
        />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
