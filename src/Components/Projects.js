import React, { useState } from "react";
import data from "../data/projects.json";
import { Route, Link, Switch } from "react-router-dom";
import ProjectDetail from "./ProjectDetail";

export default function Projects() {
  const [projects] = useState(data.projects);
  const [showDetail, setShowDetail] = useState(false);
  const onClick = () => {
    setShowDetail(true);
  };
  return (
    <div className="projectContainer" id="project">
      <h1>Projects</h1>
      <div className="projectMain">
        <div className="projectItems">
          {projects.map((project) => {
            return (
              <Switch>
                <Route>
                  <Link
                    onClick={onClick}
                    to={{
                      pathname: `/projects/${project.name}`,
                      state: project,
                    }}
                  >
                    <img
                      className="image"
                      style={{
                        borderRadius: "15%",
                      }}
                      src={project.image}
                      alt={project.name}
                    />
                  </Link>
                </Route>
              </Switch>
            );
          })}
        </div>
        <div className="proejctDetail">
          <Route
            path="/projects/:projectname"
            exact={true}
            render={ProjectDetail}
          />
        </div>
      </div>
      <div className="showDetail" style={{ display: showDetail === false ? "block"  : "none" }}>
      <h1>Please choose one of my project.</h1>
      </div>
    </div>
  );
}
