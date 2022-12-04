import React, { useState, useEffect } from "react";
import { api } from "../services/api";
import { MyContext } from "./myContext";

export const ContextProvider = ({ children}) => {
  const [projects, setProjects] = useState([]);
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getRepos().catch((err) => console.log(err));
  }, []);

  const getRepos = async () => {
    await api.get("repos")
    .then((res) => setProjects(res.data));
  };

 
  return (
    <MyContext.Provider value={[projects,posts]}>
      {children}
    </MyContext.Provider>
  );
};
