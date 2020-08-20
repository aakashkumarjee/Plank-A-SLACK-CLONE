import React from "react";
import "./SidebarOptions.css";
import { useHistory } from "react-router-dom";
import db from "./firebase";
function SidebarOptions({ Icon, title, id, addChannelOption }) {
  const history = useHistory();
  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push(title);
    }
  };
  const addChannel = () => {
    const channelName = prompt("Please Enter Channel Name");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };
  return (
    <div
      className="sidebarOptions"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOptions-icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOptions-channel">
          <span className="sidebarOptions-hash">#</span> {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOptions;
