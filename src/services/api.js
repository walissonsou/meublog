import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com/users/walissonsou/",
});

export const apibook = axios.create({
  baseURL: "http://localhost:3333/"
});

export const apiposts = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/todos"
})
