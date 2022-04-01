import React, {useState, useEffect} from "react";

import "./Workspaces.css";
import Card from "../UI/Card";

const Workspaces = () => {
  const [allProject, setAllProjects] = useState([]);

  const getProjects = async() => {
    const projectData = await fetch("api/users/projects");
    let data = await projectData.json()
    setAllProjects(data.projects);
    console.log("projects", data.projects);
  }

  useEffect(()=> {
    console.log('test')
    getProjects();
  }, []);

  return (
    <Card className="Card__workspaces flex__column">
      <h2 className="h2__title--small--grey">YOUR WORKSPACES</h2>
      <hr style={{ margin: "10px 0" }} />
      <div id="projectListContainer">
        {allProject.map((project) => (
          <a
            href={`/project/${project.id}`}
            className="flex__column"
            style={{ display: "flex", gap: "10px" }}
          >
            <div className="flex_row" style={{ gap: "10px" }}>
              <div className="projectLogo">
                <p>{project.name.charAt(0).toUpperCase()}</p>
              </div>
              <h3 className="projectTitle">{project.name}</h3>
            </div>
            <div>
              <p>
                <strong>Description: </strong>{project.description}
              </p>
              <p>
                <strong>Date Created: </strong>{project.date_created}
              </p>
            </div>
          </a>
        ))}
      </div>
    </Card>
  );
};

export default Workspaces;
