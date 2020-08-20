import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SidebarOptions from "./SidebarOptions";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import db from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
function Sidebar() {
  const [{ user }] = useStateValue();
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    //This code runs once when sidebar loads
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-info">
          <h2>Inquisitive Coder</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOptions Icon={InsertCommentIcon} title="Threads" />
      <SidebarOptions Icon={InboxIcon} title="Mentions and Reactions" />
      <SidebarOptions Icon={DraftsIcon} title="Saved Items" />
      <SidebarOptions Icon={BookmarkBorderIcon} title="Channel Browser" />
      <SidebarOptions Icon={PeopleAltIcon} title="People and  User Groups" />
      <SidebarOptions Icon={AppsIcon} title="Apps" />
      <SidebarOptions Icon={FileCopyIcon} title="File Browser" />
      <SidebarOptions Icon={ExpandLessIcon} title="Show Less" />
      <hr />
      <SidebarOptions Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidebarOptions
        Icon={AddIcon}
        title="Add Channel"
        addChannelOption="true"
      />
      {/* Connect to db and list all the rooms*/}
      {channels.map((channel) => (
        <SidebarOptions title={channel.name} id={channel.id} />
      ))}
    </div>
  );
}

export default Sidebar;
