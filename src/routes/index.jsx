import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import NavBar from "../components/NavBar";
import About from "../pages/About";
import Posts from "../pages/Post/Posts";
import Post from "../pages/Post/index";

import { Books } from "../pages/Books";
import Footer from "../components/Footer";

export default function AplicationRoutes() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Posts />} />
        <Route path="/posts" element={<Post />} />
        <Route path="/livros" element={<Books />} />       
        <Route path="/sobre" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
