import React from "react";

import "./Workspaces.css";
import Card from "../UI/Card";

const Workspaces = () => {
  return (
    <Card className="Card__workspaces flex__column">
      <h2 className="h2__title--small--grey">YOUR WORKSPACES</h2>
      <hr style={{margin:"10px 0"}}/>
      <div id="projectListContainer">
        <a href="/project" className="flex__column" style={{ display: "flex", gap: "10px" }}>
          <div className="flex_row" style={{ gap: "10px" }}>
            <div className="projectLogo">
              <p>T</p>
            </div>
            <h3 className="projectTitle">Trello Clone</h3>
          </div>
          <div>
            <p>
              <strong>Description:</strong> Applicaiton where you can manage and
              delegate tasks, communicate via chat, and take personal notes.
            </p>
            <p>
              <strong>Date Created: </strong>2/16/2022
            </p>
          </div>
        </a>
      </div>
    </Card>
  );
};

export default Workspaces;
