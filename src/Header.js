import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
function Header() {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      <div className="header-left">
        {/* Avatar for Logged In user*/}
        <Avatar
          className="header-avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        ></Avatar>
        <AccessTimeIcon
          className="header-time-icon"
          alt="Akash"
        ></AccessTimeIcon>
      </div>
      <div className="header-search">
        {/* Search Icon and Input*/}
        <SearchIcon />
        <input type="text" placeholder="Enter search Item" />
      </div>
      <div className="header-right">
        {/* Help Icon*/}
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
