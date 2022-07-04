import React, { useContext } from "react";
import { MyContext } from "../../context/myContext";

export const Project = () => {
  const [projects] = useContext(MyContext);

  return (
    <div >
      <h1> Meus projetos  </h1>
      <ul>
        {projects.map((projects) => {
          return (
            <div key={projects.id}>
              <li style={{ marginTop: 10 }}>
                <a href={projects.clone_url} target="_blank" rel="noreferrer">
                  {projects.name}
                </a>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
