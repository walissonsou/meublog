import React, {useState, useEffect } from 'react';
import axios from 'axios';

export const Project = () => {

  const [ projects, setProjects ] = useState([])
  
  useEffect(() => {
  axios.get('https://api.github.com/users/walissonsou/repos')
    .then(res => res.json())
    .then(data => setProjects(data))
 }, [])
 
return (
  <div>
    <ul>
      {
        projects.map(projects => {
          return (
            <li>
              <h3> {projects.name}</h3>
            </li>
          )
        })
      }
    </ul>
  </div>

)
    }
