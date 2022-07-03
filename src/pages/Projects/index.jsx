import React, {useState } from 'react';
import axios from 'axios';

import styles from './Project.module.css'


export const Project = () => {

  const [ projects, setProjects ] = useState([])
 
  const getRepos = () => {
  axios.get('https://api.github.com/users/walissonsou/)repos')
    .then(res => res.json())
    .then(data =>setProjects(data))
    .catch(error => {
      console.log(error);
    })
  };

  return (
    <div className={styles.container}>
    <h2> Projetos no GitHub </h2>
    <div>
    {      
      projects.map((project) =>
      <div key={project.id}>
      <p>{project.name}</p>      
      </div>    
     )
  }
    
  </div>
  </div>
  )}
