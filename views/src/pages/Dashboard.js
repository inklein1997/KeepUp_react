import React from "react";

import "./Dashboard.css";
import Notes from "../components/dashboard/Notes/Notes";
import Workspaces from "../components/dashboard/Workspaces";
import ManageWorkspaces from "../components/dashboard/ManageWorkspaces"

const Dashboard = () => {
  return (
    <div className="background__dashboard flex_row">
      <Notes />
      <div className="flex__column" style={{gap:"24px", width:"100%"}}>
        <Workspaces />
        <ManageWorkspaces />
      </div>
    </div>
  );
};

export default Dashboard;
