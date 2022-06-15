import {
  Route,
  BrowserRouter,
  Routes, 
} from 'react-router-dom';
import Home from '../pages/Home';
import NavBar from '../components/NavBar'
export default function AplicationRoutes() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home/>}/>   
      <Route path="/posts" element={<h1>posts</h1>}/>  
      <Route path="/contato" element={<h1>contato</h1>}/> 
      <Route path="/culture" element={<h1>culture</h1>}/> 
      <Route path="/about" element={<h1>about</h1>}/>       
      </Routes>
    </BrowserRouter>
  );
}
