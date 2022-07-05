import React, { useContext } from "react";
import { MyContext } from "../../context/myContext";
import styles from './Project.module.css';
export const Project = () => {
  const [projects] = useContext(MyContext);

  return (
    <div className={styles.container}>
      <h1> Meus projetos  </h1>
      <ul>
        {projects.map((projects) => {
          return (
            <div key={projects.id}>
              <li style={{ marginTop: 10 }}>
                <a href={projects.clone_url} target="_blank" rel="noreferrer">
                  {projects.name} <ion-icon name="link-outline"></ion-icon>
                </a>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
