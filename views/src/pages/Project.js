import React from "react";

import "./Project.css";
import Chat from "../components/project/Chat";
import TrelloBoard from "../components/project/TrelloBoard/TrelloBoard";
import MembersList from "../components/project/MembersList";
import ProjectOptions from "../components/project/ProjectOptions";

const Project = () => {
  return (
    <div className="background__project flex_row">
      <Chat />
      <div className="flex__column" style={{ gap: "24px", width:"100%" }}>
        <TrelloBoard />
        <div class="ProjectDetailsContainer flex_row" style={{gap: "24px"}}>
          <MembersList />
          <ProjectOptions />
        </div>
      </div>
    </div>
  );
};

export default Project;
