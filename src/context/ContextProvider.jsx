import React, { useState, useEffect } from "react";
import { api, apiposts } from "../services/api";
import { MyContext } from "./myContext";

export const ContextProvider = ({ children}) => {
  const [projects, setProjects] = useState([]);
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getRepos().catch((err) => console.log(err));
  }, []);

  const getRepos = async () => {
    await api.get("repos").then((res) => setProjects(res.data));
  };

  useEffect(() => {
     getPosts().catch((err) =>console.log(err))
  })
  
  const getPosts = async () => {
    await apiposts.get("posts") 
    .then((res) => JSON.stringify(res))
    .then((data) => setPosts((data))
  )};

  return (
    <MyContext.Provider value={[projects,posts]}>
      {children}
    </MyContext.Provider>
  );
};
